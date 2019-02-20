import { sortStates } from "carbon-components-react/lib/components/DataTable/state/sorting";
export { sortStates } from "carbon-components-react/lib/components/DataTable/state/sorting";
import React from "react";

export function StringCellContent<T>(props: { row: T; colKey: keyof T; rowIndex: number }) {
  return (props.row[props.colKey] as unknown) as React.ReactElement<any>;
}

export type SortDirection = "NONE" | "DESC" | "ASC"; // from 'carbon-components-react/lib/components/DataTable/state/sorting'

export const buildDateCompare = ({
  accessor,
  sortDirection
}: {
  accessor: (row: any) => any;
  sortDirection: SortDirection;
}) =>
  buildDefaultCompare({
    accessor: row => new Date(accessor(row)),
    sortDirection
  });

export const buildDefaultCompare = ({
  accessor,
  sortDirection
}: {
  accessor: (row: any) => any;
  sortDirection: SortDirection;
}) => (rowA, rowB) => {
  const vA = accessor(rowA);
  const vB = accessor(rowB);
  let ret = 0;
  if (sortDirection !== sortStates.NONE) {
    if (vA < vB) {
      ret = -1;
    }
    if (vA > vB) {
      ret = 1;
    }
    return sortDirection === sortStates.DESC ? ret * -1 : ret;
  }
  return ret;
};
