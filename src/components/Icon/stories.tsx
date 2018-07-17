import React from "react";
import { Icon, Table } from "@fss/components";
import { storiesOf } from "@storybook/react";
import { withInfo } from "@storybook/addon-info";
import notificationBell from "@fss/icons/dist/svg/notification-bell_24.svg";
import { sizeToREM } from "./Icon";
const stories = storiesOf("Components|Icon", module);

const sizes = Object.keys(sizeToREM);

const iconColumns = [
  {
    key: "size",
    header: "Size",
    content: ({ row }) => (
      <span>
        {row} ({sizeToREM[row] * 16}px)
      </span>
    )
  },
  {
    key: "icon",
    header: "Icon",
    content: ({ row }) => <Icon size={row} title="Some icon" glyph={notificationBell} />
  }
];

stories
  .add(
    "Basic Usage",
    withInfo({
      text: `
    Basic icon
  `
    })(() => (
      <Icon size="large" title="Mandatory Title (for accessibility)" glyph={notificationBell} />
    ))
  )
  .add(
    "Sizes",
    withInfo({
      text: `
    Basic icon sizes
  `
    })(() => <Table columns={iconColumns} rows={sizes} />)
  );
