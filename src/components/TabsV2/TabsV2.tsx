import React from "react";
import { styled } from "@fss/components/lib/support/theme";
import { Flex } from "@fss/components/lib/primitives/elements";
import { css } from "emotion";

const Nav = styled("nav")`
  background-color: ${props => props.theme.color.nav02};
  border-bottom: ${props => props.theme.color.text02} 1px solid;
  font-weight: ${props => props.theme.fonts.weights.regular};
  overflow: auto;
  direction: rtl;
  flex-shrink: 0;
`;

const FlexUl = Flex.withComponent("ul");

class TabsV2 extends React.PureComponent<{
  scrollToTab?: number;
}> {
  private childRefs: HTMLElement[];

  componentDidMount() {
    const { scrollToTab } = this.props;
    if (scrollToTab !== undefined && scrollToTab < this.childRefs.length) {
      this.childRefs[scrollToTab].scrollIntoView();
    }
  }

  componentDidUpdate(prevProps) {
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

  render() {
    const { children } = this.props;
    this.childRefs = [];
    // Capture refs to children so we can scroll to the appropriate element
    const newChildrenWithRefs = React.Children.map(children, (child, index) =>
      React.cloneElement(child as any, {
        ref: node => (this.childRefs[index] = node)
      })
    );

    return (
      <Nav role="navigation">
        <FlexUl
          direction="row"
          alignment="horizontal flex-end"
          role="tablist"
          className={css`
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
