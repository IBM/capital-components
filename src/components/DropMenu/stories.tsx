import { DropMenu, DropMenuItem, Icon, Popover } from "capital-components";
import UserIcon from "../../fss-icons/user_32";
import { action } from "@storybook/addon-actions";
import { withInfo } from "@storybook/addon-info";
import { storiesOf } from "@storybook/react";
import React, { useState } from "react";
import styled from "react-emotion";
import Readme from "./README.md";
import { withReadme } from "storybook-readme";

const stories = storiesOf("Components|DropMenu", module).addDecorator(withReadme([Readme]));

stories.add(
  "Basic",
  withInfo({
    text: `
    Drop menu styling, usually used in a popover. The DropMenu will require ThemeProvider for colorings.
  `
  })(() => (
    <Popover
      reference={({ ref }) => (
        <Icon size="large" title="user menu" ref={ref}>
          <UserIcon />
        </Icon>
      )}
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

const LargeRef = styled.div`
  height: 100px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`;

stories.add(
  "Expanding content",
  () => {
    const [items, setItems] = useState([]);
    return (
      <Popover
        reference={({ ref }) => (
          <LargeRef>
            <Icon size="large" title="user menu" ref={ref}>
              <UserIcon />
            </Icon>
          </LargeRef>
        )}
        placement="bottom-end"
        show={true}
      >
        <DropMenu>
          <DropMenuItem onClick={action("item 1")}>Clickable item 1</DropMenuItem>
          <DropMenuItem seperator="bottom">Item 2</DropMenuItem>
          <DropMenuItem onClick={action("item 3")}>Clickable item 3</DropMenuItem>
          {items.map(item => (
            <DropMenuItem key={item} seperator="bottom">
              {item}
            </DropMenuItem>
          ))}
          <DropMenuItem
            onClick={() => setItems(prevState => [...prevState, "new" + prevState.length])}
          >
            Add
          </DropMenuItem>
        </DropMenu>
      </Popover>
    );
  },
  {
    text: `
        Expandable content shifts items
      `
  }
);

stories.add(
  "Clickable items",
  withInfo({
    text: `
      Clickables with hover effects
    `
  })(() => (
    <Popover
      reference={({ ref }) => (
        <Icon size="large" title="user menu" ref={ref}>
          <UserIcon />
        </Icon>
      )}
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
