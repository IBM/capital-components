import CarbonDataTable from "carbon-components-react/lib/components/DataTable";
import React, { ReactElement } from "react";
import {
  getNextSortDirection,
  sortStates
} from "carbon-components-react/lib/components/DataTable/state/sorting";
import { SortDirection, StringCellContent } from "./utils";

export interface ColumnDescriptor {
  key: string;
  header: string | ReactElement<any>;
  isSortable?: boolean;
  content?: (props: { row: any[]; colKey: string }) => ReactElement<any>;
}

class HeaderComp extends React.PureComponent<{
  colDesc: ColumnDescriptor;
  sortDirection: SortDirection;
  onHeaderClick: (key: string) => void;
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

const defaultGetRowIdentifier = row => row.id;

class DataTable extends React.PureComponent<{
  /** Title of the table */
  title?: string;
  /** How your columns will be rendered. See examples for details. */
  columns: ColumnDescriptor[];
  /** The currently sorted column key. */
  sortKey?: string;
  /** The currently sort direction. */
  sortDirection?: SortDirection;
  /** Rows to display. All provided rows will be shown. */
  rows: any[];
  /** Callback to handle when sort is clicked on some header. */
  onSort?: (arg: { colKey: string; sortDirection: SortDirection }) => void;
  /** CSS classname */
  className?: string;
  /** How individual rows are identified. It must return something unique for that row. */
  getRowIdentifier?: (row: any) => string;
  /** Gives you a chance to add props to each individual row. Eg, click handler. */
  getAdditionalRowProps?: (row: any) => { [key: string]: any };
}> {
  onHeaderClick = (colKey: string) => {
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
      getAdditionalRowProps
    } = this.props;

    return (
      <CarbonDataTable.TableContainer title={title} className={className}>
        <CarbonDataTable.Table>
          <CarbonDataTable.TableHead>
            <CarbonDataTable.TableRow>
              {columns.map(col => (
                <HeaderComp
                  sortDirection={col.key === sortKey ? sortDirection : sortStates.NONE}
                  key={col.key}
                  colDesc={col}
                  onHeaderClick={this.onHeaderClick}
                />
              ))}
            </CarbonDataTable.TableRow>
          </CarbonDataTable.TableHead>
          <CarbonDataTable.TableBody>
            {rows.map(row => {
              const rowId = getRowIdentifier(row);
              const additionalProps = getAdditionalRowProps ? getAdditionalRowProps(row) : {};
              return (
                <CarbonDataTable.TableRow key={rowId} {...additionalProps}>
                  {columns.map(col => {
                    const renderer =
                      col.content === undefined || col.content === null
                        ? StringCellContent
                        : col.content;
                    return (
                      <CarbonDataTable.TableCell key={`${rowId}:${col.key}`}>
                        {renderer({
                          row,
                          colKey: col.key
                        })}
                      </CarbonDataTable.TableCell>
                    );
                  })}
                </CarbonDataTable.TableRow>
              );
            })}
          </CarbonDataTable.TableBody>
        </CarbonDataTable.Table>
      </CarbonDataTable.TableContainer>
    );
  }
}

export default DataTable;
