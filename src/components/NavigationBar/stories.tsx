import { Icon, NavigationBar } from "@fss/components";
import NotificationBell from "@fss/icons/dist/svg/notification-bell_24";
import { storiesOf } from "@storybook/react";
import React, { useRef } from "react";
import useToggle from "../../hooks/useToggle";
import { Flex } from "@fss/components/lib/primitives/elements/Elements";

const stories = storiesOf("Components|Navigation Bar", module);

const { PrimaryBar, PrimaryBarNavItem, PrimaryBarTitle, PrimaryBarIcon } = NavigationBar;

const FlexUL = Flex.withComponent("ul");

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
