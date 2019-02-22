import { Icon, Table, NavigationBar } from "@fss/components";
import NotificationBell from "@fss/icons/dist/svg/notification-bell_24";
import { withInfo } from "@storybook/addon-info";
import { storiesOf } from "@storybook/react";
import React from "react";

const stories = storiesOf("Components|Navigation Bar", module);

const { PrimaryBar, PrimaryBarNavItem, PrimaryBarTitle, PrimaryBarIcon } = NavigationBar;

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
