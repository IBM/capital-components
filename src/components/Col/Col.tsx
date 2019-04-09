import { css, cx } from "emotion";
import React from "react";
import {
  buildVerticalSpacing,
  createColClass as col,
  SupportedHeights,
  SupportedSizes
} from "../../layout/grid";
import { IBreakPointDescriptor } from "../../layout/mediaQueries";
import { Flex, VerticalSeperator } from "../../primitives/elements";
import { styled } from "../../support/theme";

export interface IProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * A fraction (1/12, 1/3, etc) to fit the column into the grid. Also can specify
   * it for specific breakpoint: { sm: "1/2", md: "1/3" }
   */
  size?: SupportedSizes;
  /** Row height of column entry, is multiplied by our row height preset (according to css-gridish.json - 0.5rem == 8px) */
  height?: SupportedHeights;
  /** Additional vertical padding. Format string to match spacing format. See README for details */
  verticalPadding?: string | IBreakPointDescriptor<string>;
  /** Additional vertical margin. Format string to match spacing format. See README for details */
  verticalMargin?: string | IBreakPointDescriptor<string>;
  /** Useful setting to make the contents row/column aligned (flex-direction) */
  flexDirection?: "column" | "row";
  /** Useful setting alignment */
  flexAlignment?: string;
  /**
   * If your column needs a separator from the rest of the columns. Currently we only support a right separator and a full screen version.
   * The fullscreen version will extend. For fullscreen right, the grid that it is contained in MUST be set to grow to the container
   * height (allowGrow prop)
   */
  separator?: "right" | "fullscreen right";
}

export const Col: React.SFC<IProps> = props => {
  const {
    size,
    height,
    verticalPadding,
    verticalMargin,
    className,
    flexDirection,
    flexAlignment,
    separator,
    ...otherProps
  } = props;

  if (separator) {
    return <VerticalSeparatedCol separator={separator} {...props} />;
  }

  return (
    <Flex
      direction={flexDirection || "column"}
      alignment={flexAlignment}
      className={cx(
        className,
        col({
          size,
          height
        }),
        css(buildVerticalSpacing(verticalPadding)),
        css(buildVerticalSpacing(verticalMargin, "margin"))
      )}
      {...otherProps}
    />
  );
};

const VerticalSeparatedCol: React.SFC<IProps & { separator?: "right" | "fullscreen right" }> = ({
  size,
  height,
  verticalPadding,
  verticalMargin,
  className,
  flexDirection,
  flexAlignment,
  separator,
  ...props
}) => (
  <Flex
    direction="row"
    alignment={separator !== undefined ? "horizontal space-between" : undefined}
    className={cx(
      col({
        size,
        height
      }),
      css(buildVerticalSpacing(verticalPadding)),
      css(buildVerticalSpacing(verticalMargin, "margin"))
    )}
  >
    <Flex direction={flexDirection} className={className} alignment={flexAlignment} {...props} />
    {separator === "right" && <VerticalSeperator padding="left 15px right 5px" />}
    {separator === "fullscreen right" && (
      <VerticalSeperator
        padding="left 15px right 5px"
        className={css`
          > * {
            min-height: 100000vh; /* unfortunately, safari currently needs this. Will need to investigate some other way of expanding this. */
            height: 100%;
          }
        `}
      />
    )}
  </Flex>
);

export default Col;
