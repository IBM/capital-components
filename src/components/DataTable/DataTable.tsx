import CarbonDataTable from "carbon-components-react/lib/components/DataTable";
import {
  getNextSortDirection,
  sortStates
} from "carbon-components-react/lib/components/DataTable/state/sorting";
import cx from "classnames";
import React, { ReactElement } from "react";
import { SortDirection, StringCellContent } from "./utils";

export type ColumnContentRenderer<T> = React.ComponentType<{
  row: T;
  colKey: keyof T;
  rowIndex: number;
}>;

export interface IColumnDescriptor<T> {
  key: keyof T;
  header: string | ReactElement<any> | null;
  isSortable?: boolean;
  content?: ColumnContentRenderer<T>;
}

class HeaderComp<T> extends React.PureComponent<{
  colDesc: IColumnDescriptor<T>;
  sortDirection: SortDirection;
  onHeaderClick: (key: keyof T) => void;
}> {
  public onClick = () => {
    this.props.onHeaderClick(this.props.colDesc.key);
  };

  public render() {
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
        // To fix a bonkers IE11 bug. IE11 is why we can't have nice things.
        css={`
          .bx--table-sort-v2__icon {
            width: 14px;
          }
        `}
      >
        {header}
      </CarbonDataTable.TableHeader>
    );
  }
}
function defaultGetRowIdentifier(row: any, rowIndex: number) {
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
  columns: Array<IColumnDescriptor<T>>;
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
  getAdditionalRowProps?: (row: T, rowIndex: number) => JSX.IntrinsicElements["tr"];
  /** Show alternating colors on rows. Does not effect header. */
  zebra?: boolean;
  /** How to render the toolbar */
  renderToolbar?: React.ReactNode;
  /**Optional props for select functionality */
  getSelectAllProps?: () => { 
    ariaLabel: string,
    checked: boolean,
    id: string,
    indeterminate?: boolean,
    name: string,
    onSelect: (row) => void,
    disabled?: boolean,
    className?: string
  };
   /**Optional props for select functionality */
  getSelectRowProps?: (row) => { 
    ariaLabel: string,
    checked: boolean,
    id: string,
    name: string,
    onSelect: (row) => void,
    disabled?: boolean,
    radio?: boolean,
    className?: string
  };
}> {
  public onHeaderClick = (colKey: keyof T) => {
    return (
      this.props.onSort &&
      this.props.onSort({
        colKey,
        sortDirection: getNextSortDirection(this.props.sortKey, colKey, this.props.sortDirection)
      })
    );
  };

  public render() {
    const {
      title,
      columns,
      rows,
      sortKey,
      sortDirection,
      className,
      getRowIdentifier = defaultGetRowIdentifier,
      getAdditionalRowProps,
      zebra,
      renderToolbar,
      getSelectAllProps,
      getSelectRowProps
    } = this.props;

    return (
      <CarbonDataTable.TableContainer title={title} className={className}>
        {renderToolbar && (
          <CarbonDataTable.TableToolbar>{renderToolbar}</CarbonDataTable.TableToolbar>
        )}
        <Table zebra={zebra}>
          <CarbonDataTable.TableHead>
            <CarbonDataTable.TableRow>
            {getSelectAllProps && <CarbonDataTable.TableSelectAll {...getSelectAllProps()} />}
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
                  {getSelectRowProps && <CarbonDataTable.TableSelectRow {...getSelectRowProps(row)} />}
                  {columns.map(col => {
                    const Renderer: React.ComponentType<{
                      row: T;
                      colKey: keyof T;
                      rowIndex: number;
                    }> = col.content ? col.content : StringCellContent;

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
