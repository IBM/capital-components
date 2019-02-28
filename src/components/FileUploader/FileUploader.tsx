import Trash from "@fss/icons/dist/svg/trash_24";
import React from "react";
import Dropzone, { DropzoneProps } from "react-dropzone";
import { Omit } from "type-zoo/types";
import { CenteredBlock, Flex, ISharedElementProps } from "../../primitives/elements";
import { styled } from "../../support/theme";
import Icon from "../Icon";

enum TranslationKeys {
  dropTitle = "wfss-components.fileuploader.droptitle",
  browseTitle = "wfss-components.fileuploader.browsetitle",
  delete = "wfss-components.fileuploader.delete"
}

const defaultTranslations: Record<TranslationKeys, (values: any) => string> = {
  [TranslationKeys.dropTitle]: () => "Drop files to attach, or",
  [TranslationKeys.browseTitle]: () => "browse",
  [TranslationKeys.delete]: values => `Remove file ${values.name}`
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
  flex: 1 1 auto;
  color: ${({ theme, onClick }) => (onClick ? theme.colors.brand01 : "inherit")};
  cursor: ${({ onClick }) => (onClick ? "pointer" : "inherit")};
`;

const FlexLi = Flex.withComponent("li");
const FlexUl = Flex.withComponent("ul");

interface IProps extends Omit<DropzoneProps, "onDropAccepted"> {
  initialFilesSelected?: File[];
  translate?: typeof defaultTranslate;
  onFileClick?: (file: File, event: React.MouseEvent) => void;
  onChange: (files: File[], event: React.MouseEvent) => void;
}

interface IState {
  selectedFiles: File[];
}
/**
 * This component is largely a wrapper around react-dropzone so more documentation can
 * be found here: https://react-dropzone.js.org/#!/Accepting%20specific%20file%20types
 *
 * @class FileUploader
 * @extends {React.PureComponent<IProps>}
 */
class FileUploader extends React.PureComponent<IProps, IState> {
  state: IState = {
    selectedFiles: this.props.initialFilesSelected || []
  };

  onDropAccepted = (acceptedFiles: File[], event: React.DragEvent<HTMLElement>) => {
    event.persist();
    this.setState(
      prevState => {
        let newSelectedFiles = prevState.selectedFiles;
        acceptedFiles.forEach(file => {
          if (!newSelectedFiles.find(f => f.name === file.name)) {
            newSelectedFiles = [...newSelectedFiles, file];
          }
        });
        return {
          selectedFiles: newSelectedFiles
        };
      },
      () => {
        this.updateListeners(event);
      }
    );
  };

  updateListeners(event: React.MouseEvent) {
    this.props.onChange(this.state.selectedFiles, event);
  }

  handleItemClick = (file: File) => (e: React.MouseEvent) => {
    e.stopPropagation();
    if (this.props.onFileClick) {
      this.props.onFileClick(file, e);
    }
  };

  render() {
    const { translate = defaultTranslate, initialFilesSelected = [], ...otherProps } = this.props;
    const { selectedFiles } = this.state;
    return (
      <Dropzone {...otherProps} onDropAccepted={this.onDropAccepted}>
        {({ getRootProps, getInputProps, isDragActive }) => (
          <FileUploaderWrapper
            isDragActive={isDragActive}
            {...getRootProps({ refKey: "innerRef" })}
          >
            <Flex padding="md md" alignment="center" css="width: 100%;">
              <input {...getInputProps()} data-testid="wfss-file-uploader-input" />
              <span>
                {translate({ id: TranslationKeys.dropTitle })}
                <FakeLink css="padding-left: 0.25rem;">
                  {translate({ id: TranslationKeys.browseTitle })}
                </FakeLink>
              </span>
            </Flex>
            {selectedFiles.length > 0 && (
              <FlexUl padding="0 md md md" direction="column" css="width: 100%;">
                {selectedFiles.map(file => {
                  const isInitialFile = !!initialFilesSelected.find(f => f.name === file.name);

                  return (
                    <FlexLi key={file.name} css="width: 100%;" padding="top xs" title={file.name}>
                      <FileUploaderFileName
                        onClick={isInitialFile ? this.handleItemClick(file) : undefined}
                        role={isInitialFile ? "button" : undefined}
                      >
                        {file.name}
                      </FileUploaderFileName>
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
                          this.setState(
                            prevState => ({
                              selectedFiles: prevState.selectedFiles.filter(
                                iF => iF.name !== file.name
                              )
                            }),
                            () => {
                              this.updateListeners(e);
                            }
                          );
                        }}
                      >
                        <Trash />
                      </Icon>
                    </FlexLi>
                  );
                })}
              </FlexUl>
            )}
          </FileUploaderWrapper>
        )}
      </Dropzone>
    );
  }
}

export default FileUploader;
