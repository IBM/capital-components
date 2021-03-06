import React from "react";
import styled from "react-emotion";
import { layers } from "../../layout/layers";

const defaultContextValue: {
  getLeftRef: () => HTMLElement;
  getRightRef: () => HTMLElement;
} = {
  getLeftRef: () => null,
  getRightRef: () => null
};

export const context = React.createContext(defaultContextValue);

const RelativeDiv = styled("div")<{ position: "left" | "right" }>`
  z-index: ${layers.FlyOver};
  height: 100%;
  position: absolute;
  top: 0;
  overflow: hidden;
  ${({ position }) => (position === "right" ? "right: 0;" : null)};
`;

export interface IProps {
  className?: string;
  position?: "left" | "right";
}

export class FlyOverProvider extends React.PureComponent<
  IProps,
  { leftContentRef: HTMLElement; rightContentRef: HTMLElement }
> {
  public leftContentRef: HTMLElement = null;
  public rightContentRef: HTMLElement = null;

  public state = {
    leftContentRef: null,
    rightContentRef: null
  };

  public componentDidMount() {
    // Only update these on mount so we don't get uneccessary ref changes. If
    // the provider changes parents, it'll be remounted, which works for us.
    this.setState({
      leftContentRef: this.leftContentRef,
      rightContentRef: this.rightContentRef
    });
  }

  public render() {
    const { children, position = "left", ...otherProps } = this.props;
    // const context = position === "left" ? leftContext : rightContext;
    return (
      <context.Provider
        value={{
          getLeftRef: () => this.state.leftContentRef,
          getRightRef: () => this.state.rightContentRef
        }}
      >
        {children}
        <RelativeDiv
          innerRef={node => (this.leftContentRef = node)}
          position="left"
          {...otherProps}
        />
        <RelativeDiv
          innerRef={node => (this.rightContentRef = node)}
          position="right"
          {...otherProps}
        />
        {/* This component (RelativeDiv) SHOULD NEVER have children. They are to be controlled by FlyOver. */}
      </context.Provider>
    );
  }
}

export default FlyOverProvider;
