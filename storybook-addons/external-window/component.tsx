import React, { PureComponent } from "react";
import ExternalWindow from "./externalWindow";

const buttonStyle = {
  fontFamily: "sans-serif",
  fontSize: "12px",
  display: "block",
  position: "fixed",
  border: "none",
  background: "rgb(34, 136, 204)",
  color: "rgb(255, 255, 255)",
  padding: "5px 15px",
  cursor: "pointer",
  bottom: "0px",
  right: "0px",
  borderRadius: "5px 0px 0px 0px",
  zIndex: 999
};

export default class extends PureComponent<{}, { isOpen: boolean }> {
  state = {
    isOpen: false
  };

  toggleIsOpen = () =>
    this.setState(prevState => ({
      isOpen: !prevState.isOpen
    }));

  render() {
    const { children } = this.props;
    return (
      <React.Fragment>
        {children}
        <button onClick={this.toggleIsOpen} style={buttonStyle as any}>
          Open in window
        </button>
        {this.state.isOpen && (
          <ExternalWindow title="External Window" closeWindowPortal={this.toggleIsOpen}>
            {children}
          </ExternalWindow>
        )}
      </React.Fragment>
    );
  }
}
