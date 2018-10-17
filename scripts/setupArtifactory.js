#!/usr/bin/env node

const https = require("https");
const fs = require("fs");
const path = require("path");
const readline = require("readline");
const util = require("util");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const q = text => new Promise(resolve => rl.question(text, resolve));
const appendFileP = util.promisify(fs.appendFile);

const httpsGet = options =>
  new Promise((resolve, reject) => {
    https
      .get(options, resp => {
        let data = "";

        // A chunk of data has been recieved.
        resp.on("data", chunk => {
          data += chunk;
        });

        // The whole response has been received. Print out the result.
        resp.on("end", () => {
          resolve(data);
        });
      })
      .on("error", err => {
        reject(err);
      });
  });

const main = async () => {
  const email = await q("Internet email: ");
  const password = await q("Intranet password: ");

  const options = {
    hostname: "na.artifactory.swg-devops.com",
    port: 443,
    path: "/artifactory/api/npm/auth",
    method: "GET",
    headers: {
      Authorization: `Basic ${new Buffer(`${email}:${password}`).toString("base64")}`
    }
  };

  const npmGeneralAuth = await httpsGet(options);
  const _authString = npmGeneralAuth.slice(
    npmGeneralAuth.indexOf("_auth"),
    npmGeneralAuth.indexOf("\n")
  );

  const fssSpecificAuth = await httpsGet({
    ...options,
    path: "/artifactory/api/npm/ip-wfss-npm-virtual/auth/fss"
  });
  const finalResult = `\n${[_authString, fssSpecificAuth].join("\n")}`;

  await appendFileP(path.resolve(".npmrc"), finalResult);

  console.log("Success!");
  process.exit(0);
};

main();
