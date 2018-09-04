import CarbonDataTable from "carbon-components-react/lib/components/DataTable";
import React, { ReactElement } from "react";
import {
  getNextSortDirection,
  sortStates
} from "carbon-components-react/lib/components/DataTable/state/sorting";
import { SortDirection, StringCellContent } from "./utils";
import cx from "classnames";

export type ColumnContentRenderer<T> = React.ComponentType<{
  row: T;
  colKey: keyof T;
  rowIndex: number;
}>;

export interface ColumnDescriptor<T> {
  key: keyof T;
  header: string | ReactElement<any> | null;
  isSortable?: boolean;
  content?: ColumnContentRenderer<T>;
}

class HeaderComp<T> extends React.PureComponent<{
  colDesc: ColumnDescriptor<T>;
  sortDirection: SortDirection;
  onHeaderClick: (key: keyof T) => void;
}> {
  onClick = () => {
    if (this.props.colDesc.isSortable !== false) {
      this.props.onHeaderClick(this.props.colDesc.key);
    }
  };

  render() {
    const {
      colDesc: { header, isSortable },
      sortDirection
    } = this.props;

    return (
      <CarbonDataTable.TableHeader
        isSortable={isSortable !== false}
        isSortHeader={isSortable !== false}
        onClick={this.onClick}
        sortDirection={sortDirection}
      >
        {header}
      </CarbonDataTable.TableHeader>
    );
  }
}

function defaultGetRowIdentifier(row: any, _rowIndex: number) {
  return row.id;
}

interface ITableProps
  extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLTableElement>, HTMLTableElement> {
  zebra?: boolean;
}

// Not using carbon table because zebra is not optional there.
const Table = ({ zebra, className, ...rest }: ITableProps) => (
  <table
    {...rest}
    className={cx(className, "bx--data-table-v2", { "bx--data-table-v2--zebra": zebra })}
  />
);

class DataTable<T> extends React.PureComponent<{
  /** Title of the table */
  title?: React.ReactNode;
  /** How your columns will be rendered. See examples for details. */
  columns: ColumnDescriptor<T>[];
  /** The currently sorted column key. */
  sortKey?: keyof T;
  /** The currently sort direction. */
  sortDirection?: SortDirection;
  /** Rows to display. All provided rows will be shown. */
  rows: T[];
  /** Callback to handle when sort is clicked on some header. */
  onSort?: (arg: { colKey: keyof T; sortDirection: SortDirection }) => void;
  /** CSS classname */
  className?: string;
  /** How individual rows are identified. It must return something unique for that row. */
  getRowIdentifier?: (row: T, rowIndex: number) => string;
  /** Gives you a chance to add props to each individual row. Eg, click handler. */
  getAdditionalRowProps?: (row: T, rowIndex: number) => { [key: string]: any };
  /** Show alternating colors on rows. Does not effect header. */
  zebra?: boolean;
}> {
  onHeaderClick = (colKey: keyof T) => {
    this.props.onSort &&
      this.props.onSort({
        colKey,
        sortDirection: getNextSortDirection(this.props.sortKey, colKey, this.props.sortDirection)
      });
  };

  render() {
    const {
      title,
      columns,
      rows,
      sortKey,
      sortDirection,
      className,
      getRowIdentifier = defaultGetRowIdentifier,
      getAdditionalRowProps,
      zebra
    } = this.props;

    return (
      <CarbonDataTable.TableContainer title={title} className={className}>
        <Table zebra={zebra}>
          <CarbonDataTable.TableHead>
            <CarbonDataTable.TableRow>
              {columns.map(col => (
                <HeaderComp
                  sortDirection={col.key === sortKey ? sortDirection : sortStates.NONE}
                  key={col.key.toString()}
                  colDesc={col}
                  onHeaderClick={this.onHeaderClick}
                />
              ))}
            </CarbonDataTable.TableRow>
          </CarbonDataTable.TableHead>
          <CarbonDataTable.TableBody>
            {rows.map((row, rowIndex) => {
              const rowId = getRowIdentifier(row, rowIndex);
              const additionalProps = getAdditionalRowProps
                ? getAdditionalRowProps(row, rowIndex)
                : {};
              return (
                <CarbonDataTable.TableRow key={rowId} {...additionalProps}>
                  {columns.map(col => {
                    const Renderer =
                      col.content === undefined || col.content === null
                        ? StringCellContent
                        : col.content;
                    return (
                      <CarbonDataTable.TableCell key={`${rowId}:${col.key}`}>
                        <Renderer row={row} colKey={col.key} rowIndex={rowIndex} />
                      </CarbonDataTable.TableCell>
                    );
                  })}
                </CarbonDataTable.TableRow>
              );
            })}
          </CarbonDataTable.TableBody>
        </Table>
      </CarbonDataTable.TableContainer>
    );
  }
}

export default DataTable;
