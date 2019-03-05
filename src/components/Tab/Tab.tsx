import React from "react";
import { darkModeContext } from "../../contexts";
import { Flex } from "../../primitives/elements";
import { styled } from "../../support/theme";

const FlexLI = Flex.withComponent("li");

// Here we use an absolute div to render the underline
// this allows us to finely control positioning/animation.
// We also need to customize the width due to padding.
const UnderscoreDiv = styled("div")<{ darkMode: boolean }>`
  position: absolute;
  left: ${({ theme }) => theme.spacing.spacing.sm};
  height: 4px;
  width: 100%;
  background-color: ${({ theme, darkMode }) =>
    darkMode ? theme.color.text02 : theme.color.brand01};
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
    <darkModeContext.Consumer>
      {darkMode => (
        <FlexLI
          innerRef={ref}
          role="presentation"
          tabIndex={-1}
          padding="left sm right sm"
          cssWithTheme={({ theme }) => `
          ${theme.fonts.styles.body};
          color: ${
            darkMode ? theme.color.inverse01 : isSelected ? theme.color.brand01 : theme.color.text01
          };
          line-height: ${theme.spacing.spacing.xl3};
          position: relative;
          font-weight: ${isSelected ? theme.fonts.weights.bold : theme.fonts.weights.regular};
          cursor: pointer;
          flex-shrink: 0;
          font-size: 0.875rem;
          outline: none;
          a {
            color: inherit;
            text-decoration: none;
          }
          :hover {
            color: ${darkMode ? theme.color.inverse01 : theme.color.brand01};
          }
      `}
          className={className}
        >
          {typeof children === "function" ? (
            (children as any)({ tabProps })
          ) : (
            <div {...tabProps}>{children}</div>
          )}
          {isSelected && <UnderscoreDiv darkMode={darkMode} />}
        </FlexLI>
      )}
    </darkModeContext.Consumer>
  );
});

export default Tab;
