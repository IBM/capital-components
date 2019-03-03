import { cleanup, fireEvent, act } from "react-testing-library";
import "jest-dom/extend-expect";
import { Tooltip } from "@fss/components";
import React from "react";
import { renderWithDefaultTheme } from "test-utils";

afterEach(cleanup);

test("Tooltip appears after 200ms of hover", async () => {
  jest.useFakeTimers();
  const { getByText, queryByText, debug } = renderWithDefaultTheme(
    <div>
      <Tooltip content="Tooltip content" placement="bottom">
        {props => <span {...props.getReferenceProps()}>Element</span>}
      </Tooltip>
      <span>Some other</span>
    </div>
  );

  expect(getByText("Element")).toBeInTheDocument();
  expect(queryByText("Tooltip content")).not.toBeInTheDocument();
  act(() => {
    fireEvent.mouseOver(getByText("Element"));
    // mouseover triggers a debounced set state, so rstep forward 200 ms.
    jest.advanceTimersByTime(300);
  });

  expect(getByText("Tooltip content")).toBeInTheDocument();

  act(() => {
    fireEvent.mouseOut(getByText("Tooltip content"));
    fireEvent.mouseOver(getByText("Some other"));
    // mouseover triggers a debounced set state, so rstep forward 200 ms.
    jest.advanceTimersByTime(200);
  });

  expect(queryByText("Tooltip content")).not.toBeInTheDocument();
});

test("Tooltip appears onclick when configured", async () => {
  const { getByText, queryByText } = renderWithDefaultTheme(
    <>
      <Tooltip content="Tooltip content" placement="bottom" clickToOpen>
        {props => <div {...props.getReferenceProps()}>Element</div>}
      </Tooltip>
      <div>Some other</div>
    </>
  );

  expect(getByText("Element")).toBeInTheDocument();
  act(() => {
    fireEvent.click(getByText("Element"));
  });

  expect(getByText("Tooltip content")).toBeInTheDocument();

  act(() => {
    fireEvent.click(getByText("Some other"));
  });

  expect(queryByText("Tooltip content")).not.toBeInTheDocument();
});
