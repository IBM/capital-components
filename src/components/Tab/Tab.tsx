import React from "react";
import { styled } from "@fss/components/lib/support/theme";
import { Flex } from "@fss/components/lib/primitives/elements";

const FlexLI = Flex.withComponent("li");

// Here we use an absolute div to render the underline
// this allows us to finely control positioning/animation.
// We also need to customize the width due to padding.
const UnderscoreDiv = styled("div")`
  position: absolute;
  left: ${({ theme }) => theme.spacing.spacing.sm};
  height: 4px;
  width: 100%;
  background-color: ${({ theme }) => theme.color.text02};
  bottom: 0;
  width: calc(100% - 2 * ${({ theme }) => theme.spacing.spacing.sm});
`;

interface IProps {
  isSelected?: boolean;
  children: (
    props: { tabProps: { role: string; "aria-selected": boolean | "false" | "true" } }
  ) => JSX.Element;
  className?: string;
}

const Tab = React.forwardRef(({ isSelected, children, className }, ref) => (
  <FlexLI
    innerRef={ref}
    role="presentation"
    tabIndex={-1}
    padding="left sm right sm"
    cssWithTheme={({ theme }) => `
        ${theme.fonts.styles.body};
        color: ${theme.color.inverse01};
        line-height: ${theme.spacing.spacing.xl3};
        position: relative;
        font-weight: ${isSelected ? theme.fonts.weights.bold : theme.fonts.weights.regular};
        cursor: pointer;
        flex-shrink: 0;
        font-size: 0.875rem;
    `}
    className={className}
  >
    {children({ tabProps: { role: "tab", "aria-selected": isSelected ? "true" : "false" } })}
    {isSelected && <UnderscoreDiv />}
  </FlexLI>
)) as React.SFC<IProps>;

export default Tab;
