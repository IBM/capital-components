import { DataTable } from "capital-components";
import { action } from "@storybook/addon-actions";
import { storiesOf } from "@storybook/react";
import { Pagination, DataTable as CarbonDataTable } from "carbon-components-react";
import React, { useState } from "react";
import Readme from "./README.md";
import { withReadme } from "storybook-readme";

const stories = storiesOf("Components|DataTable", module).addDecorator(withReadme([Readme]));

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
  () => (
    <DataTable
      title="Data table 1"
      columns={columns}
      rows={rows}
      getRowIdentifier={row => row.name}
    />
  ),
  {
    info: {
      text: `
    DataTable provides a standardized way of dealing with datatables.
    It takes the column based data approach to reduce duplicated information.
  `
    }
  }
);

stories.add(
  "Sorting",
  () => (
    <DataTable
      columns={columns}
      rows={rows}
      sortKey="date"
      sortDirection="DESC"
      onSort={action("sort")}
      getRowIdentifier={row => row.name}
    />
  ),
  {
    text: `
      DataTable does not handle sorting data for you because most non-trivial
      uses should be doing the sorting on the backend. The callback is triggered
      when the sort button is clicked and describes the column clicked and the desired direction
    `
  }
);

stories.add(
  "Row Click",
  () => (
    <DataTable
      columns={columns}
      rows={rows}
      sortKey="date"
      sortDirection="DESC"
      onSort={action("sort")}
      getRowIdentifier={row => row.name}
      getAdditionalRowProps={() => ({ onClick: action("row click") })}
    />
  ),
  {
    text: `
        Sometimes you want to add some additional properties to a speific row. Note that
        these are just props assigned to row element
      `
  }
);

stories.add(
  "Pagination",
  () => (
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
      <Pagination
        page={1}
        totalItems={50}
        pageSize={10}
        pageSizes={[10, 50, 100]}
        onChange={action("pagination change")}
      />
    </React.Fragment>
  ),
  {
    text: `
        You will often want a paginator. Use Pagination to support any kind of
        external paging system.
      `
  }
);

stories.add(
  "Zebra",
  () => (
    <DataTable
      columns={columns}
      rows={rows}
      sortKey="date"
      sortDirection="DESC"
      onSort={action("sort")}
      getRowIdentifier={row => row.name}
      getAdditionalRowProps={() => ({ onClick: action("row click") })}
      zebra={true}
    />
  ),
  {
    text: `
        Sometimes you just want to show your stripes
      `
  }
);

stories.add(
  "Bulk actions and selection",
  () => {
    const [selected, setSelected] = useState<string[]>([]);
    const handleSelect = (row: typeof rows[0]) => {
      setSelected(prevState => {
        if (prevState.includes(row.name)) {
          return prevState.filter(name => name !== row.name);
        } else {
          return [...prevState, row.name];
        }
      });
    };
    const handleSelectAll = () => {
      setSelected(prevState => {
        if (prevState.length === rows.length) {
          return [];
        } else {
          return rows.map(row => row.name);
        }
      });
    };
    return (
      <DataTable
        columns={columns}
        rows={rows}
        sortKey="date"
        sortDirection="DESC"
        onSort={action("sort")}
        getRowIdentifier={row => row.name}
        zebra={true}
        getSelectAllProps={() => ({
          ariaLabel: "Select all rows",
          checked: selected.length === rows.length,
          id: "select-all",
          name: "select-all",
          onSelect: handleSelectAll,
          indeterminate: selected.length !== rows.length && selected.length > 0
        })}
        getSelectRowProps={row => ({
          onSelect: () => handleSelect(row),
          id: row.name,
          checked: selected.includes(row.name),
          ariaLabel: `Select the row for ${row.name}`,
          name: `select-row-${row.name}`
        })}
        renderToolbar={
          <>
            <CarbonDataTable.TableToolbarSearch onChange={() => action("Search")} />
            <CarbonDataTable.TableBatchActions
              shouldShowBatchActions={selected.length > 0}
              totalSelected={selected.length}
              onCancel={() => setSelected([])}
            >
              <CarbonDataTable.TableBatchAction onClick={() => action("Bulk1")}>
                Ghost
              </CarbonDataTable.TableBatchAction>
              <CarbonDataTable.TableBatchAction onClick={() => action("Bulk2")}>
                Ghost
              </CarbonDataTable.TableBatchAction>
            </CarbonDataTable.TableBatchActions>
          </>
        }
      />
    );
  },
  {
    text: `
        Sometimes you just want to show your stripes
      `
  }
);
