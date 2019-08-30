import { css, cx } from "emotion";
import React from "react";
import { Flex } from "../../primitives/elements";
import { styled, withTheme } from "../../support/theme";

const HighlightDiv = styled("div")`
  position: absolute;
  height: 100%;
  width: 4px;
  background-color: ${({ theme }) => theme.color.brand03};
`;

export interface IProps extends React.HTMLAttributes<HTMLDivElement> {
  isSelected?: boolean;
  children: (props: { className: string }) => JSX.Element;
  element?: "div" | "li";
}

export const PushOverItem = withTheme(
  ({ children, isSelected, theme, className, element = "li", ...restProps }) => {
    const classes = css(
      theme.fonts.styles.bodyShort02,
      `
      border-bottom: 1px solid ${theme.color.text02}80;
      font-weight: ${isSelected ? 600 : 400};
      flex: 1 1 auto;
      line-height: 1.5rem;
      ${isSelected ? `background-color: ${theme.color.ui05};` : null};
    `
    );

    const wrapper = cx(
      css`
        position: relative;
        flex-shrink: 0;
      `,
      className
    );

    const Element = Flex.withComponent(element as any);

    return (
      <Element className={wrapper} {...restProps}>
        {children({ className: classes })}
        {isSelected && <HighlightDiv />}
      </Element>
    );
  }
) as React.SFC<IProps>;

export default PushOverItem;
