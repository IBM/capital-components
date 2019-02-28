import { cleanup, getByLabelText as getByLabelTextGlobal } from "react-testing-library";
import "jest-dom/extend-expect";
import { NavigationBar } from "@fss/components";
import React from "react";
import { renderWithDefaultTheme, mockScreenSize } from "test-utils";

const { PrimaryBar, PrimaryBarIcon, PrimaryBarNavItem, PrimaryBarTitle } = NavigationBar;

afterEach(cleanup);

test("Basic snapshot, in monitor", async () => {
  mockScreenSize("monitor");
  const { baseElement } = renderWithDefaultTheme(
    <PrimaryBar
      titleSection={<PrimaryBarTitle>Title</PrimaryBarTitle>}
      navSection={
        <>
          <PrimaryBarNavItem>Item 1</PrimaryBarNavItem>
          <PrimaryBarNavItem>Item 2</PrimaryBarNavItem>
        </>
      }
      rightSection={<PrimaryBarIcon>ICO</PrimaryBarIcon>}
    />
  );

  expect(baseElement).toMatchSnapshot();
});

test("Open menu, in phone", async () => {
  mockScreenSize("phone");
  const { getByRole } = renderWithDefaultTheme(
    <PrimaryBar
      id="main"
      mobileMenuRef={document.body}
      showMenu={true}
      titleSection={<PrimaryBarTitle>Title</PrimaryBarTitle>}
      navSection={
        <>
          <PrimaryBarNavItem>Item 1</PrimaryBarNavItem>
          <PrimaryBarNavItem isSelected>Item 2</PrimaryBarNavItem>
        </>
      }
      rightSection={
        <>
          <PrimaryBarIcon>ICO</PrimaryBarIcon>
          <PrimaryBarIcon isSelected>ICO2</PrimaryBarIcon>
        </>
      }
      mobileMenuHeaderContent="Some content"
    />
  );

  const mainMenuButton = getByRole("button");
  expect(mainMenuButton).toBeInTheDocument();
  expect(mainMenuButton).toHaveAttribute(
    "aria-controls",
    "wfss-navigation-bar-primary-main-mobile-menu"
  );
  expect(getByLabelTextGlobal(document.body, "Menu")).toBeInTheDocument();
});
