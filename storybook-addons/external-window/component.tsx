import React from "react";
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

const Component: React.FunctionComponent<{ rootProps: any }> = ({ rootProps, children }) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const toggleIsOpen = () => setIsOpen(prevState => !prevState);
  return (
    <React.Fragment>
      {children}
      <button onClick={toggleIsOpen} style={buttonStyle as any}>
        Open in window
      </button>
      {isOpen && (
        <ExternalWindow
          title="External Window"
          closeWindowPortal={toggleIsOpen}
          rootProps={rootProps}
        >
          {children}
        </ExternalWindow>
      )}
    </React.Fragment>
  );
};

export default Component;
