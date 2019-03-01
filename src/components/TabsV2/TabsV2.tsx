import React from "react";
import { Flex } from "../../primitives/elements";
import { styled } from "../../support/theme";

const Nav = styled("nav")`
  font-weight: ${props => props.theme.fonts.weights.regular};
  overflow: auto;
  direction: rtl;
  flex-shrink: 0;
`;

const FlexUl = Flex.withComponent("ul");

class TabsV2 extends React.PureComponent<
  {
    scrollToTab?: number;
  } & React.ComponentPropsWithoutRef<typeof Nav>
> {
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
    const { children, scrollToTab, ...otherProps } = this.props;
    this.childRefs = [];
    // Capture refs to children so we can scroll to the appropriate element
    const newChildrenWithRefs = React.Children.map(children, (child, index) =>
      React.cloneElement(child as any, {
        ref: node => (this.childRefs[index] = node)
      })
    );

    return (
      <Nav role="navigation" {...otherProps}>
        <FlexUl
          direction="row"
          alignment="horizontal flex-end"
          role="tablist"
          css={`
            direction: ltr;
          `}
        >
          {newChildrenWithRefs}
        </FlexUl>
      </Nav>
    );
  }
}

export default TabsV2;
