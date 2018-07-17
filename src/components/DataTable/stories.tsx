import React from "react";
import { DataTable } from "@fss/components";
import { storiesOf } from "@storybook/react";
import { withInfo } from "@storybook/addon-info";
import { action } from "@storybook/addon-actions";
import { PaginationV2 } from "carbon-components-react";

const stories = storiesOf("Components|DataTable", module);

const columns = [
  {
    key: "name",
    isSortable: false,
    header: "Name" // Or could be a react element
  },
  {
    key: "rating",
    header: "Rating", // Or could be a react element
    isSortable: true
  },
  {
    key: "date",
    header: <div>Date</div>, // Or could be a react element
    content: ({ row, colKey }) => <div>Prefix: {row[colKey].toString()}</div>
  }
];

const rows = [
  {
    name: "item1",
    rating: 5,
    date: new Date()
  },
  {
    name: "item2",
    rating: 1,
    date: new Date()
  },
  {
    name: "item3",
    rating: 2,
    date: new Date()
  }
];

stories.add(
  "Basic",
  withInfo({
    text: `
    DataTable provides a standardized way of dealing with datatables.
    It takes the column based data approach to reduce duplicated information.
  `
  })(() => (
    <DataTable
      title="Data table 1"
      columns={columns}
      rows={rows}
      getRowIdentifier={row => row.name}
    />
  ))
);

stories.add(
  "Sorting",
  withInfo({
    text: `
      DataTable does not handle sorting data for you because most non-trivial
      uses should be doing the sorting on the backend. The callback is triggered
      when the sort button is clicked and describes the column clicked and the desired direction
    `
  })(() => (
    <DataTable
      columns={columns}
      rows={rows}
      sortKey="date"
      sortDirection="DESC"
      onSort={action("sort")}
      getRowIdentifier={row => row.name}
    />
  ))
);

stories.add(
  "Row Click",
  withInfo({
    text: `
        Sometimes you want to add some additional properties to a speific row. Note that 
        these are just props assigned to row element
      `
  })(() => (
    <DataTable
      columns={columns}
      rows={rows}
      sortKey="date"
      sortDirection="DESC"
      onSort={action("sort")}
      getRowIdentifier={row => row.name}
      getAdditionalRowProps={() => ({ onClick: action("row click") })}
    />
  ))
);

stories.add(
  "Pagination",
  withInfo({
    text: `
        You will often want a paginator. Use PaginationV2 to support any kind of
        external paging system.
      `
  })(() => (
    <React.Fragment>
      <DataTable
        columns={columns}
        rows={rows}
        sortKey="date"
        sortDirection="DESC"
        onSort={action("sort")}
        getRowIdentifier={row => row.name}
        getAdditionalRowProps={() => ({ onClick: action("row click") })}
      />
      <PaginationV2
        page={1}
        totalItems={50}
        pageSize={10}
        pageSizes={[10, 50, 100]}
        onChange={action("pagination change")}
      />
    </React.Fragment>
  ))
);
