import { cleanup, fireEvent } from "@testing-library/react";
import "jest-dom/extend-expect";
import { PushOver } from "@fss/components";
import React from "react";
import { renderWithDefaultTheme } from "test-utils";

afterEach(cleanup);

test("Basic", async () => {
  const { getByRole, queryByLabelText } = renderWithDefaultTheme(
    <PushOver isOpen role="region" aria-label="some side bar">
      Content
    </PushOver>
  );

  expect(getByRole("region")).toBeInTheDocument();
  // no close button
  expect(queryByLabelText("close")).not.toBeInTheDocument();
});

test("Closable", async () => {
  const onCloseClick = jest.fn();
  const { getByLabelText } = renderWithDefaultTheme(
    <PushOver isOpen role="region" aria-label="some side bar" closable onCloseClick={onCloseClick}>
      Content
    </PushOver>
  );

  expect(getByLabelText("close")).toBeInTheDocument();
  fireEvent.click(getByLabelText("close"));
  expect(onCloseClick).toBeCalled();
});
