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

const defaultTranslations: Record<TranslationKeys, string> = {
  [TranslationKeys.dropTitle]: "Drop files to attach, or",
  [TranslationKeys.browseTitle]: "browse",
  [TranslationKeys.delete]: "delete"
};

const defaultTranslate = (arg: { id: TranslationKeys }) => defaultTranslations[arg.id];

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

const FileUploaderFileName = styled.div`
  flex: 1 1 auto;
`;

interface IProps extends Omit<DropzoneProps, "onDropAccepted"> {
  initialFilesSelected?: File[];
  translate?: typeof defaultTranslate;
  onFileClick?: (file: File, event: React.MouseEvent) => void;
  onChange?: (files: File[], event: React.MouseEvent) => void;
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
    if (this.props.onChange) {
      this.props.onChange(this.state.selectedFiles, event);
    }
  }

  handleItemClick = (file: File) => (e: React.MouseEvent) => {
    if (this.props.onFileClick) {
      e.stopPropagation();
      this.props.onFileClick(file, e);
    }
  };

  render() {
    const { translate = defaultTranslate, initialFilesSelected = [], ...otherProps } = this.props;
    const { selectedFiles } = this.state;
    return (
      <Dropzone {...otherProps} onDropAccepted={this.onDropAccepted}>
        {({ getRootProps, getInputProps, isDragActive }) => (
          <FileUploaderWrapper isDragActive={isDragActive} {...getRootProps()}>
            <Flex padding="md md" alignment="center" css="width: 100%;">
              <input {...getInputProps()} />
              <span>
                {translate({ id: TranslationKeys.dropTitle })}
                <FakeLink css="padding-left: 0.25rem;">
                  {translate({ id: TranslationKeys.browseTitle })}
                </FakeLink>
              </span>
            </Flex>
            {selectedFiles.length > 0 && (
              <Flex padding="0 md md md" direction="column" css="width: 100%;">
                {selectedFiles.map(file => (
                  <Flex key={file.name} css="width: 100%;" padding="top xs">
                    <FileUploaderFileName
                      onClick={
                        initialFilesSelected.find(f => f.name === file.name) &&
                        this.handleItemClick(file)
                      }
                    >
                      {file.name}
                    </FileUploaderFileName>
                    <Icon
                      cssWithTheme={({ theme }) => `
                        margin-top: 2px;
                        cursor: pointer;
                        &:hover {
                          color: ${theme.color.brand01};
                          fill: ${theme.color.brand01};
                        }
                      `}
                      size="small"
                      title={translate({ id: TranslationKeys.delete })}
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
                  </Flex>
                ))}
              </Flex>
            )}
          </FileUploaderWrapper>
        )}
      </Dropzone>
    );
  }
}

export default FileUploader;
