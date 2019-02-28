import {
  cleanup,
  fireEvent,
  waitForElement,
  getByRole as getByRoleGlobal
} from "react-testing-library";
import "jest-dom/extend-expect";
import { FileUploader } from "@fss/components";
import React from "react";
import { renderWithDefaultTheme } from "test-utils";

afterEach(cleanup);

test("Basic snapshot", async () => {
  const { baseElement } = renderWithDefaultTheme(<FileUploader onChange={jest.fn()} />);

  // When not expandable, it is a header element
  expect(baseElement).toMatchSnapshot();
});

test("File added shows in list and can be removed", async () => {
  const onChange = jest.fn();
  const { getByTestId, getByTitle, queryByTitle } = renderWithDefaultTheme(
    <FileUploader onChange={onChange} />
  );

  const file = new File(["content and stuff"], "some.csv");
  const formElement = getByTestId("wfss-file-uploader-input");
  Object.defineProperty(formElement, "files", { value: [file] });
  fireEvent.drop(formElement);

  const deleteFileButton = await waitForElement(() => getByTitle("Remove file some.csv"));
  fireEvent.click(deleteFileButton);
  expect(queryByTitle("some.csv")).not.toBeInTheDocument();
  expect(onChange).toBeCalledTimes(2);
  // first call contained new file in argument list
  expect(onChange.mock.calls[0][0][0].name).toBe("some.csv");
  // second call cleared filelist
  expect(onChange.mock.calls[1][0]).toHaveLength(0);
});

test("Files passed in as initial can be clickable", async () => {
  const onFileClick = jest.fn();
  const initialFiles = [
    new File(["Some content"], "file1.txt"),
    new File(["Some content"], "file2.txt")
  ];
  const { getByTitle } = renderWithDefaultTheme(
    <FileUploader
      initialFilesSelected={initialFiles}
      onFileClick={onFileClick}
      onChange={jest.fn()}
    />
  );

  const element = getByTitle("file1.txt");
  expect(element).toBeInTheDocument();
  const filenameElement = getByRoleGlobal(element, "button");
  fireEvent.click(filenameElement);
  expect(onFileClick).toBeCalledTimes(1);
  expect(onFileClick.mock.calls[0][0].name).toBe("file1.txt");
});

test("File with duplicate name cannot be added", async () => {
  const onChange = jest.fn();
  const initialFiles = [
    new File(["Some content"], "file1.txt"),
    new File(["Some content"], "file2.txt")
  ];
  const { getByTestId } = renderWithDefaultTheme(
    <FileUploader initialFilesSelected={initialFiles} onChange={onChange} />
  );

  const file = new File(["content and stuff"], "file1.txt");
  const formElement = getByTestId("wfss-file-uploader-input");
  Object.defineProperty(formElement, "files", { value: [file] });
  fireEvent.drop(formElement);

  expect(onChange).toBeCalledTimes(0);
});

test("Cannot click elements that", async () => {
  const onChange = jest.fn();
  const initialFiles = [
    new File(["Some content"], "file1.txt"),
    new File(["Some content"], "file2.txt")
  ];
  const { getByTestId } = renderWithDefaultTheme(
    <FileUploader initialFilesSelected={initialFiles} onChange={onChange} />
  );

  const file = new File(["content and stuff"], "file1.txt");
  const formElement = getByTestId("wfss-file-uploader-input");
  Object.defineProperty(formElement, "files", { value: [file] });
  fireEvent.drop(formElement);

  expect(onChange).toBeCalledTimes(0);
});

test("You can click on existing elements", async () => {
  const onChange = jest.fn();
  const initialFiles = [
    new File(["Some content"], "file1.txt"),
    new File(["Some content"], "file2.txt")
  ];
  const { getByTitle } = renderWithDefaultTheme(
    <FileUploader initialFilesSelected={initialFiles} onChange={onChange} />
  );

  const element = getByTitle("file1.txt");
  expect(element).toBeInTheDocument();
  const filenameElement = getByRoleGlobal(element, "button");
  fireEvent.click(filenameElement);
});
