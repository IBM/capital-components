import { css, cx } from "emotion";
import React from "react";
import Media from "react-media";
import { breakpoints } from "../../layout/mediaQueries";
import { Flex } from "../../primitives/elements";

export const scrollRowContainerClass = css`
  overflow-x: auto;
  overflow-y: hidden;
`;

export const ScrollRow: React.SFC<{
  maxWidth?: string;
  minWidth?: string;
  preventShrink?: boolean;
}> = ({ maxWidth = "12rem", minWidth = "6rem", children, preventShrink }) => (
  <Media query={{ minWidth: breakpoints.s }}>
    {matches => {
      if (matches) {
        return <React.Fragment>{children}</React.Fragment>;
      }
      const minMaxWidth = css`
        > * {
          width: auto;
          max-width: ${maxWidth};
          min-width: ${minWidth};
        }
      `;
      const preventShrinkClass = css`
        > * {
          flex-shrink: 0;
        }
      `;
      return (
        <Flex
          direction="row"
          className={cx(scrollRowContainerClass, minMaxWidth, {
            [preventShrinkClass]: preventShrink
          })}
        >
          {children}
        </Flex>
      );
    }}
  </Media>
);

export default ScrollRow;
