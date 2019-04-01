import * as emotion from "emotion";
import { getStyles } from "jest-emotion";
import { mq, mqStrings } from "./mediaQueries";

it("media queries with basic strings", () => {
  const result = mqStrings.l("background-color: blue");
  expect(result).toEqual(
    expect.stringMatching(/@media \(min-width:1200px\) {\s+background-color: blue;\s+/)
  );
});
