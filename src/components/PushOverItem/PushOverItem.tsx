import { styled, withTheme } from "../../support/theme";
import { css, cx } from "emotion";
import { Flex } from "../../primitives/elements";
import React from "react";

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
    const classes = 
      css`
        border-bottom: 1px solid ${theme.color.text02};
        font-weight: ${isSelected ? 600 : 400};
        flex: 1 1 auto;
        ${isSelected ? `background-color: ${theme.color.nav01};` : null};
      `;

    const wrapper = cx(
      css`
        position: relative;
        flex-shrink: 0;
      `,
      className
    );

    const Element = Flex.withComponent(element);

    return (
      <Element className={wrapper} {...restProps}>
        {children({ className: classes })}
        {isSelected && <HighlightDiv />}
      </Element>
    );
  }
) as React.SFC<IProps>;

export default PushOverItem;
