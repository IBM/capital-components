import { mq, mqStrings } from "../src/layout/mediaQueries";
import { getStyles } from "jest-emotion";
import * as emotion from "emotion";

it("media queries with basic strings", () => {
  const result = mqStrings.l("background-color: blue");
  expect(result).toEqual(
    expect.stringMatching(/@media \(min-width:1200px\) {\s+background-color: blue;\s+/)
  );
});

it("media queries with classnames", () => {
  mq.l("background-color: blue");
  expect(getStyles(emotion)).toMatchSnapshot();
});
