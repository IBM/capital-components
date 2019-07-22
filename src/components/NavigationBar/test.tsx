import {
  cleanup,
  getByLabelText as getByLabelTextGlobal,
  fireEvent,
  act
} from "@testing-library/react";
import "jest-dom/extend-expect";
import { NavigationBar } from "capital-components";
import React from "react";
import { renderWithDefaultTheme, mockScreenSize } from "test-utils";

const {
  PrimaryBar,
  PrimaryBarIcon,
  PrimaryBarNavItem,
  PrimaryBarTitle,
  PrimaryBarDropDown,
  PrimaryBarDropDownItem
} = NavigationBar;

afterEach(cleanup);

test("Open menu, in phone", async () => {
  mockScreenSize("phone");
  const { getByRole } = renderWithDefaultTheme(
    <PrimaryBar
      id="main"
      mobileMenuRef={{ current: document.body }}
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
      renderMobileMenuContent={({ navSection, getWrapperProps }) => (
        <div {...getWrapperProps()}>{navSection}</div>
      )}
    />
  );

  const mainMenuButton = getByRole("button");
  expect(mainMenuButton).toBeInTheDocument();
  expect(mainMenuButton).toHaveAttribute(
    "aria-controls",
    "wfss-navigation-bar-primary-main-mobile-menu"
  );
  expect(getByLabelTextGlobal(document.body, "Open menu")).toBeInTheDocument();
});

describe("Show sub items", async () => {
  const screenSizes: Parameters<typeof mockScreenSize>[0][] = ["monitor", "phone"];
  screenSizes.forEach(screen => {
    it(`Clicking on the button shows the nested items. (${screen})`, () => {
      mockScreenSize(screen);
      const Comp = () => {
        const props = PrimaryBarDropDown.useDefaultState();
        return (
          <PrimaryBarDropDown id="unique" title="Something" {...props}>
            <PrimaryBarDropDownItem>Thing 1</PrimaryBarDropDownItem>
            <PrimaryBarDropDownItem>Thing 2</PrimaryBarDropDownItem>
          </PrimaryBarDropDown>
        );
      };
      const { getByRole, queryByText, getByText } = renderWithDefaultTheme(<Comp />);

      const button = getByRole("button");
      expect(button).toBeInTheDocument();
      expect(button).toHaveAttribute("aria-controls", "wfss-navigation-bar-unique-dropdown");
      expect(getByLabelTextGlobal(document.body, "Open menu for Something")).toBeInTheDocument();
      expect(queryByText("Thing 1")).not.toBeInTheDocument();

      act(() => {
        fireEvent.click(button);
      });
      expect(getByText("Thing 1")).toBeInTheDocument();
    });
  });
});
