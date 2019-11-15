import { css, cx } from "emotion";
import React from "react";
import { mqStringsMax, useIsMobile } from "../../layout/mediaQueries";
import { Flex } from "../../primitives/elements";
import Row from "../Row/Row";

export const scrollRowContainerClass = css`
  overflow-x: auto;
  overflow-y: hidden;
  padding-bottom: 0.75rem;

  > *:first-child {
    ${mqStringsMax.md(`
      padding-left: 2rem;
    `)};
  }

  > *:last-child {
    ${mqStringsMax.md(`
      padding-right: 2rem;
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
  className?: string;
}> = ({
  maxWidth = "40vw",
  minWidth = "40vw",
  children,
  className,
  preventShrink,
  scrollClassName
}) => {
  const isMobile = useIsMobile();

  if (!isMobile) {
    return <Row className={className}>{children}</Row>;
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
    <Row
      className={cx(
        css`
          padding-left: 0;
          padding-right: 0;
          margin-right: 0;
          margin-left: 0;
        `,
        className
      )}
    >
      <Flex
        direction="row"
        className={cx(scrollRowContainerClass, scrollClassName, minMaxWidth, {
          [preventShrinkClass]: preventShrink
        })}
      >
        {children}
      </Flex>
    </Row>
  );
};

export default ScrollRow;
