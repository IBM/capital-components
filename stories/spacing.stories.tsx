import React from "react";
import { storiesOf } from "@storybook/react";
import {
  Table,
  TableHead,
  TableRow,
  TableHeader,
  TableData,
  TableBody
} from "carbon-components-react";
import { InlineBlock } from "primitives/elements";
import { withInfo } from "@storybook/addon-info";
import * as R from "ramda";
import { css } from "emotion";
import { spacing } from "layout/spacing";
import { setOptions } from "@storybook/addon-options";

const spacingList = R.toPairs(spacing);
const remToPixel = remStr => parseInt(remStr.replace(/rm$/, ""), 10) * 16 + "px";

const example = css`
  border: 1px solid #6eb1b1;
  background-color: #a6fafc;
`;

storiesOf("Layout|Spacing", module)
  .addDecorator((storyFn, context) =>
    withInfo({
      propTablesExclude: [Table, TableBody, TableData, TableHead, TableHeader, TableRow],
      text: `
        These spacing values can be applied as padding around elements (or anywhere else really).
        The primitive elements provided by this library accept a padding argument that applies
        padding of the appropriate size.
      `
    })(storyFn)(context)
  )
  .add("Scale", () => (
    <Table>
      <TableHead>
        <TableRow header>
          <TableHeader>Name/Example</TableHeader>
          <TableHeader>rem</TableHeader>
          <TableHeader>px</TableHeader>
        </TableRow>
      </TableHead>
      <TableBody>
        {spacingList.map(([name, remStr]) => (
          <TableRow>
            <TableData>
              <InlineBlock padding={name} className={example}>
                {name}
              </InlineBlock>
            </TableData>
            <TableData>{remStr}</TableData>
            <TableData>{remToPixel(remStr)}</TableData>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  ));
