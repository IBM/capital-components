import React from "react";
import { storiesOf } from "@storybook/react";
import { Flex, Block } from "@fss/components/lib/primitives/elements";
import { Table } from "@fss/components";

import { breakpoints, mqStrings, mq } from "@fss/components/lib/layout/mediaQueries";

import { withInfo } from "@storybook/addon-info";
import { css, cx } from "emotion";

const breakpointItems = Object.keys(breakpoints).map(key => ({
  key,
  value: breakpoints[key]
}));

storiesOf("Layout|Media Queries", module)
  .add("Breakpoints", () => (
    <Table
      rows={breakpointItems}
      columns={[
        {
          header: "Name",
          key: "key",
          content: ({ colKey, row }) => row[colKey]
        },
        {
          header: "Min-Value",
          key: "value",
          content: ({ colKey, row }) => `${row[colKey]}px` as any
        }
      ]}
    />
  ))
  .add(
    "Base Elements",
    withInfo({
      inline: true,
      text: `
        There are a number of ways to control via media queries. Our base primitive elements have built
        in support for them with padding and margin. Base indicates the default state (min-width: 0).
        You can also use the theme object in combination with the media queries. The default media-query
        works with min-width but there are Max varients that work with max-width.
      `
    })(() => (
      <>
        <Flex
          direction="column"
          padding={{ base: "3xl", s: "sm" }}
          className={css`
            background-color: yellow;
          `}
        >
          <p>Flex Element</p>
          <p>Padding -- Base: 3xl, Small: sm</p>
        </Flex>
        <Block className={cx(mq.base("background-color: red;"), mq.s("background-color: purple;"))}>
          <p>Block Element</p>
          <p>Background Color -- Base: red, Small: purple</p>
        </Block>
        <Block
          cssWithTheme={({ theme }) =>
            `
              ${mqStrings.base(`background-color: ${theme.color.brand01};`)};
              ${mqStrings.s(`background-color: ${theme.color.brand02};`)};
            `
          }
        >
          <p>Block Element</p>
          <p>Background Color -- Base: brand01, Small: brand02</p>
        </Block>
      </>
    ))
  );
