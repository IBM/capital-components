



<!-- GENERATED:PROPS_TABLE:BEGIN -->
## Props
prop | type | default | required | description
---- | :----: | :-------: | :--------: | -----------
**className** | `String` |  | :x: | CSS classname
**columns** | `IColumnDescriptor<T>[]` |  | :white_check_mark: | How your columns will be rendered. See examples for details.
**getAdditionalRowProps** | `(row: T, rowIndex: number) => { [key: string]: any; }` |  | :x: | Gives you a chance to add props to each individual row. Eg, click handler.
**getRowIdentifier** | `(row: T, rowIndex: number) => string` |  | :x: | How individual rows are identified. It must return something unique for that row.
**onSort** | `(arg: { colKey: keyof T; sortDirection: SortDirection; }) => void` |  | :x: | Callback to handle when sort is clicked on some header.
**renderToolbar** | `ReactNode` |  | :x: | How to render the toolbar
**rows** | `T[]` |  | :white_check_mark: | Rows to display. All provided rows will be shown.
**sortDirection** | `SortDirection` |  | :x: | The currently sort direction.
**sortKey** | `keyof T` |  | :x: | The currently sorted column key.
**title** | `ReactNode` |  | :x: | Title of the table
**zebra** | `boolean` |  | :x: | Show alternating colors on rows. Does not effect header.
<!-- GENERATED:PROPS_TABLE:END -->



