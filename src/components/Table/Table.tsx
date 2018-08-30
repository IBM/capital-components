import React from "react";
import {
  StructuredListWrapper,
  StructuredListHead,
  StructuredListRow,
  StructuredListCell,
  StructuredListBody
} from "carbon-components-react";

export type ColumnContentRenderer<T> = React.ComponentType<{
  row: T;
  colKey: keyof T;
  rowIndex: number;
}>;

export interface IProps<T = object> {
  columns: {
    key: keyof T;
    header: JSX.Element | string;
    content: ColumnContentRenderer<T>;
  }[];
  rows: T[];
  className?: string;
}

export class Table<T> extends React.PureComponent<IProps<T>> {
  render() {
    const { className, columns, rows } = this.props;
    return (
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
                  {col.content ? (
                    <col.content row={row} colKey={col.key} rowIndex={index} />
                  ) : (
                    row[col.key]
                  )}
                </StructuredListCell>
              ))}
            </StructuredListRow>
          ))}
        </StructuredListBody>
      </StructuredListWrapper>
    );
  }
}
export default Table;
