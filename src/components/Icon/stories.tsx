import { Icon, Table } from "@fss/components";
import NotificationBell from "@fss/icons/dist/svg/notification-bell_24";
import Watson from "@fss/icons/dist/svg/watson_24";
import { storiesOf } from "@storybook/react";
import React from "react";
import { sizeToREM } from "./Icon";
import Readme from "./README.md";
import { withReadme } from "storybook-readme";

const stories = storiesOf("Components|Icon", module).addDecorator(withReadme([Readme]));

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
    content: ({ row }) => (
      <Icon size={row} title="Some icon">
        <NotificationBell />
      </Icon>
    )
  }
];

stories
  .add(
    "Basic Usage",
    () => (
      <Icon size="large" title="Mandatory Title (for accessibility)">
        <NotificationBell />
      </Icon>
    ),
    {
      text: `Basic icon`
    }
  )
  .add(
    "Circle",
    () => (
      <>
        <Icon
          size="large"
          title="Mandatory Title (for accessibility)"
          circleColor="red"
          color="white"
        >
          <NotificationBell />
        </Icon>
        <Icon
          size="large"
          title="Mandatory Title (for accessibility)"
          circleColor="red"
          color="white"
        >
          9+
        </Icon>
      </>
    ),
    {
      text: `Sometimes you want an inverted icon. Just provide the colors.`
    }
  )
  .add("Sizes", () => <Table columns={iconColumns} rows={sizes} />, {
    text: "Basic icon sizes"
  })
  .add("Manual size", () => (
    <Icon size={3} title="Mandatory Title (for accessibility)" circleColor="red" color="white">
      <Watson />
    </Icon>
  ));
