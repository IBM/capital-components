import ReactDataGrid from "react-data-grid";
import React from "react";
import { storiesOf } from "@storybook/react";
import { styled } from "capital-components/lib/support/theme";

const TableWrapper = styled.div`
  .rdg-selected {
    border-color: ${({ theme }) => theme.color.brand01};
  }
`;

storiesOf("ReactDataGrid", module).add("basic", () => {
  const columns = [
    { key: "id", name: "ID" },
    { key: "title", name: "Title", filterable: true, sortable: true },
    { key: "complete", name: "Complete" },
    { key: "issueType", name: "Task Type" }
  ];
  const rows = [
    { id: 0, title: "Task 1", issueType: "Bug", complete: 20 },
    { id: 1, title: "Task 2", issueType: "Story", complete: 40 },
    { id: 2, title: "Task 3", issueType: "Epic", complete: 60 }
  ];
  return (
    <TableWrapper>
      <ReactDataGrid
        columns={columns}
        rowGetter={i => rows[i]}
        rowsCount={rows.length}
        enableCellSelect
        onGridSort={(...args) => {
          console.log(args);
        }}
      />
    </TableWrapper>
  );
});
