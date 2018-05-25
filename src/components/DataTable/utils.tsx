import React from "react";
import { FormattedDate, FormattedTime, FormattedNumber } from "react-intl";
export { sortStates } from "carbon-components-react/lib/components/DataTable/state/sorting";
import {
  getNextSortDirection,
  sortStates
} from "carbon-components-react/lib/components/DataTable/state/sorting";

export const StringCellContent = (props: { row: any[]; colKey: string }) => props.row[props.colKey];

export type SortDirection = "NONE" | "DESC" | "ASC"; // from 'carbon-components-react/es/components/DataTable/state/sorting'

export const DateTimeCellContent = ({ row, colKey }: { row: any[]; colKey: string }) => {
  const v = row[colKey];
  if (!v) {
    return null;
  }
  const date = new Date(v);
  if (isNaN(date.getTime())) {
    return null;
  }
  return (
    <span>
      <FormattedDate value={date} /> <FormattedTime value={date} />
    </span>
  );
};

export const DateCellContent = ({ row, colKey }: { row: any[]; colKey: string }) => {
  const v = row[colKey];
  if (!v) {
    return null;
  }
  const date = new Date(v);
  if (isNaN(date.getTime())) {
    return null;
  }
  return <FormattedDate value={date} />;
};

export const createNumericCellContent = ({ decimalPlaces }: { decimalPlaces: number }) => ({
  row,
  colKey
}: {
  row: any[];
  colKey: string;
}) => {
  const v = row[colKey];
  return (
    <FormattedNumber
      value={v}
      maximumFractionDigits={decimalPlaces}
      minimumFractionDigits={decimalPlaces}
    />
  );
};

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
