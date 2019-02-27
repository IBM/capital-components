import { cleanup } from "react-testing-library";
import "jest-dom/extend-expect";
import { BannerRibbon } from "@fss/components";
import React from "react";
import { renderWithDefaultTheme, createMediaMockForScreenSize } from "test-utils";

afterEach(cleanup);

test("Basic title", async () => {
  createMediaMockForScreenSize("monitor");
  const { queryByRole, getByRole } = renderWithDefaultTheme(<BannerRibbon.Ribbon title="Title" />);

  // When not expandable, it is a header element
  expect(queryByRole("button")).toBeNull();
  expect(getByRole("header")).toBeInTheDocument();
});

test("Expanding is prevented without a onExpandClick prop", async () => {
  createMediaMockForScreenSize("monitor");
  const { getByRole } = renderWithDefaultTheme(
    <BannerRibbon.Ribbon title="Title">Some fixed content</BannerRibbon.Ribbon>
  );

  // When not expandable, it is a header element
  expect(getByRole("header")).toBeInTheDocument();
});

test("Floating content is shown in monitor", async () => {
  createMediaMockForScreenSize("monitor");
  const { getByRole, getByText } = renderWithDefaultTheme(
    <BannerRibbon.Ribbon
      title="Title"
      floatRightOfTitle={<div>Some floating content</div>}
      onExpandClick={jest.fn()}
    >
      Some fixed content
    </BannerRibbon.Ribbon>
  );

  expect(getByRole("button")).toBeInTheDocument();
  expect(getByText("Some floating content")).toBeInTheDocument();
});

test("Floating content is hidden in phone", async () => {
  createMediaMockForScreenSize("phone");
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
  expect(queryByText("Some floating content")).toBeNull();
  expect(getByText("Some fixed content")).toBeInTheDocument();
});

test("Explicit expandable is needed when items are hidden", async () => {
  createMediaMockForScreenSize("phone");
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
  expect(queryByText("Some floating content")).toBeNull();
});

test("in phone", async () => {
  createMediaMockForScreenSize("phone");
  const { getByRole } = renderWithDefaultTheme(
    <BannerRibbon.Ribbon title="Title">Some fixed content</BannerRibbon.Ribbon>
  );

  // When not expandable, it is a header element
  expect(getByRole("header")).toBeInTheDocument();
});
