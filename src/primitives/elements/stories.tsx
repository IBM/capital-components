import React from "react";
import { Flex, Block, InlineBlock, Seperator } from "@fss/components/lib/primitives/elements";
import { storiesOf } from "@storybook/react";
import { withInfo } from "@storybook/addon-info";

const stories = storiesOf("Primitives|Elements", module);

stories.add(
  "Basic Usage",
  withInfo({
    inline: true,
    text: `
    These set of elements provide some basic building blocks you can use to build
    your application. They have some useful props to access standard spacing and
    themes. All elements exported here can also take props provided to any div. (onClick, className, etc)
  `
  })(() => (
    <Flex
      direction="column"
      cssWithTheme={({ theme }) => `background-color: ${theme.color.brand02};`}
    >
      <Block padding="md sm">
        Some Block content with medium vertical and small horizontal padding
      </Block>
      <InlineBlock margin="md" css="background-color: red;">
        Some inline block with medium margin all around
      </InlineBlock>
      <Seperator />
      <Block padding="left md top xl">Some arbitrary padding.</Block>
    </Flex>
  ))
);
