import React from "react";
import { Flex } from "../../primitives/elements";
import { styled } from "../../support/theme";

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

interface ITabProps {
  role: string;
  "aria-selected": boolean | "false" | "true";
}
interface IProps {
  isSelected?: boolean;
  children?: ((props: { tabProps: ITabProps }) => JSX.Element) | React.ReactNode;
  className?: string;
}

const Tab = React.forwardRef(({ isSelected, children, className }: IProps, ref) => {
  const tabProps: ITabProps = { role: "tab", "aria-selected": isSelected ? "true" : "false" };
  return (
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
        a {
          color: ${theme.color.inverse01};
        }
    `}
      className={className}
    >
      {typeof children === "function" ? (
        (children as any)({ tabProps })
      ) : (
        <div {...tabProps}>{children}</div>
      )}
      {isSelected && <UnderscoreDiv />}
    </FlexLI>
  );
});

export default Tab;
