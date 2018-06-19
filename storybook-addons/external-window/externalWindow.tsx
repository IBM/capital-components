// Original source: https://hackernoon.com/using-a-react-16-portal-to-do-something-cool-2a2d627b0202

import React from "react";
import ReactDOM from "react-dom";

function copyStyles(sourceDoc, targetDoc) {
  Array.from(sourceDoc.styleSheets).forEach((styleSheet: any) => {
    if (styleSheet.cssRules) {
      // true for inline styles
      const newStyleEl = sourceDoc.createElement("style");

      Array.from(styleSheet.cssRules).forEach((cssRule: any) => {
        newStyleEl.appendChild(sourceDoc.createTextNode(cssRule.cssText));
      });

      targetDoc.head.appendChild(newStyleEl);
    } else if (styleSheet.href) {
      // true for stylesheets loaded from a URL
      const newLinkEl = sourceDoc.createElement("link");

      newLinkEl.rel = "stylesheet";
      newLinkEl.href = styleSheet.href;
      targetDoc.head.appendChild(newLinkEl);
    }
  });
}

interface IProps {
  title: string;
  closeWindowPortal: () => void;
}

export default class extends React.PureComponent<IProps> {
  containerElement: HTMLDivElement = document.createElement("div");
  externalWindow: Window = null;

  componentDidMount() {
    // STEP 3: open a new browser window and store a reference to it
    this.externalWindow = window.open("", "", "width=600,height=400,left=200,top=200");

    // STEP 4: append the container <div> (that has props.children appended to it) to the body of the new window
    this.externalWindow.document.body.appendChild(this.containerElement);

    this.externalWindow.document.title = this.props.title;
    copyStyles(document, this.externalWindow.document);

    // update the state in the parent component if the user closes the
    // new window
    this.externalWindow.addEventListener("beforeunload", () => {
      this.props.closeWindowPortal();
    });
  }

  componentWillUpdate(nextProps) {
    this.externalWindow.document.title = nextProps.title;
  }

  componentWillUnmount() {
    // This will fire when this.state.showWindowPortal in the parent component becomes false
    // So we tidy up by just closing the window
    this.externalWindow.close();
  }

  render() {
    // STEP 2: append props.children to the container <div> that isn't mounted anywhere yet
    return ReactDOM.createPortal(this.props.children, this.containerElement);
  }
}
