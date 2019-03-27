#! /usr/bin/env node

const github = require("octonode");
const normalizeUrl = require("normalize-url");
const urlRegex = require("url-regex");
const fs = require("fs");
const util = require("util");
const execP = util.promisify(require("child_process").exec);

const argv = require("yargs").argv;

if (!process.env.CI || !process.env.TRAVIS) {
  throw new Error("Could not detect Travis CI environment");
}

const githubToken = process.env.GH_TOKEN;
const nowToken = process.env.NOW_TOKEN;

if (!githubToken) {
  throw new Error("Missing required environment variable GH_TOKEN");
}

if (!nowToken) {
  throw new Error("Missing required environment variable NOW_TOKEN");
}

const client = github.client(githubToken, {
  hostname: "github.ibm.com/api/v3"
});

const ghRepo = client.repo(process.env.TRAVIS_REPO_SLUG);

function noop() {}

function getUrl(content) {
  const urls = content.match(urlRegex()) || [];

  return urls.map(url => normalizeUrl(url.trim().replace(/\.+$/, "")))[0];
}

async function deploy(context, sha, target) {
  try {
    await ghRepo.statusAsync(sha, {
      context,
      state: "pending",
      description: `Δ Now ${context} deployment pending`
    });

    const args = ["--token", nowToken, "--no-clipboard"];
    let stdout = "";

    if (target) {
      args.push(...["--target", target]);
    }

    if (process.env.TRAVIS_PULL_REQUEST) {
      args.push(...["-m", `pr_number=${process.env.TRAVIS_PULL_REQUEST}`]);
    }

    try {
      const output = await execP(`now ${args.join(" ")}`);

      console.log("stdout: ", output.stdout);
      console.error("stderr: ", output.stderr);
      stdout = output.stdout;
    } catch (err) {
      await ghRepo.statusAsync(sha, {
        context,
        state: "error",
        description: `Δ Now ${context} deployment failed. See Travis logs for details.`
      });
      throw err;
    }

    const target_url = getUrl(stdout);

    await ghRepo.statusAsync(sha, {
      context,
      target_url,
      state: "success",
      description: `Δ Now ${context} deployment complete`
    });
  } catch (e) {
    console.error("Something went wrong", e);
    throw e;
  }
  process.exit(0);
}

switch (process.env.TRAVIS_EVENT_TYPE) {
  case "pull_request":
    deploy("staging", process.env.TRAVIS_PULL_REQUEST_SHA);
}
