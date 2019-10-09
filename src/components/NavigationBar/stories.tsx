import { Icon, NavigationBar } from "capital-components";
import NotificationBell from "../../fss-icons/notification-bell_24";
import { storiesOf } from "@storybook/react";
import React, { useRef } from "react";
import useToggle from "../../hooks/useToggle";
import { Flex } from "capital-components/lib/primitives/elements/Elements";
import Readme from "./README.md";
import { withReadme } from "storybook-readme";
import { styled } from "capital-components/lib/support/theme";

const stories = storiesOf("Components|Navigation Bar", module).addDecorator(withReadme([Readme]));

const {
  PrimaryBar,
  PrimaryBarNavItem,
  PrimaryBarTitle,
  PrimaryBarIcon,
  PrimaryBarDropDown,
  PrimaryBarDropDownItem
} = NavigationBar;

const FlexUL = Flex.withComponent("ul");

export const MainWrapper = styled.div`
  display: flex;
  flex-direction: row;
  overflow: hidden;
  width: 100%;
  flex: 1 1 auto;
`;

const renderMobileMenuContent = ({ navSection, getWrapperProps }) => (
  <div {...getWrapperProps()}>
    <FlexUL
      direction="column"
      cssWithTheme={({ theme }) => `
        color: ${theme.color.inverse01};
        flex: 1 1 auto;
        overflow: auto;
      `}
    >
      {navSection}
    </FlexUL>
  </div>
);

stories.add(
  "Navigation Items",
  () => (
    <PrimaryBar
      titleSection={<PrimaryBarTitle>Title</PrimaryBarTitle>}
      navSection={
        <>
          <PrimaryBarNavItem>Something</PrimaryBarNavItem>
          <PrimaryBarNavItem>Else</PrimaryBarNavItem>
        </>
      }
    />
  ),
  {
    info: {
      inline: true,
      text: `
            Basic Primary bar with a few navigation items
        `
    }
  }
);

stories.add(
  "With Icons",
  () => (
    <PrimaryBar
      titleSection={<PrimaryBarTitle>Title</PrimaryBarTitle>}
      navSection={
        <>
          <PrimaryBarNavItem>Something</PrimaryBarNavItem>
          <PrimaryBarNavItem>Else</PrimaryBarNavItem>
        </>
      }
      rightSection={
        <>
          <PrimaryBarIcon>
            <Icon size="medium" title="notifications">
              <NotificationBell />
            </Icon>
          </PrimaryBarIcon>
          <PrimaryBarIcon>
            <Icon size="medium" title="notifications" circleColor="red" color="black">
              <NotificationBell />
            </Icon>
          </PrimaryBarIcon>
          <PrimaryBarIcon isSelected>
            <Icon size="medium" title="notifications" circleColor="white" color="black">
              <NotificationBell />
            </Icon>
          </PrimaryBarIcon>
        </>
      }
    />
  ),
  {
    info: {
      inline: true,
      text: `
              Basic Primary bar with a few navigation items
          `
    }
  }
);

stories.add(
  "Too many nav items",
  () => (
    <div css="max-width: 500px">
      <PrimaryBar
        titleSection={<PrimaryBarTitle>Title</PrimaryBarTitle>}
        navSection={
          <>
            <PrimaryBarNavItem>Something 1</PrimaryBarNavItem>
            <PrimaryBarNavItem>Else 2</PrimaryBarNavItem>
            <PrimaryBarNavItem>Something 3</PrimaryBarNavItem>
            <PrimaryBarNavItem>Else 4</PrimaryBarNavItem>
            <PrimaryBarNavItem>Something 5</PrimaryBarNavItem>
            <PrimaryBarNavItem>Else 6</PrimaryBarNavItem>
            <PrimaryBarNavItem>Something 7</PrimaryBarNavItem>
            <PrimaryBarNavItem>Else 8</PrimaryBarNavItem>
          </>
        }
        rightSection={
          <PrimaryBarIcon>
            <Icon size="medium" title="notifications">
              <NotificationBell />
            </Icon>
          </PrimaryBarIcon>
        }
      />
    </div>
  ),
  {
    info: {
      inline: true,
      text: `
                Basic Primary bar with a few navigation items
            `
    }
  }
);

stories.add(
  "Mobile nav support",
  () => {
    const menuRef = useRef(null);
    const [open, toggleOpen] = useToggle(false);
    return (
      <MainWrapper>
        <Flex innerRef={menuRef} />
        <PrimaryBar
          renderMobileMenuContent={renderMobileMenuContent}
          showMenu={open}
          onMenuToggle={toggleOpen}
          mobileMenuRef={menuRef}
          titleSection={<PrimaryBarTitle>Title</PrimaryBarTitle>}
          navSection={
            <>
              <PrimaryBarNavItem>Something 1</PrimaryBarNavItem>
              <PrimaryBarNavItem>Else 2</PrimaryBarNavItem>
              <PrimaryBarNavItem>Something 3</PrimaryBarNavItem>
              <PrimaryBarNavItem>Else 4</PrimaryBarNavItem>
              <PrimaryBarNavItem>Something 5</PrimaryBarNavItem>
              <PrimaryBarNavItem>Else 6</PrimaryBarNavItem>
              <PrimaryBarNavItem>Something 7</PrimaryBarNavItem>
              <PrimaryBarNavItem>Else 8</PrimaryBarNavItem>
            </>
          }
          rightSection={
            <PrimaryBarIcon>
              <Icon size="medium" title="notifications">
                <NotificationBell />
              </Icon>
            </PrimaryBarIcon>
          }
        />
      </MainWrapper>
    );
  },
  {
    info: {
      inline: true,
      text: `
                  Basic Primary bar with a few navigation items
              `
    }
  }
);

stories.add(
  "Navigation sub items",
  () => {
    const menuRef = useRef(null);
    const [open, toggleOpen] = useToggle(false);
    const primaryBarDropDownProps = PrimaryBarDropDown.useDefaultState();

    return (
      <Flex css="max-width: 500px;" direction="row">
        <div ref={menuRef} />
        <PrimaryBar
          renderMobileMenuContent={renderMobileMenuContent}
          showMenu={open}
          onMenuToggle={toggleOpen}
          mobileMenuRef={menuRef}
          titleSection={<PrimaryBarTitle>Title</PrimaryBarTitle>}
          navSection={
            <>
              <PrimaryBarNavItem>Something 1</PrimaryBarNavItem>
              <PrimaryBarNavItem>Else 2</PrimaryBarNavItem>
              <PrimaryBarDropDown title="Something more" id="drop1" {...primaryBarDropDownProps}>
                <PrimaryBarDropDownItem>Another option</PrimaryBarDropDownItem>
                <PrimaryBarDropDownItem>One more</PrimaryBarDropDownItem>
              </PrimaryBarDropDown>
            </>
          }
          rightSection={
            <PrimaryBarIcon>
              <Icon size="medium" title="notifications">
                <NotificationBell />
              </Icon>
            </PrimaryBarIcon>
          }
        />
      </Flex>
    );
  },
  {
    info: {
      inline: true,
      text: `
                  Basic Primary bar with a few navigation items
              `
    }
  }
);

stories.add("Navigation menu without items", () => {
  const [open, toggleOpen] = useToggle(false);
  return (
    <Flex css="max-width: 500px;" direction="row">
      <PrimaryBar
        renderMobileMenuContent={renderMobileMenuContent}
        showMenu={open}
        onMenuToggle={toggleOpen}
        titleSection={<PrimaryBarTitle>Title</PrimaryBarTitle>}
        rightSection={
          <PrimaryBarIcon>
            <Icon size="medium" title="notifications">
              <NotificationBell />
            </Icon>
          </PrimaryBarIcon>
        }
      />
    </Flex>
  );
});
