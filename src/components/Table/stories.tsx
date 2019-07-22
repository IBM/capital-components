import { Table } from "capital-components";
import { withInfo } from "@storybook/addon-info";
import { storiesOf } from "@storybook/react";
import React from "react";
import Readme from "./README.md";
import { withReadme } from "storybook-readme";

const stories = storiesOf("Components|Table", module).addDecorator(withReadme([Readme]));

const columns = [
  {
    key: "col1",
    header: "Header1",
    content: ({ row, colKey }) => row[colKey]
  },
  {
    key: "col2",
    header: "Header2",
    content: ({ row, colKey }) => row[colKey]
  }
];

stories.add(
  "Basic Usage",
  withInfo({
    text: `
    Basic Table
  `
  })(() => (
    <Table
      columns={columns}
      rows={[
        {
          col1: "rowitem1",
          col2: "rowitem2"
        }
      ]}
    />
  ))
);
