import { cleanup } from "react-testing-library";
import "jest-dom/extend-expect";
import React from "react";
import { DataTable, IDataTableColumnDescriptor } from "@fss/components";
import { renderWithDefaultTheme } from "test-utils";

afterEach(cleanup);

test("Basic", async () => {
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
      header: "Name"
    },
    {
      key: "date",
      header: <div>Date</div>,
      content: ({ row, colKey, rowIndex }) => <div>{row[colKey].toString()}</div>
    },
    {
      key: "count",
      header: "Count"
    }
  ];
  const { getByText } = renderWithDefaultTheme(
    <DataTable title="title1" rows={rows} columns={columns} getRowIdentifier={row => row.name} />
  );
  expect(getByText("Date")).toBeInTheDocument();
});
