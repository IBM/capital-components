import { cleanup } from "react-testing-library";
import "jest-dom/extend-expect";
import { BannerRibbon } from "@fss/components";
import React from "react";
import { renderWithDefaultTheme, mockScreenSize } from "test-utils";

afterEach(cleanup);

test("Basic title", async () => {
  mockScreenSize("monitor");
  const { queryByRole, getByRole } = renderWithDefaultTheme(<BannerRibbon.Ribbon title="Title" />);

  // When not expandable, it is a header element
  expect(queryByRole("button")).not.toBeInTheDocument();
  expect(getByRole("header")).toBeInTheDocument();
});

test("Expanding is prevented without a onExpandClick prop", async () => {
  mockScreenSize("monitor");
  const { getByRole } = renderWithDefaultTheme(
    <BannerRibbon.Ribbon title="Title">Some fixed content</BannerRibbon.Ribbon>
  );

  // When not expandable, it is a header element
  expect(getByRole("header")).toBeInTheDocument();
});

test("Expandable when children provided with an onExpandClick handler", async () => {
  mockScreenSize("monitor");
  const { getByRole } = renderWithDefaultTheme(
    <BannerRibbon.Ribbon title="Title" onExpandClick={jest.fn()}>
      Some expanding content
    </BannerRibbon.Ribbon>
  );

  expect(getByRole("button")).toBeInTheDocument();
});

test("Expanding is prevented without a onExpandClick prop", async () => {
  mockScreenSize("monitor");
  const { getByRole } = renderWithDefaultTheme(
    <BannerRibbon.Ribbon title="Title">Some fixed content</BannerRibbon.Ribbon>
  );

  // When not expandable, it is a header element
  expect(getByRole("header")).toBeInTheDocument();
});

test("Expanding is prevented when explicitly disabled", async () => {
  mockScreenSize("monitor");
  const { getByRole } = renderWithDefaultTheme(
    <BannerRibbon.Ribbon title="Title" expandable={false} onExpandClick={jest.fn()}>
      Some fixed content
    </BannerRibbon.Ribbon>
  );

  // When not expandable, it is a header element
  expect(getByRole("header")).toBeInTheDocument();
});

test("Expandable content in monitor", async () => {
  mockScreenSize("monitor");
  const { getByRole, getByText } = renderWithDefaultTheme(
    <BannerRibbon.Ribbon
      title="Title"
      isExpanded={true}
      expandable
      floatRightOfTitle={<div>Some floating content</div>}
      onExpandClick={jest.fn()}
    >
      Some fixed content
    </BannerRibbon.Ribbon>
  );

  expect(getByRole("button")).toBeInTheDocument();
  expect(getByText("Some floating content")).toBeInTheDocument();
  expect(getByText("Some fixed content")).toBeInTheDocument();
});

test("Floating content is hidden in phone", async () => {
  mockScreenSize("phone");
  const { getByRole, queryByText, getByText } = renderWithDefaultTheme(
    <BannerRibbon.Ribbon
      title="Title"
      floatRightOfTitle={<div>Some floating content</div>}
      onExpandClick={jest.fn()}
    >
      Some fixed content
    </BannerRibbon.Ribbon>
  );

  expect(getByRole("button")).toBeInTheDocument();
  expect(queryByText("Some floating content")).not.toBeInTheDocument();
  expect(getByText("Some fixed content")).toBeInTheDocument();
});

test("Is marked as expandable if children provided and onExpandClick in phone", async () => {
  mockScreenSize("phone");
  const { getByRole, getByText } = renderWithDefaultTheme(
    <BannerRibbon.Ribbon title="Title" onExpandClick={jest.fn()}>
      Some fixed content
    </BannerRibbon.Ribbon>
  );

  expect(getByRole("button")).toBeInTheDocument();
  expect(getByText("Some fixed content")).toBeInTheDocument();
});

test("Explicit expandable is needed when items are hidden", async () => {
  mockScreenSize("phone");
  const isExpanded = false;
  const { getByRole, queryByText } = renderWithDefaultTheme(
    <BannerRibbon.Ribbon
      title="Title"
      floatRightOfTitle={<div>Some floating content</div>}
      onExpandClick={jest.fn()}
      expandable
      isExpanded={isExpanded}
    >
      {isExpanded && "Some hidable content"}
    </BannerRibbon.Ribbon>
  );

  expect(getByRole("button")).toBeInTheDocument();
  expect(queryByText("Some floating content")).not.toBeInTheDocument();
});

test("basic, in phone", async () => {
  mockScreenSize("phone");
  const { getByRole } = renderWithDefaultTheme(
    <BannerRibbon.Ribbon title="Title">Some fixed content</BannerRibbon.Ribbon>
  );

  // When not expandable, it is a header element
  expect(getByRole("header")).toBeInTheDocument();
});

test("floatRightOfTitle invisible in phone when not expanded", async () => {
  mockScreenSize("phone");
  const { queryByText } = renderWithDefaultTheme(
    <BannerRibbon.Ribbon
      title="Title"
      expandable
      isExpanded={false}
      floatRightOfTitle={<div>section1</div>}
      onExpandClick={jest.fn()}
    >
      Some fixed content
    </BannerRibbon.Ribbon>
  );

  expect(queryByText("section1")).not.toBeInTheDocument();
});

test("floatRightOfTitle visible in phone when expanded", async () => {
  mockScreenSize("phone");
  const { queryByText } = renderWithDefaultTheme(
    <BannerRibbon.Ribbon
      title="Title"
      expandable
      isExpanded={true}
      floatRightOfTitle={<div>section1</div>}
      onExpandClick={jest.fn()}
    >
      Some fixed content
    </BannerRibbon.Ribbon>
  );

  expect(queryByText("section1")).toBeInTheDocument();
});
