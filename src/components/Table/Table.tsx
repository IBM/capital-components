import React from "react";
import {
  StructuredListWrapper,
  StructuredListHead,
  StructuredListRow,
  StructuredListCell,
  StructuredListBody
} from "carbon-components-react";
import { cx, css } from "emotion";

export type ColumnContentRenderer<T> = React.ComponentType<{
  row: T;
  colKey: keyof T;
  rowIndex: number;
}>;

export interface IProps<T> {
  columns: {
    key: keyof T;
    header: JSX.Element | string;
    content: ColumnContentRenderer<T>;
  }[];
  rows: T[];
  className?: string;
  selection?: boolean;
  getAdditionalRowProps?: (row: T, rowIndex: number) => { [key: string]: any };
  small?: boolean;
}

const smallTableRow = css`
  > .bx--structured-list-td {
    padding-top: 0.5rem;
    padding-bottom: 0.5rem;
  }
`;

export default function Table<T>({
  columns,
  rows,
  className,
  selection,
  getAdditionalRowProps = () => ({}),
  small = false
}: IProps<T>) {
  return (
    <StructuredListWrapper className={className} selection={selection}>
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
        {rows.map((row, index) => {
          const { className, ...otherProps } = getAdditionalRowProps(row, index) || ({} as any);

          return (
            <StructuredListRow
              key={index}
              className={cx(className, {
                [smallTableRow]: small
              })}
              {...otherProps}
            >
              {columns.map(col => (
                <StructuredListCell key={col.key}>
                  <col.content row={row} colKey={col.key} rowIndex={index} />
                </StructuredListCell>
              ))}
            </StructuredListRow>
          );
        })}
      </StructuredListBody>
    </StructuredListWrapper>
  );
}
