import isPropValid from "@emotion/is-prop-valid";
import { FlexDirectionProperty } from "csstype";
import { css, cx } from "emotion";
import React, { ComponentType, ComponentPropsWithoutRef } from "react";
import { buildAlignment } from "../../layout/alignment";
import { IBreakPointDescriptor } from "../../layout/mediaQueries";
import { buildSpacing } from "../../layout/spacing";
import { styled, Theme, withTheme } from "../../support/theme";
import { detect } from "detect-browser";
import { disableBodyScroll, enableBodyScroll } from "body-scroll-lock";

const browser = detect();
/* istanbul ignore next */
const isIOS = browser && browser.os === "iOS";
const isSafari = browser && browser.name === "safari";

export interface ISharedElementProps {
  /* How to render the padding for this element. Use predefined xs, sm, md, etc padding variables or define a size. */
  padding?: string | IBreakPointDescriptor<string>;
  margin?: string | IBreakPointDescriptor<string>;
  cssWithTheme?: (props: { theme: Theme }) => string;
}

const buildSpacingStyles = ({ padding, margin }: ISharedElementProps) => {
  const paddingStr = buildSpacing(padding);
  const marginStr = buildSpacing(margin, "margin");
  if (paddingStr && marginStr) {
    return `${paddingStr}; ${marginStr}`;
  }

  return paddingStr || marginStr || "";
};

export const addCssWithTheme = ({
  cssWithTheme,
  theme
}: ISharedElementProps & { theme?: Theme }) => {
  if (cssWithTheme && theme) {
    return cssWithTheme({ theme });
  }
  return "";
};

export const buildSharedPropsStyles = (props: ISharedElementProps & { theme?: Theme }) => `
  ${buildSpacingStyles(props)};
  ${addCssWithTheme(props)};
`;

export const makeBaseElement: <Props extends { className?: string }>(
  element: React.ComponentType<Props> | string,
  additionalClassNames?: string[]
) => ComponentType<ISharedElementProps & { className?: string } & Props> = (
  element,
  additionalClassNames = []
) =>
  withTheme(props => {
    const { padding, margin, cssWithTheme, theme, className, ...otherProps } = props;
    const classes = cx(
      css`
        ${buildSharedPropsStyles({ padding, margin, cssWithTheme, theme })};
      `,
      ...additionalClassNames,
      className
    );
    const Element = element as any;
    return <Element className={classes} {...otherProps} />;
  });

// Basic flex dentered box.
const buildCenteredBlockStyles = (props: ISharedElementProps) => `
  display: flex;
  justify-content: center;
  align-items: center;
  ${buildSharedPropsStyles(props)};
`;

export const CenteredBlock = Object.assign(
  styled("div")<ISharedElementProps>(buildCenteredBlockStyles),
  {
    formatter: buildCenteredBlockStyles
  }
);

export const Block = Object.assign(styled("div")<ISharedElementProps>(buildSharedPropsStyles), {
  formatter: buildSharedPropsStyles
});

export const Inline = Object.assign(styled("div")<ISharedElementProps>(buildSharedPropsStyles), {
  formatter: buildSharedPropsStyles
});

const inlineBlockStyleFormatter = (props: FlexProps) => `
  display: inline-block;
  ${buildSharedPropsStyles(props)};
`;

export const InlineBlock = Object.assign(
  styled("div")<ISharedElementProps>(inlineBlockStyleFormatter),
  {
    formatter: inlineBlockStyleFormatter
  }
);

export type FlexProps = {
  direction?: FlexDirectionProperty;
  alignment?: string;
} & ISharedElementProps;

const flexStyleFormatter = (props: FlexProps) => `
  display: flex;
  flex-direction: ${props.direction || "row"};
  ${props.alignment ? buildAlignment(props.direction || "row", props.alignment) : ""};
  ${buildSharedPropsStyles(props)};
`;

const shouldForwardProp = (prop: string) => prop !== "direction" && isPropValid(prop);

// Use Object.assign to add additional properties to this component,
// allowing other components to use it's stylings
export const Flex = Object.assign(
  styled("div", {
    shouldForwardProp
  })<FlexProps>(flexStyleFormatter),
  {
    formatter: flexStyleFormatter
  }
);

const SeperatorWrapper = styled("div")`
  position: relative;
`;

const SeperatorInternal = styled("div")<{ inverse?: boolean; fullWidth?: boolean }>`
  background-color: ${({ inverse, theme }) => (inverse ? theme.color.ui01 : theme.color.ui04)};
  height: 1px;
  ${({ fullWidth }) => fullWidth && `position: absolute; width: 120vw; left: -10%;`};
`;

// Seperator is a nested element so we can support a 'fullwidth' line, meaning it
// ignores padding and always crosses
export const Seperator = ({
  inverse,
  fullWidth,
  padding = "md 0",
  className,
  hideBar,
  withinGrid
}: {
  inverse?: boolean;
  fullWidth?: boolean;
  padding?: string | IBreakPointDescriptor<string>;
  className?: string;
  hideBar?: boolean;
  withinGrid?: boolean;
}) => (
  <SeperatorWrapper
    className={cx(className, css(buildSpacing(padding)), {
      "cap-padding--horizontal": withinGrid
    })}
  >
    {!hideBar && <SeperatorInternal inverse={inverse} fullWidth={fullWidth} />}
  </SeperatorWrapper>
);

const VerticalSeperatorInternal = styled("div")<{ inverse?: boolean }>`
  background-color: ${({ inverse, theme }) => (inverse ? theme.color.ui01 : theme.color.ui04)};
  width: 1px;
  position: absolute;
  top: 0;
  bottom: 0;
`;

// Require's parent element to have position relative
// adjust top/bottom of internal element to add top/bottom padding
// TODO: parse padding to convert it into top/bottom adjustments.
export const VerticalSeperator = ({
  inverse,
  padding = "md 0",
  className
}: {
  inverse?: boolean;
  padding?: string | IBreakPointDescriptor<string>;
  className?: string;
}) => (
  <div className={cx(className, css(buildSpacing(padding), css("position: relative;")))}>
    <VerticalSeperatorInternal inverse={inverse} />
  </div>
);

export const ContentWrapper = styled.div`
  ${({ theme }) => theme.fonts.styles.body};
  display: flex;
  flex: 1 1 auto;
  flex-direction: column;
  overflow: hidden;
`;

export const ContentBottomPadding = styled.div`
  min-height: 6rem;
  height: 6rem;
  flex: 0 0 6rem;
`;

export const MainWrapper = styled.div`
  display: flex;
  flex: 1 1 auto;
  flex-direction: column;
  overflow: hidden;
  min-width: 100vw;
`;

/**
 * Be careful, the following element cannot be a flex item that wraps a grid element
 * so you can toggle the flex off if the grid is immediately within this element.
 * This is due to a very annoying bug in safari that causes general weirdness if a
 * grid is contained in an expanding flexbox.
 *
 * Update: Overriden this bizarre bug by preventing height of all elements within the
 * grid from being set to height 100%.
 *
 * Update 2: Turns out the issue was only vaguely related to this element. An element in safari
 * had a min-height of 200px combined with a flex: 1 1 auto. That seems to have
 * been the cause. Changing to flex: 1 1 200px resolves the issue. I believe it's related to
 * this: https://github.com/philipwalton/flexbugs/issues/132#issuecomment-222266165
 */
const VerticalScrollableContentInternal = styled.div`
  flex: 1 1 auto;
  overflow-y: auto;
  overflow-x: hidden;

  display: flex;
  flex-direction: column;

  @supports (-webkit-overflow-scrolling: touch) {
    overflow-y: scroll;
    -webkit-overflow-scrolling: touch;
  }
`;

export class VerticalScrollableContent extends React.PureComponent<
  ComponentPropsWithoutRef<typeof VerticalScrollableContentInternal> & {
    /** Optionally disable scroll locking (used only for iOS) */
    disableScrollLock?: boolean;
  }
> {
  trackingNode: HTMLElement = null;

  static defaultProps = {
    disableScrollLock: true
  };

  componentDidMount() {
    if (isIOS && !this.props.disableScrollLock) {
      disableBodyScroll(this.trackingNode);
    }
  }

  componentWillUnmount() {
    if (isIOS && !this.props.disableScrollLock) {
      enableBodyScroll(this.trackingNode);
    }
  }

  render() {
    const { disableScrollLock, ...otherProps } = this.props;
    return (
      <VerticalScrollableContentInternal
        {...otherProps}
        innerRef={node => {
          this.trackingNode = node;
          if (typeof this.props.innerRef === "function") {
            this.props.innerRef(node);
          } else if (this.props.innerRef) {
            // bypassing readonly until typescript defs are updated:
            // https://github.com/DefinitelyTyped/DefinitelyTyped/issues/31065
            (this.props.innerRef.current as any) = node;
          }
        }}
      />
    );
  }
}
