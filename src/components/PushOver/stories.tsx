import { PushOver, PushOverItem } from "@fss/components";
import { Block, Flex } from "@fss/components/lib/primitives/elements";
import { withInfo } from "@storybook/addon-info";
import { storiesOf } from "@storybook/react";
import { Icon } from "carbon-components-react";
import * as R from "ramda";
import React from "react";
import { WithState } from "../../internal/storyHelpers";
import { useToggle } from "react-use";
import { Heading } from "../../primitives/text";

const stories = storiesOf("Components|PushOver", module);
let scrollingRef = null;
let menuRef = null;

const Item = ({ className, ...otherProps }: React.HTMLAttributes<HTMLDivElement>) => (
  <Block
    padding="20px lg"
    className={className}
    cssWithTheme={({ theme }) => `color: ${theme.color.inverse01};`}
    {...otherProps}
  />
);

const UserProfileOptions = () => (
  <React.Fragment>
    <PushOverItem>{props => <Item {...props}>Other</Item>}</PushOverItem>
    <PushOverItem>{props => <Item {...props}>Settings</Item>}</PushOverItem>
    <PushOverItem>{props => <Item {...props}>Logout</Item>}</PushOverItem>
  </React.Fragment>
);

stories
  .add(
    "Basic Usage",
    () => (
      <Flex direction="row">
        <PushOver isOpen={true} css="overflow: auto;">
          <PushOverItem isSelected={true}>{props => <Item {...props}>Item 1</Item>}</PushOverItem>
          <PushOverItem isSelected={true}>{props => <Item {...props}>Item 2</Item>}</PushOverItem>
          <PushOverItem>{props => <Item {...props}>Item 3</Item>}</PushOverItem>
        </PushOver>
        <Flex
          direction="column"
          cssWithTheme={({ theme }) => `
          flex: 1 1 auto;
          background-color: ${theme.color.brand03};
        `}
        >
          Some other content...
        </Flex>
      </Flex>
    ),
    {
      info: {
        text: `
    A push over slides out and pushes over the content beside it.
  `
      }
    }
  )
  .add(
    "With State",
    () => (
      <WithState initialState={{ open: true }}>
        {({ state, setState }) => (
          <Flex direction="row">
            <PushOver
              isOpen={state.open}
              css="overflow: auto;"
              showOverlay={true}
              onOverlayClick={() => setState(prevState => ({ open: !prevState.open }))}
            >
              <PushOverItem isSelected={true}>
                {props => <Item {...props}>Item 1</Item>}
              </PushOverItem>
              <PushOverItem isSelected={true}>
                {props => <Item {...props}>Item 2</Item>}
              </PushOverItem>
              <PushOverItem>{props => <Item {...props}>Item 3</Item>}</PushOverItem>
            </PushOver>
            <Flex
              direction="column"
              cssWithTheme={({ theme }) => `
            flex: 1 1 auto;
            background-color: ${theme.color.brand03};
          `}
            >
              Some other content...
              <button onClick={() => setState(prevState => ({ open: !prevState.open }))}>
                Open/Close
              </button>
            </Flex>
          </Flex>
        )}
      </WithState>
    ),
    {
      info: {
        text: `
      Play with the open/close state and see how it animates. Also, show overlay.
    `
      }
    }
  )
  .add(
    "Lots of items",
    () => (
      <WithState initialState={{ open: true }}>
        {({ state, setState }) => (
          <Flex direction="row">
            <PushOver isOpen={state.open} css="overflow: auto;">
              {R.range(0, 50).map(num => (
                <PushOverItem key={num} isSelected={true}>
                  {props => <Item {...props}>Item {num}</Item>}
                </PushOverItem>
              ))}
            </PushOver>
            <Flex
              direction="column"
              cssWithTheme={({ theme }) => `
            flex: 1 1 auto;
            background-color: ${theme.color.brand03};
          `}
            >
              Some other content...
              <button onClick={() => setState(prevState => ({ open: !prevState.open }))}>
                Open/Close
              </button>
            </Flex>
          </Flex>
        )}
      </WithState>
    ),
    {
      info: {
        text: `
      Sometimes you just want lots.
    `
      }
    }
  )
  .add(
    "Nested menu",
    () => {
      const [open, toggleOpen] = useToggle(true);
      const [profileOpen, toggleProfileOpen] = useToggle(false);
      const scrollingRef = React.useRef(null);
      const menuRef = React.useRef(null);
      // This example uses hooks. You can also just use the setState callback to
      // trigger the scroll.
      React.useEffect(
        () => {
          if (profileOpen && scrollingRef.current && menuRef.current) {
            scrollingRef.current.scrollTop += menuRef.current.offsetHeight;
          }
        },
        [profileOpen]
      );
      return (
        <Flex direction="row">
          <PushOver isOpen={open} css="overflow: auto;" ref={scrollingRef}>
            <Flex direction="column" css="flex: 1 0 auto;">
              {R.range(0, 9).map(num => (
                <PushOverItem key={num}>{props => <Item {...props}>Item {num}</Item>}</PushOverItem>
              ))}
            </Flex>
            <Flex direction="column" css="flex-shrink: 0;" innerRef={menuRef}>
              <Flex
                direction="row"
                alignment="center space-between"
                padding="md lg"
                cssWithTheme={({ theme }) => `
                  background-color: ${theme.color.nav01};
                  border-top: 1px solid ${theme.color.brand03};
                  color: ${theme.color.inverse01};
                  fill: ${theme.color.inverse01};
                  flex-shrink: 0;
                `}
                onClick={() => {
                  toggleProfileOpen();
                }}
              >
                User Profile <Icon name={`icon--caret--${profileOpen ? "down" : "up"}`} />
              </Flex>
              {profileOpen && <UserProfileOptions />}
            </Flex>
          </PushOver>
          <Flex
            direction="column"
            cssWithTheme={({ theme }) => `
            flex: 1 1 auto;
            background-color: ${theme.color.brand03};
          `}
          >
            Some other content...
            <button onClick={() => toggleOpen()}>Open/Close</button>
          </Flex>
        </Flex>
      );
    },
    {
      info: {
        text: `
      A nested menu that allows scrolling on open.
    `
      }
    }
  )
  .add(
    "List mode vs freestyle",
    () => {
      const [openLeft, toggleOpenLeft] = useToggle(true);
      const [openRight, toggleOpenRight] = useToggle(true);

      return (
        <Flex direction="row" css="width: 100%;">
          <PushOver isOpen={openLeft} css="overflow: auto;" onCloseClick={() => toggleOpenLeft()}>
            This is a list
            <PushOverItem isSelected={false}>
              {props => <Item {...props}>Item 1</Item>}
            </PushOverItem>
            <PushOverItem isSelected={false}>
              {props => <Item {...props}>Item 2</Item>}
            </PushOverItem>
            <PushOverItem>{props => <Item {...props}>Item 3</Item>}</PushOverItem>
          </PushOver>
          <Flex
            direction="column"
            cssWithTheme={({ theme }) => `
          flex: 1 1 auto;
          background-color: ${theme.color.brand03};
        `}
          >
            Some other content...
            <button onClick={() => toggleOpenLeft()}>Open left</button>
            <button onClick={() => toggleOpenRight()}>Open right</button>
          </Flex>
          <PushOver
            isOpen={openRight}
            css="overflow: auto;"
            closable
            onCloseClick={() => toggleOpenRight()}
            position="right"
            closePosition="right"
            listMode={false}
          >
            <Heading level="3">Inquiry</Heading>
            This is freestyle mode
          </PushOver>
        </Flex>
      );
    },
    {
      info: {
        text: `Sometimes you don't want a list layout, and you want to layout items whichever way you want`,
        disable: true
      }
    }
  );
