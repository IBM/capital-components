import React from "react";
import { storiesOf } from "@storybook/react";
import {
  Table,
  TableHead,
  TableRow,
  TableHeader,
  TableBody,
  TableCell
} from "carbon-components-react";
import { InlineBlock } from "capital-components/lib/primitives/elements";
import * as R from "ramda";
import { css } from "emotion";
import { spacing } from "capital-components/lib/layout/spacing";

const spacingList = R.toPairs(spacing);
const remToPixel = remStr => parseFloat(remStr.replace(/rem$/, "")) * 16 + "px";

const example = css`
  border: 1px solid #6eb1b1;
  background-color: #a6fafc;
`;

storiesOf("Layout|Spacing", module).add(
  "Scale",
  () => (
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
            <TableCell>
              <InlineBlock padding={name} className={example}>
                {name}
              </InlineBlock>
            </TableCell>
            <TableCell>{remStr}</TableCell>
            <TableCell>{remToPixel(remStr)}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  ),
  {
    info: {
      propTablesExclude: [Table, TableBody, TableHead, TableHeader, TableRow, TableCell],
      text: `
          These spacing values can be applied as padding around elements (or anywhere else really).
          The primitive elements provided by this library accept a padding argument that applies
          padding of the appropriate size.
        `
    }
  }
);
