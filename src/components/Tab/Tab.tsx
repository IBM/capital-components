import React from "react";
import { darkModeContext } from "../../contexts";
import { Flex } from "../../primitives/elements";
import { styled } from "../../support/theme";

const FlexLI = Flex.withComponent("li");

// Here we use an absolute div to render the underline
// this allows us to finely control positioning/animation.
// We also need to customize the width due to padding.
const UnderscoreDiv = styled("div")<{
  darkMode: boolean;
  firstChild: boolean;
  lastChild: boolean;
  underscoreHeight: "4px" | "2px";
  spacingBetween: "lg" | "md";
}>(({ firstChild, lastChild, darkMode, theme, underscoreHeight, spacingBetween }) => ({
  position: "absolute",
  left: firstChild ? 0 : theme.spacing.spacing[spacingBetween],
  height: underscoreHeight,
  backgroundColor: darkMode ? theme.color.text02 : theme.color.brand01,
  bottom: 0,
  width: `calc(100% - ${firstChild || lastChild ? 1 : 2} * ${
    theme.spacing.spacing[spacingBetween]
  })`
}));

interface ITabProps {
  role: string;
  "aria-selected": boolean | "false" | "true";
  ref?: React.MutableRefObject<any>;
}
interface IProps extends React.HTMLAttributes<HTMLDivElement> {
  isSelected?: boolean;
  children?: ((props: { tabProps: ITabProps }) => JSX.Element) | React.ReactNode;
  className?: string;
  /** Prop usually provided by TabsV2. Override at your own risk. */
  firstChild?: boolean;
  /** Prop usually provided by TabsV2. Override at your own risk. */
  lastChild?: boolean;
  /** Prop usually provided by TabsV2. Override at your own risk. */
  underscoreHeight?: "4px" | "2px";
  /** Prop usually provided by TabsV2. Override at your own risk. */
  spacingBetween?: "md" | "lg";
  /** Prop usually provided by TabsV2. Override at your own risk. */
  innerRef?: React.MutableRefObject<any>;
  /** The ref name to use when creating a reference for the wrapped component. Defaults to "ref" */
  refName?: string;
}

const Tab = React.forwardRef(
  (
    {
      isSelected,
      children,
      className,
      firstChild,
      lastChild,
      underscoreHeight,
      spacingBetween,
      innerRef,
      refName = "ref",
      ...otherTabProps
    }: IProps,
    ref
  ) => {
    const tabProps: ITabProps = {
      role: "tab",
      "aria-selected": isSelected ? "true" : "false",
      [refName]: innerRef,
      ...otherTabProps
    };

    return (
      <darkModeContext.Consumer>
        {darkMode => {
          const spacingBetweenIntermediate = spacingBetween || darkMode ? "md" : "lg";
          const padding = `left ${firstChild ? 0 : spacingBetweenIntermediate} right ${
            lastChild ? 0 : spacingBetweenIntermediate
          }`;
          return (
            <FlexLI
              innerRef={ref}
              role="presentation"
              tabIndex={-1}
              padding={padding}
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
              {isSelected && (
                <UnderscoreDiv
                  underscoreHeight={underscoreHeight}
                  firstChild={firstChild}
                  lastChild={lastChild}
                  darkMode={darkMode}
                  spacingBetween={spacingBetweenIntermediate}
                />
              )}
            </FlexLI>
          );
        }}
      </darkModeContext.Consumer>
    );
  }
);

export default Tab;
