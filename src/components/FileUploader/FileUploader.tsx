import Remove from "../../fss-icons/remove_24";
import { detect } from "detect-browser";
import React from "react";
import Dropzone, { DropzoneProps, DropzoneRootProps } from "react-dropzone";
import { Omit } from "type-zoo/types";
import { CenteredBlock, Flex, ISharedElementProps } from "../../primitives/elements";
import { styled, Theme, withTheme } from "../../support/theme";
import Icon from "../Icon";

// tslint:disable-next-line:ordered-imports
import { cx, css } from "emotion";

const browser = detect();
/* istanbul ignore next */
const isIE = browser && browser.name === "ie";

enum TranslationKeys {
  dropTitle = "wfss-components.fileuploader.droptitle",
  delete = "wfss-components.fileuploader.delete",
  browseTitle = "wfss-components.fileuploader.browse"
}

const defaultTranslations: Record<TranslationKeys, (values: any) => string> = {
  [TranslationKeys.dropTitle]: () => "Drop files to attach, or browse",
  [TranslationKeys.delete]: values => `Remove file ${values.name}`,
  [TranslationKeys.browseTitle]: () => "Browse to attach files"
};

const defaultTranslate = (arg: { id: TranslationKeys; values?: any }) =>
  defaultTranslations[arg.id](arg.values);

/* istanbul ignore next */
const FileUploaderWrapper = styled(CenteredBlock)<
  ISharedElementProps & { isDragActive: boolean; isDisabled: boolean; hasFiles: boolean }
>`
  margin-bottom: ${({ theme, hasFiles }) => (hasFiles ? theme.spacing.spacing.lg : 0)};
  flex-direction: column;
  border-width: 2px;
  border-color: ${({ theme, isDragActive }) =>
    isDragActive ? theme.colors.brand02 : theme.colors.ui03};
  background-color: ${({ theme, isDisabled }) =>
    isDisabled ? theme.colors.ui03 : theme.colors.ui01};
  border-style: dashed;
  border-radius: 2px;
  flex-shrink: 0;
  cursor: ${({ isDisabled }) => (isDisabled ? "not-allowed" : "pointer")};
  ${({ theme }) => theme.fonts.styles.body};
`;

const FakeLink = styled.span<{ isDisabled: boolean }>`
  text-decoration: underline;
  color: ${({ theme, isDisabled }) => (isDisabled ? "inherit" : theme.colors.brand01)};
`;

// Not sure why I need th additional type here but whatever
const FileUploaderFileName = styled.div<JSX.IntrinsicElements["div"]>`
  color: ${({ theme, onClick }) => (onClick ? theme.colors.brand01 : "inherit")};
  cursor: ${({ onClick }) => (onClick ? "pointer" : "inherit")};
  overflow-wrap: break-word;
  word-wrap: break-word;
  word-break: break-all;
  word-break: break-word;
  hyphens: auto;
  overflow: hidden;
  text-decoration: ${({ onClick }) => (onClick ? "underline" : "inherit")};
`;

const SelectedFileItem = styled.li`
  width: 100%;
  padding: 6px 13px;
  ${Flex.formatter({
    alignment: "horizontal space-between"
  })};
  border: 1px solid ${({ theme }) => theme.color.ui04};
`;

const SelectedFileList = styled.ul`
  ${({ theme }) => theme.fonts.styles.body};
  width: 100%;
  ${Flex.formatter({
    direction: "column"
  })};

  li ~ li {
    margin-top: ${({ theme }) => theme.spacing.spacing.xs};
  }
`;

const IESupportFilter = (props: DropzoneRootProps) => {
  /** istanbul ignore next */
  if (isIE) {
    // If we are IE, we don't currently support drag and drop.
    return Object.keys(props).reduce((acc, key) => {
      if (key.startsWith("onDrag") || key === "onDrop") {
        return {
          ...acc,
          [key]: undefined
        };
      }
      return acc;
    }, props);
  }
  return props;
};

interface IProps<T> extends Omit<DropzoneProps, "onDropAccepted"> {
  /** files to be populated in list of loaded files. */
  files?: T[];
  /** called to check if a file can be clicked. Defaults to false for all files. */
  canClickFile?: (file: T) => boolean;
  /** called to check if a file can be removed. Defaults to false for all files. */
  canRemoveFile?: (file: T) => boolean;
  /** called when a specific file name is clicked, often used to trigger a download of a specific file. */
  onFileClick?: (file: T, event: React.MouseEvent) => void;
  /** called when files are added (via dragndrop or manual browse). */
  onFilesAdded: (files: File[], event: React.MouseEvent) => void;
  /** called when files are removed */
  onFilesRemoved?: (files: T[], event: React.MouseEvent) => void;
  /** called to determine the status of a file. If not included, defaults to "complete" */
  getFileStatus?: (file: T) => "uploading" | "complete";
  translate?: typeof defaultTranslate;
}

/**
 * This component is largely a wrapper around react-dropzone so more documentation can
 * be found here: https://react-dropzone.js.org/#!/Accepting%20specific%20file%20types
 *
 * @class FileUploader
 * @extends {React.PureComponent<IProps>}
 */
class FileUploader<T extends { name: string }> extends React.PureComponent<
  IProps<T> & { theme?: Theme }
> {
  public static defaultProps = {
    files: []
  };
  /** Testing dnd is currently kind tricky so skipping this for now */
  onDropAccepted = (acceptedFiles: File[], event: React.DragEvent<HTMLElement>) => {
    /* istanbul ignore next */
    event.persist();
    /* istanbul ignore next */
    this.props.onFilesAdded(acceptedFiles, event);
  };

  handleItemClick = (file: T) => (e: React.MouseEvent) => {
    e.stopPropagation();
    // onFileClick is checked before even assigning handleItemClick so it will never by undefined.
    this.props.onFileClick(file, e);
  };

  render() {
    const {
      translate = defaultTranslate,
      files,
      canClickFile,
      canRemoveFile,
      onFileClick,
      onFilesRemoved,
      theme,
      getFileStatus,
      ...otherProps
    } = this.props;

    return (
      <>
        <Dropzone {...otherProps} onDropAccepted={this.onDropAccepted}>
          {({ getRootProps, getInputProps, isDragActive }) => (
            <FileUploaderWrapper
              isDisabled={otherProps.disabled}
              isDragActive={isDragActive}
              hasFiles={files.length > 0}
              {...IESupportFilter(getRootProps({ refKey: "innerRef" }))}
            >
              <Flex padding="md md" alignment="center" css="width: 100%;">
                <input {...getInputProps()} data-testid="wfss-file-uploader-input" />
                <FakeLink isDisabled={otherProps.disabled}>
                  {translate({
                    id: isIE ? TranslationKeys.browseTitle : TranslationKeys.dropTitle
                  })}
                </FakeLink>
              </Flex>
            </FileUploaderWrapper>
          )}
        </Dropzone>
        {files.length > 0 && (
          <SelectedFileList>
            {files.map(file => {
              const canClick = canClickFile && onFileClick ? canClickFile(file) : false;
              const canRemove = canRemoveFile && onFilesRemoved ? canRemoveFile(file) : false;
              const status = getFileStatus ? getFileStatus(file) : "complete";
              return (
                <SelectedFileItem key={file.name} title={file.name}>
                  <FileUploaderFileName
                    onClick={canClick ? this.handleItemClick(file) : undefined}
                    role={canClick ? "button" : undefined}
                  >
                    {file.name}
                  </FileUploaderFileName>
                  {status === "uploading" && (
                    <Loading
                      color={theme.color.text01}
                      className={css`
                        height: 1rem;
                        width: 1rem;
                        flex-shrink: 0;
                        margin-left: 4px;
                      `}
                    />
                  )}
                  {status === "complete" && canRemove && (
                    <Icon
                      role="button"
                      title={translate({
                        id: TranslationKeys.delete,
                        values: { name: file.name }
                      })}
                      color={theme.color.text02}
                      css={`
                        margin-top: 2px;
                        cursor: pointer;
                        &:hover {
                          color: ${theme.color.brand01};
                          fill: ${theme.color.brand01};
                        }
                      `}
                      size="small"
                      onClick={e => {
                        e.persist();
                        e.stopPropagation();
                        onFilesRemoved([file], e);
                      }}
                    >
                      <Remove />
                    </Icon>
                  )}
                </SelectedFileItem>
              );
            })}
          </SelectedFileList>
        )}
      </>
    );
  }
}

// Based on carbon loader but without rediculous forced padding
const Loading: React.FC<{ className?: string; color: string }> = ({ className, color }) => (
  <div aria-live="assertive" className={cx("bx--loading", className)}>
    <svg
      className={cx(
        "bx--loading__svg",
        css`
          stroke: ${color};
        `
      )}
      viewBox="-75 -75 150 150"
    >
      <title>Loading</title>
      <circle cx="0" cy="0" r="67" />
    </svg>
  </div>
);

export default withTheme(FileUploader);
