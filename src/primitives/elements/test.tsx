import React from "react";
import renderer from "react-test-renderer";
import { Flex } from "./Elements";
import sampleTheme from "../../support/themes/other-products";
import { createMatchers } from "jest-emotion";
import * as emotion from "emotion";
expect.extend(createMatchers(emotion));

test("Additional styles are added from theme", () => {
  // Note: here we provide the theme object directly to the element. It can also be passed via
  // context.
  const tree = renderer
    .create(
      <Flex
        theme={sampleTheme}
        cssWithTheme={({ theme }) => `background-color: ${theme.color.brand01};`}
      />
    )
    .toJSON();
  expect(tree).toHaveStyleRule("background-color", sampleTheme.color.brand01);
});
