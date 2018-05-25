import DataTable from "carbon-components-react/lib/components/DataTable";
import React, { ReactElement, PureComponent } from "react";
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

class HeaderComp extends PureComponent<{
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
      <DataTable.TableHeader
        isSortable={isSortable !== false}
        isSortHeader={isSortable !== false}
        onClick={this.onClick}
        sortDirection={sortDirection}
      >
        {header}
      </DataTable.TableHeader>
    );
  }
}

const defaultGetRowIdentifier = row => row.id;

export default class TableComponent extends PureComponent<{
  title: string;
  columns: ColumnDescriptor[];
  sortKey?: string;
  sortDirection?: SortDirection;
  rows: any[];
  onSort?: (arg: { colKey: string; sortDirection: SortDirection }) => void;
  className?: string;
  getRowIdentifier?: (row: any[]) => string;
  getAdditionalRowProps?: (row: any[]) => { [key: string]: any };
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
      <DataTable.TableContainer title={title} className={className}>
        <DataTable.Table>
          <DataTable.TableHead>
            <DataTable.TableRow>
              {columns.map(col => (
                <HeaderComp
                  sortDirection={col.key === sortKey ? sortDirection : sortStates.NONE}
                  key={col.key}
                  colDesc={col}
                  onHeaderClick={this.onHeaderClick}
                />
              ))}
            </DataTable.TableRow>
          </DataTable.TableHead>
          <DataTable.TableBody>
            {rows.map(row => {
              const rowId = getRowIdentifier(row);
              const additionalProps = getAdditionalRowProps ? getAdditionalRowProps(row) : {};
              return (
                <DataTable.TableRow key={rowId} {...additionalProps}>
                  {columns.map(col => {
                    const renderer =
                      col.content === undefined || col.content === null
                        ? StringCellContent
                        : col.content;
                    return (
                      <DataTable.TableCell key={`${rowId}:${col.key}`}>
                        {renderer({
                          row,
                          colKey: col.key
                        })}
                      </DataTable.TableCell>
                    );
                  })}
                </DataTable.TableRow>
              );
            })}
          </DataTable.TableBody>
        </DataTable.Table>
      </DataTable.TableContainer>
    );
  }
}
