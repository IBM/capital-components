import Trash from "@fss/icons/dist/svg/trash_24";
import { detect } from "detect-browser";
import React from "react";
import Dropzone, { DropzoneProps, DropzoneRootProps } from "react-dropzone";
import { Omit } from "type-zoo/types";
import { CenteredBlock, Flex, ISharedElementProps } from "../../primitives/elements";
import { styled } from "../../support/theme";
import Icon from "../Icon";

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
const FileUploaderWrapper = styled(CenteredBlock)<ISharedElementProps & { isDragActive: boolean }>`
  flex-direction: column;
  border-width: 2px;
  border-color: ${({ theme, isDragActive }) =>
    isDragActive ? theme.colors.brand02 : theme.colors.ui04};
  background-color: ${({ theme }) => theme.colors.ui01};
  border-style: dashed;
  border-radius: 2px;
  flex-shrink: 0;
  ${({ theme }) => theme.fonts.styles.body};
`;

const FakeLink = styled.span`
  text-decoration: underline;
  color: ${({ theme }) => theme.colors.brand01};
  cursor: pointer;
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
`;

const SelectedFileItem = styled.li`
  width: 100%;
  ${Flex.formatter({
    padding: "bottom xs",
    alignment: "horizontal space-between"
  })};
`;

const SelectedFileList = styled.ul`
  width: 100%;
  ${({ theme }) => theme.fonts.styles.body};
  ${Flex.formatter({
    padding: "md md md md",
    direction: "column"
  })};
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
  translate?: typeof defaultTranslate;
}

/**
 * This component is largely a wrapper around react-dropzone so more documentation can
 * be found here: https://react-dropzone.js.org/#!/Accepting%20specific%20file%20types
 *
 * @class FileUploader
 * @extends {React.PureComponent<IProps>}
 */
class FileUploader<T extends { name: string }> extends React.PureComponent<IProps<T>> {
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
      ...otherProps
    } = this.props;

    return (
      <>
        <Dropzone {...otherProps} onDropAccepted={this.onDropAccepted}>
          {({ getRootProps, getInputProps, isDragActive }) => (
            <FileUploaderWrapper
              isDragActive={isDragActive}
              {...IESupportFilter(getRootProps({ refKey: "innerRef" }))}
            >
              <Flex padding="md md" alignment="center" css="width: 100%;">
                <input {...getInputProps()} data-testid="wfss-file-uploader-input" />
                <FakeLink>
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
              return (
                <SelectedFileItem key={file.name} title={file.name}>
                  <FileUploaderFileName
                    onClick={canClick ? this.handleItemClick(file) : undefined}
                    role={canClick ? "button" : undefined}
                  >
                    {file.name}
                  </FileUploaderFileName>
                  {canRemove && (
                    <Icon
                      role="button"
                      title={translate({
                        id: TranslationKeys.delete,
                        values: { name: file.name }
                      })}
                      cssWithTheme={({ theme }) => `
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
                      <Trash />
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

export default FileUploader;
