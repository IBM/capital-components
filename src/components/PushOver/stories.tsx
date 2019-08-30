import { PushOver, PushOverItem } from "capital-components";
import { Block, Flex } from "capital-components/lib/primitives/elements";
import { storiesOf } from "@storybook/react";
import { Icon } from "carbon-components-react";
import * as R from "ramda";
import React, { useState } from "react";
import { ExpressiveHeading03 } from "capital-components/lib/primitives/text";
import { styled } from "capital-components/lib/support/theme";
import useToggle from "../../hooks/useToggle";
import Readme from "./README.md";
import { withReadme } from "storybook-readme";

const stories = storiesOf("Components|PushOver", module).addDecorator(withReadme([Readme]));

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

const MobileWrapper = styled.div(
  ({ theme }) => theme.fonts.styles.bodyShort02,
  ({ theme }) => `
  flex: 1 1 auto;
  overflow: auto;
  background-color: ${theme.color.inverse02};
`
);

stories
  .add(
    "Basic Usage",
    () => (
      <Flex direction="row" css="flex: 1 1 auto;">
        <PushOver isOpen={true} css="overflow: auto;">
          <MobileWrapper>
            <PushOverItem isSelected={true}>{props => <Item {...props}>Item 1</Item>}</PushOverItem>
            <PushOverItem isSelected={true}>{props => <Item {...props}>Item 2</Item>}</PushOverItem>
            <PushOverItem>{props => <Item {...props}>Item 3</Item>}</PushOverItem>
          </MobileWrapper>
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
    () => {
      const [open, setOpen] = useState(true);
      return (
        <Flex direction="row" css="flex: 1 1 auto;">
          <PushOver
            isOpen={open}
            css="overflow: auto;"
            showOverlay={true}
            onOverlayClick={() => setOpen(prevState => !prevState)}
          >
            <MobileWrapper>
              <PushOverItem isSelected={true}>
                {props => <Item {...props}>Item 1</Item>}
              </PushOverItem>
              <PushOverItem isSelected={true}>
                {props => <Item {...props}>Item 2</Item>}
              </PushOverItem>
              <PushOverItem>{props => <Item {...props}>Item 3</Item>}</PushOverItem>
            </MobileWrapper>
          </PushOver>
          <Flex
            direction="column"
            cssWithTheme={({ theme }) => `
            flex: 1 1 auto;
            background-color: ${theme.color.brand03};
          `}
          >
            Some other content...
            <button onClick={() => setOpen(prevState => !prevState)}>Open/Close</button>
          </Flex>
        </Flex>
      );
    },
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
    () => {
      const [open, setOpen] = useState(true);
      return (
        <Flex direction="row" css="flex: 1 1 auto;">
          <PushOver isOpen={open} css="overflow: auto;">
            <MobileWrapper>
              {R.range(0, 50).map(num => (
                <PushOverItem key={num} isSelected={true}>
                  {props => <Item {...props}>Item {num}</Item>}
                </PushOverItem>
              ))}
            </MobileWrapper>
          </PushOver>
          <Flex
            direction="column"
            cssWithTheme={({ theme }) => `
            flex: 1 1 auto;
            background-color: ${theme.color.brand03};
          `}
          >
            Some other content...
            <button onClick={() => setOpen(prevState => !prevState)}>Open/Close</button>
          </Flex>
        </Flex>
      );
    },
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
      React.useEffect(() => {
        if (profileOpen && scrollingRef.current && menuRef.current) {
          scrollingRef.current.scrollTop += menuRef.current.offsetHeight;
        }
      }, [profileOpen]);
      return (
        <Flex direction="row" css="flex: 1 1 auto;">
          <PushOver isOpen={open}>
            <MobileWrapper innerRef={scrollingRef}>
              <Flex direction="column" css="flex: 1 0 auto;">
                {R.range(0, 9).map(num => (
                  <PushOverItem key={num}>
                    {props => <Item {...props}>Item {num}</Item>}
                  </PushOverItem>
                ))}
              </Flex>
              <Flex direction="column" css="flex-shrink: 0;" innerRef={menuRef}>
                <Flex
                  direction="row"
                  alignment="center space-between"
                  padding="md lg"
                  cssWithTheme={({ theme }) => `
                  background-color: ${theme.color.ui05};
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
            </MobileWrapper>
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
    "Left and right",
    () => {
      const [openLeft, toggleOpenLeft] = useToggle(true);
      const [openRight, toggleOpenRight] = useToggle(true);

      return (
        <Flex direction="row" css="width: 100%; flex: 1 1 auto;">
          <PushOver isOpen={openLeft} css="overflow: auto;" onCloseClick={() => toggleOpenLeft()}>
            <MobileWrapper>
              This is a list
              <PushOverItem isSelected={false}>
                {props => <Item {...props}>Item 1</Item>}
              </PushOverItem>
              <PushOverItem isSelected={false}>
                {props => <Item {...props}>Item 2</Item>}
              </PushOverItem>
              <PushOverItem>{props => <Item {...props}>Item 3</Item>}</PushOverItem>
            </MobileWrapper>
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
            closable
            onCloseClick={() => toggleOpenRight()}
            position="right"
            closePosition="right"
          >
            <Flex
              direction="column"
              padding="xl 2xl"
              cssWithTheme={({ theme }) => `
              background-color: ${theme.color.ui02};
              overflow: auto;
              flex: 1 1 auto;
            `}
            >
              <ExpressiveHeading03>Inquiry</ExpressiveHeading03>
              This is freestyle mode
            </Flex>
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
  )
  .add(
    "Nested",
    () => {
      const [openLeft, toggleOpenLeft] = useToggle(true);
      const [openRight, toggleOpenRight] = useToggle(true);

      return (
        <Flex direction="column" css="flex: 1 1 auto;">
          Some content to sit under
          <Flex direction="row" css="width: 100%; flex: 1 1 auto;">
            <PushOver
              isOpen={openLeft}
              css="overflow: auto;"
              onCloseClick={() => toggleOpenLeft()}
              fullScreenMode={false}
            >
              <MobileWrapper>
                <PushOverItem isSelected={false}>
                  {props => <Item {...props}>Item 1</Item>}
                </PushOverItem>
                <PushOverItem isSelected={false}>
                  {props => <Item {...props}>Item 2</Item>}
                </PushOverItem>
                <PushOverItem>{props => <Item {...props}>Item 3</Item>}</PushOverItem>
              </MobileWrapper>
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
              closable
              onCloseClick={() => toggleOpenRight()}
              position="right"
              closePosition="right"
            >
              <Flex
                direction="column"
                padding="xl 2xl"
                cssWithTheme={({ theme }) => `
              background-color: ${theme.color.ui02};
              overflow: auto;
              flex: 1 1 auto;
            `}
              >
                <ExpressiveHeading03>Inquiry</ExpressiveHeading03>
                This is freestyle mode
              </Flex>
            </PushOver>
          </Flex>
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
