import React from "react";
import { Flex } from "../../primitives/elements";

const FlexUl = Flex.withComponent("ul");

class TabsV2 extends React.PureComponent<
  {
    /** The index of the tab to scroll to. */
    scrollToTab?: number;
    /** Whether to align the tabs left or right. Defaults to "right" */
    alignment?: "flex-start" | "flex-end";
    /** Determines the height of the underscore for each tab. Defaults to thick */
    underscoreHeight?: "thick" | "thin";
    /** Determines the spacing between tabs. Currently determined by some context. */
    spacingBetween?: "md" | "lg";
  } & React.ComponentPropsWithoutRef<typeof FlexUl>
> {
  public static defaultProps = {
    underscoreHeight: "thick"
  };

  private childRefs: HTMLElement[];

  public componentDidMount() {
    const { scrollToTab } = this.props;
    if (scrollToTab !== undefined && scrollToTab < this.childRefs.length) {
      this.childRefs[scrollToTab].scrollIntoView();
    }
  }

  public componentDidUpdate(prevProps) {
    const { scrollToTab } = this.props;
    const { scrollToTab: prevScrollToTab } = prevProps;
    // Only update scroll if scrollToTab is changing, otherwise we could scroll on any other
    // children. If we add any props, we'll want to update here so we update when anything BUT
    // children change.
    if (
      scrollToTab !== undefined &&
      scrollToTab < this.childRefs.length &&
      prevScrollToTab !== scrollToTab
    ) {
      this.childRefs[scrollToTab].scrollIntoView();
    }
  }

  public render() {
    const {
      children,
      scrollToTab,
      alignment = "flex-end",
      underscoreHeight,
      spacingBetween,
      ...otherProps
    } = this.props;
    this.childRefs = [];
    const childrenCount = React.Children.count(children);
    // Capture refs to children so we can scroll to the appropriate element
    const newChildrenWithRefs = React.Children.map(children, (child, index) =>
      React.cloneElement(child as any, {
        innerRef: node => (this.childRefs[index] = node),
        firstChild: index === 0,
        lastChild: index === childrenCount - 1,
        underscoreHeight: underscoreHeight === "thin" ? "2px" : "4px",
        spacingBetween,
        onKeyDown: evt => {
          if (!React.isValidElement(child)) {
            return;
          }
          const leftKey = 37;
          const rightKey = 39;
          let newTargetIndex = -1;
          if (evt.which === leftKey) {
            newTargetIndex = index - 1;
            if (newTargetIndex < 0) {
              newTargetIndex = childrenCount - 1;
            }
          } else if (evt.which === rightKey) {
            newTargetIndex = index + 1;
            if (newTargetIndex >= childrenCount) {
              newTargetIndex = 0;
            }
          }
          if (
            newTargetIndex >= 0 &&
            this.childRefs[newTargetIndex] &&
            this.childRefs[newTargetIndex].scrollIntoView
          ) {
            this.childRefs[newTargetIndex].scrollIntoView();
            this.childRefs[newTargetIndex].focus();
          }

          if ((child.props as any).onKeyDown) {
            return (child.props as any).onKeyDown(evt);
          }
        }
      })
    );

    return (
      <FlexUl
        direction="row"
        alignment={`horizontal ${alignment}`}
        role="tablist"
        css={`
          direction: ltr;
          > :first-child {
            padding-left: 0px;
          }
          > :last-child {
            padding-right: 0px;
          }
        `}
        {...otherProps}
      >
        {newChildrenWithRefs}
      </FlexUl>
    );
  }
}

export default TabsV2;
