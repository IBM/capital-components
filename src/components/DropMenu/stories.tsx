import React from "react";
import { DropMenu, DropMenuItem, Popover, Icon } from "@fss/components";
import { storiesOf } from "@storybook/react";
import { withInfo } from "@storybook/addon-info";
import { action } from "@storybook/addon-actions";
import glyph from "@fss/icons/dist/svg/user_32.svg";
const stories = storiesOf("Components|DropMenu", module);

stories.add(
  "Basic",
  withInfo({
    text: `
    Drop menu styling, usually used in a popover. The DropMenu will require ThemeProvider for colorings.
  `
  })(() => (
    <Popover
      reference={({ ref }) => <Icon size="large" title="user menu" ref={ref} glyph={glyph} />}
      placement="bottom-end"
      show={true}
    >
      <DropMenu>
        <DropMenuItem>Item 1</DropMenuItem>
        <DropMenuItem>Item 2</DropMenuItem>
        <DropMenuItem seperator="top">Item 3</DropMenuItem>
      </DropMenu>
    </Popover>
  ))
);

stories.add(
  "Clickable items",
  withInfo({
    text: `
      If it's clickable, it will have a hover style.
    `
  })(() => (
    <Popover
      reference={({ ref }) => <Icon size="large" title="user menu" ref={ref} glyph={glyph} />}
      placement="bottom-end"
      show={true}
    >
      <DropMenu>
        <DropMenuItem onClick={action("item 1")}>Clickable item 1</DropMenuItem>
        <DropMenuItem seperator="bottom">Item 2</DropMenuItem>
        <DropMenuItem onClick={action("item 3")}>Clickable item 3</DropMenuItem>
      </DropMenu>
    </Popover>
  ))
);
