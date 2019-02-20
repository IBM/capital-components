import {
  StructuredListBody,
  StructuredListCell,
  StructuredListHead,
  StructuredListRow,
  StructuredListWrapper
} from "carbon-components-react";
import { css, cx } from "emotion";
import React from "react";

export type ColumnContentRenderer<T> = React.ComponentType<{
  row: T;
  colKey: keyof T;
  rowIndex: number;
}>;

export interface IProps<T> {
  columns: Array<{
    key: keyof T;
    header: JSX.Element | string;
    content?: ColumnContentRenderer<T>;
  }>;
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
        <StructuredListRow head={true}>
          {columns.map(col => (
            <StructuredListCell key={col.key} head={true}>
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
                  {col.content ? (
                    <col.content row={row} colKey={col.key} rowIndex={index} />
                  ) : (
                    row[col.key]
                  )}
                </StructuredListCell>
              ))}
            </StructuredListRow>
          );
        })}
      </StructuredListBody>
    </StructuredListWrapper>
  );
}
