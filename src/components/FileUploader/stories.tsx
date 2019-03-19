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
    <div css="width: 300px;">
      <FileUploader onFilesAdded={action("Files Changed")} />
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
      name: args[1],
      content: args[0]
    };
  }
};

const fileList = [
  safeCreatefile([], "File 1"),
  safeCreatefile([], "File 2"),
  safeCreatefile([], "Some long file name that will need to wrap around"),
  safeCreatefile([], "superlongunbrokenfilewithasinglefreakinglongfilename")
];

stories.add("Preset list of files", () => (
  <div css="width: 300px;">
    <FileUploader
      files={fileList}
      onFilesAdded={action("Files added")}
      onFileClick={action("file clicked")}
    />
  </div>
));

stories.add("DeletableFiles", () => (
  <div css="width: 300px;">
    <FileUploader
      files={fileList}
      onFilesAdded={action("Files added")}
      onFilesRemoved={action("files removed")}
      canRemoveFile={() => true}
    />
  </div>
));

stories.add("Removable files", () => (
  <div css="width: 300px;">
    <FileUploader
      files={fileList}
      onFilesAdded={action("Files added")}
      onFilesRemoved={action("Files removed")}
      canRemoveFile={file => file.name === "File 1"}
      onFileClick={action("file clicked")}
    />
  </div>
));

stories.add("Clickable files", () => (
  <div css="width: 300px;">
    <FileUploader
      files={fileList}
      onFilesAdded={action("Files added")}
      onFilesRemoved={action("Files removed")}
      canRemoveFile={file => file.name === "File 1"}
      onFileClick={action("file clicked")}
      canClickFile={file => file.name === "File 2"}
    />
  </div>
));

stories.add("Disabled", () => (
  <div css="width: 300px;">
    <FileUploader
      disabled
      files={fileList}
      onFilesAdded={action("Files added")}
      onFilesRemoved={action("Files removed")}
      canRemoveFile={file => file.name === "File 1"}
      onFileClick={action("file clicked")}
      canClickFile={file => file.name === "File 2"}
    />
  </div>
));
