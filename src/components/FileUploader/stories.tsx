import { FileUploader } from "@fss/components";
import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import Readme from "./README.md";
import { withReadme } from "storybook-readme";

const stories = storiesOf("Components|FileUploader", module).addDecorator(withReadme([Readme]));

stories.add(
  "Basic",
  () => (
    <div css="width: 400px;">
      <FileUploader onChange={action("Files Changed")} />
    </div>
  ),
  {
    text: `
      Nothing special
    `
  }
);

const safeCreatefile: (...args: any[]) => File = (...args) => {
  try {
    return new (File as any)(...args);
  } catch (err) {
    // Because IE11 is terrible
    // Note, this is not actually a file object. Just used for storybooks.
    return {
      bane: args[1],
      content: args[0]
    };
  }
};

const fileList = [
  safeCreatefile([], "File 1"),
  safeCreatefile([], "File 2"),
  safeCreatefile([], "Some long file name that will need to wrap around")
];

const fileClick = (file: File | { name: string; docID: string }) => {
  console.log(file.name);
};

stories.add(
  "Preset list of files",
  () => (
    <div css="width: 300px;">
      <FileUploader
        initialFilesSelected={fileList}
        onChange={action("Files Changed")}
        onFileClick={fileClick}
      />
    </div>
  ),
  {
    text: `
        Nothing special
      `
  }
);
