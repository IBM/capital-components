import React from "react";
import {
  StructuredListWrapper,
  StructuredListHead,
  StructuredListRow,
  StructuredListCell,
  StructuredListBody
} from "carbon-components-react";

export interface IProps {
  columns: {
    key: string;
    header: JSX.Element | string;
    content: React.ComponentType<{ row: object | string; colKey: string }>;
  }[];
  rows: (object | string)[];
  className?: string;
}

export const Table: React.SFC<IProps> = ({ columns, rows, className }) => (
  <StructuredListWrapper className={className}>
    <StructuredListHead>
      <StructuredListRow head>
        {columns.map(col => (
          <StructuredListCell key={col.key} head>
            {col.header}
          </StructuredListCell>
        ))}
      </StructuredListRow>
    </StructuredListHead>
    <StructuredListBody>
      {rows.map((row, index) => (
        <StructuredListRow key={index}>
          {columns.map(col => (
            <StructuredListCell key={col.key}>
              {col.content ? <col.content row={row} colKey={col.key} /> : row[col.key]}
            </StructuredListCell>
          ))}
        </StructuredListRow>
      ))}
    </StructuredListBody>
  </StructuredListWrapper>
);

export default Table;
