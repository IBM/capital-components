import { css, cx } from "emotion";
import React from "react";
import Media from "react-media";
import { breakpoints, mqStringsMax } from "../../layout/mediaQueries";
import { Flex } from "../../primitives/elements";

export const scrollRowContainerClass = css`
  overflow-x: auto;
  overflow-y: hidden;
  padding-bottom: 0.75rem;
  > * {
    padding-left: 0.5rem;
    padding-right: 0.5rem;
  }
  > *:first-child {
    ${mqStringsMax.s(`
      padding-left: 0
    `)};
  }
`;

/**
 * This component is useful for grouping items, usually columns, into a single
 * row IFF the screen width is determined to be mobile. If it is not mobile layout,
 * this component is trasparent.
 */
export const ScrollRow: React.SFC<{
  maxWidth?: string;
  minWidth?: string;
  preventShrink?: boolean;
  /** An additional classname to apply when scrolling is triggered */
  scrollClassName?: string;
}> = ({ maxWidth = "40vw", minWidth = "40vw", children, preventShrink, scrollClassName }) => (
  <Media query={{ minWidth: breakpoints.s + 1 }}>
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
          className={cx(scrollRowContainerClass, scrollClassName, minMaxWidth, {
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
