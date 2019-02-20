import { DropMenu, DropMenuItem, Icon, Popover } from "@fss/components";
import UserIcon from "@fss/icons/dist/svg/user_32";
import { action } from "@storybook/addon-actions";
import { withInfo } from "@storybook/addon-info";
import { storiesOf } from "@storybook/react";
import React from "react";
import styled from "react-emotion";
import { WithState } from "../../internal/storyHelpers";

const stories = storiesOf("Components|DropMenu", module);

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
  withInfo({
    text: `
    Expandable content shifts items
    `
  })(() => (
    <WithState initialState={{ items: [] }}>
      {({ state, setState }) => (
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
            {state.items.map(item => (
              <DropMenuItem key={item} seperator="bottom">
                {item}
              </DropMenuItem>
            ))}
            <DropMenuItem
              onClick={() =>
                setState(prevState => ({
                  items: [...prevState.items, "new" + prevState.items.length]
                }))
              }
            >
              Add
            </DropMenuItem>
          </DropMenu>
        </Popover>
      )}
    </WithState>
  ))
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
