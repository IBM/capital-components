import { cleanup, fireEvent } from "@testing-library/react";
import "jest-dom/extend-expect";
import React from "react";
import { DataTable, IDataTableColumnDescriptor } from "@fss/components";
import { renderWithDefaultTheme } from "test-utils";
import { buildDateCompare, buildDefaultCompare } from "./utils";

afterEach(cleanup);

const rows = [
  {
    name: "Name1",
    date: new Date(Date.now() + 10000),
    count: 2
  },
  {
    name: "Name2",
    date: new Date(Date.now() - 10000),
    count: 110
  }
];
const columns: IDataTableColumnDescriptor<typeof rows[0]>[] = [
  {
    key: "name",
    header: "Name Header"
  },
  {
    key: "date",
    header: <div>Date (not sortable)</div>,
    isSortable: false,
    content: ({ row, colKey, rowIndex }) => <div>{row[colKey].toString()}</div>
  },
  {
    key: "count",
    header: "Count"
  }
];
test("Basic", () => {
  const { getByText } = renderWithDefaultTheme(
    <DataTable title="title1" rows={rows} columns={columns} getRowIdentifier={row => row.name} />
  );
  expect(getByText("Date (not sortable)")).toBeInTheDocument();
});

test("The default id selector is based on id", () => {
  const { getByText } = renderWithDefaultTheme(
    <DataTable
      title="title1"
      rows={rows.map(row => ({
        ...row,
        id: row.name
      }))}
      columns={columns}
    />
  );
  expect(getByText("Date (not sortable)")).toBeInTheDocument();
});

test("Toolbar", () => {
  const { getByText } = renderWithDefaultTheme(
    <DataTable
      title="title1"
      rows={rows}
      columns={columns}
      getRowIdentifier={row => row.name}
      renderToolbar={<div>Some toolbar button</div>}
    />
  );
  expect(getByText("Some toolbar button")).toBeInTheDocument();
});

test("Sort callback", () => {
  const onSort = jest.fn();
  const { getByText } = renderWithDefaultTheme(
    <DataTable
      title="title1"
      sortKey="name"
      sortDirection="ASC"
      rows={rows}
      columns={columns}
      getRowIdentifier={row => row.name}
      onSort={onSort}
    />
  );
  const sortButton = getByText("Name Header");
  expect(sortButton).toBeInTheDocument();
  fireEvent.click(sortButton);
  fireEvent.click(getByText("Date (not sortable)"));
  expect(onSort).toBeCalledTimes(1);
  expect(onSort.mock.calls[0][0]).toMatchObject({
    colKey: "name",
    sortDirection: "DESC"
  });
});

test("Add custom props to the row", () => {
  const { getByLabelText } = renderWithDefaultTheme(
    <DataTable
      title="title1"
      sortKey="name"
      sortDirection="ASC"
      rows={rows}
      columns={columns}
      getRowIdentifier={row => row.name}
      getAdditionalRowProps={row => ({
        "aria-label": `${row.name} with count ${row.count}`
      })}
    />
  );
  expect(getByLabelText("Name1 with count 2")).toBeInTheDocument();
});

test("Date sorting function", () => {
  const rows = [
    {
      id: 1,
      date: new Date(Date.now() + 1)
    },
    {
      id: 2,
      date: new Date(Date.now() + 500)
    },
    {
      id: 2,
      date: new Date(Date.now() - 500)
    }
  ];
  const sortByDate = buildDateCompare({ accessor: row => row.date, sortDirection: "ASC" });
  expect(sortByDate(rows[0], rows[1])).toBe(-1);
  expect(sortByDate(rows[0], rows[2])).toBe(1);
  expect(sortByDate(rows[0], rows[0])).toBe(0);
});
