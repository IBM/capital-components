import { cleanup, fireEvent, getByRole as getByRoleGlobal } from "react-testing-library";
import "jest-dom/extend-expect";
import { FileUploader } from "@fss/components";
import React from "react";
import { renderWithDefaultTheme } from "test-utils";

afterEach(cleanup);

test("Basic snapshot", async () => {
  const { baseElement } = renderWithDefaultTheme(<FileUploader onFilesAdded={jest.fn()} />);

  // When not expandable, it is a header element
  expect(baseElement).toMatchSnapshot();
});

test("File added shows in list and can be removed", async () => {
  const onFilesRemoved = jest.fn();
  const initialFiles = [
    new File(["Some content"], "file1.txt"),
    new File(["Some content"], "file2.txt")
  ];
  const { getByLabelText } = renderWithDefaultTheme(
    <FileUploader
      onFilesAdded={jest.fn()}
      files={initialFiles}
      canRemoveFile={() => true}
      onFilesRemoved={onFilesRemoved}
    />
  );

  const deleteFileButton = getByLabelText("Remove file file1.txt");
  expect(deleteFileButton).toBeInTheDocument();
  fireEvent.click(deleteFileButton);

  expect(onFilesRemoved).toBeCalledTimes(1);
  expect(onFilesRemoved.mock.calls[0][0]).toHaveLength(1);
  expect(onFilesRemoved.mock.calls[0][0][0].name).toBe("file1.txt");
});

test("Support clickable elements", async () => {
  const onFileClick = jest.fn();
  const initialFiles = [
    new File(["Some content"], "file1.txt"),
    new File(["Some content"], "file2.txt")
  ];
  const { getByTitle } = renderWithDefaultTheme(
    <FileUploader
      files={initialFiles}
      onFileClick={onFileClick}
      canClickFile={() => true}
      onFilesAdded={jest.fn()}
    />
  );

  const element = getByTitle("file1.txt");
  expect(element).toBeInTheDocument();
  const filenameElement = getByRoleGlobal(element, "button");
  fireEvent.click(filenameElement);
  expect(onFileClick).toBeCalledTimes(1);
  expect(onFileClick.mock.calls[0][0].name).toBe("file1.txt");
});

test("Cannot click elements that are not enabled", async () => {
  const onChange = jest.fn();
  const onFileClick = jest.fn();
  const initialFiles = [
    new File(["Some content"], "file1.txt"),
    new File(["Some content"], "file2.txt")
  ];
  const { getByText } = renderWithDefaultTheme(
    <FileUploader
      files={initialFiles}
      onFilesAdded={onChange}
      onFileClick={onFileClick}
      canClickFile={file => file.name === "file1.txt"}
    />
  );

  const file1 = getByText("file1.txt");
  const file2 = getByText("file2.txt");

  fireEvent.click(file1);
  fireEvent.click(file2);

  expect(onFileClick).toBeCalledTimes(1);
  expect(onFileClick.mock.calls[0][0]).toMatchObject({ name: "file1.txt" });
});

test("You can disable some files from being deleted", async () => {
  const onRemove = jest.fn();
  const initialFiles = [
    new File(["Some content"], "file1.txt"),
    new File(["Some content"], "file2.txt")
  ];
  const { getByLabelText, queryByLabelText } = renderWithDefaultTheme(
    <FileUploader
      files={initialFiles}
      onFilesAdded={jest.fn()}
      onFilesRemoved={onRemove}
      canRemoveFile={file => file.name === "file1.txt"}
    />
  );

  const file1Delete = getByLabelText("Remove file file1.txt");
  expect(file1Delete).toBeInTheDocument();
  fireEvent.click(file1Delete);
  expect(onRemove).toBeCalledTimes(1);
  expect(onRemove.mock.calls[0][0]).toMatchObject([{ name: "file1.txt" }]);
  expect(onRemove.mock.calls[0][0]).toHaveLength(1);

  expect(queryByLabelText("Remove file file2.txt")).not.toBeInTheDocument();
});
