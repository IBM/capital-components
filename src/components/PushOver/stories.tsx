import React from "react";
import { PushOver, PushOverItem } from "@fss/components";
import { storiesOf } from "@storybook/react";
import { withInfo } from "@storybook/addon-info";
import { Flex, Block } from "@fss/components/lib/primitives/elements";
import { WithState } from "../../internal/storyHelpers";
import * as R from "ramda";
import { Icon } from "carbon-components-react";

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
    withInfo({
      text: `
    A push over slides out and pushes over the content beside it.
  `
    })(() => (
      <Flex direction="row">
        <PushOver isOpen css="overflow: auto;">
          <PushOverItem isSelected>{props => <Item {...props}>Item 1</Item>}</PushOverItem>
          <PushOverItem isSelected>{props => <Item {...props}>Item 2</Item>}</PushOverItem>
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
    ))
  )
  .add(
    "With State",
    withInfo({
      text: `
      Play with the open/close state and see how it animates. Also, show overlay.
    `
    })(() => (
      <WithState initialState={{ open: true }}>
        {({ state, setState }) => (
          <Flex direction="row">
            <PushOver
              isOpen={state.open}
              css="overflow: auto;"
              showOverlay
              onOverlayClick={() => setState(prevState => ({ open: !prevState.open }))}
            >
              <PushOverItem isSelected>{props => <Item {...props}>Item 1</Item>}</PushOverItem>
              <PushOverItem isSelected>{props => <Item {...props}>Item 2</Item>}</PushOverItem>
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
    ))
  )
  .add(
    "Lots of items",
    withInfo({
      text: `
      Sometimes you just want lots.
    `
    })(() => (
      <WithState initialState={{ open: true }}>
        {({ state, setState }) => (
          <Flex direction="row">
            <PushOver isOpen={state.open} css="overflow: auto;">
              {R.range(0, 50).map(num => (
                <PushOverItem key={num} isSelected>
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
    ))
  )
  .add(
    "Nested menu",
    withInfo({
      text: `
      A nested menu that allows scrolling on open.
    `
    })(() => (
      <WithState initialState={{ open: true, profileOpen: false }}>
        {({ state, setState }) => (
          <Flex direction="row">
            <PushOver isOpen={state.open} css="overflow: auto;" ref={node => (scrollingRef = node)}>
              <Flex direction="column" css="flex: 1 0 auto;">
                {R.range(0, 9).map(num => (
                  <PushOverItem key={num}>
                    {props => <Item {...props}>Item {num}</Item>}
                  </PushOverItem>
                ))}
              </Flex>
              <Flex direction="column" css="flex-shrink: 0;" innerRef={node => (menuRef = node)}>
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
                    setState(
                      prevState => ({ profileOpen: !prevState.profileOpen }),
                      nextState => {
                        if (nextState.profileOpen && scrollingRef && menuRef) {
                          scrollingRef.scrollTop += menuRef.offsetHeight;
                        }
                      }
                    );
                  }}
                >
                  User Profile <Icon name={`icon--caret--${state.profileOpen ? "down" : "up"}`} />
                </Flex>
                {state.profileOpen && <UserProfileOptions />}
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
              <button onClick={() => setState(prevState => ({ open: !prevState.open }))}>
                Open/Close
              </button>
            </Flex>
          </Flex>
        )}
      </WithState>
    ))
  );
