import React from "react";
import styled from "react-emotion";
import { css, cx } from "emotion";
import { buildSpacingFromString } from "../layout/spacing";

export const buildAlignment = (direction, alignment) => {
  const values = alignment.split(" ");
  if (values.length === 1) {
    return `justify-content: ${values[0]}; align-items: ${values[0]}`;
  } else if (values.length === 2) {
    const alignmentProperty = direction === "row" ? "align-items" : "justify-content";
    const inverseAlignmentProperty =
      alignmentProperty === "align-items" ? "justify-content" : "align-items";
    if (values[0] === "horizontal") {
      return `${inverseAlignmentProperty}: ${values[1]}`;
    } else if (values[0] === "vertical") {
      return `${alignmentProperty}: ${values[1]}`;
    }
    return `${alignmentProperty}: ${values[0]}; ${inverseAlignmentProperty}: ${values[1]}`;
  }
  throw new Error("Invalid alignment provided.");
};

export type SharedElementProps = {
  padding?: string;
  margin?: string;
};

const buildSpacingStyles = ({ padding, margin }: SharedElementProps) => {
  const paddingStr = buildSpacingFromString(padding);
  const marginStr = buildSpacingFromString(margin, "margin");
  if (paddingStr && marginStr) {
    return `${paddingStr}; ${marginStr}`;
  }
  return paddingStr || marginStr;
};

// Basic flex dentered box.
export const CenteredBlock = styled("div")<SharedElementProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  ${buildSpacingStyles};
`;

export const Block = styled("div")<SharedElementProps>`
  ${buildSpacingStyles};
`;

export const Inline = styled("span")<SharedElementProps>`
  ${buildSpacingStyles};
`;

export const InlineBlock = styled("span")<SharedElementProps>`
  display: inline-block;
  ${buildSpacingStyles};
`;

export const Flex = styled("div")<
  {
    direction?: "column" | "row";
    alignment?: string;
  } & SharedElementProps
>`
  display: flex;
  flex-direction: ${({ direction }) => direction || "row"};
  ${buildSpacingStyles};
  ${({ direction, alignment }) => alignment && buildAlignment(direction || "row", alignment)};
`;

const SeperatorWrapper = styled("div")`
  position: relative;
`;

const SeperatorInternal = styled("div")<{ inverse?: boolean; fullWidth?: boolean }>`
  background-color: ${({ inverse, theme }) => (inverse ? theme.color.ui01 : theme.color.ui04)};
  height: 1px;
  ${({ fullWidth }) => fullWidth && `position: absolute; width: 120vw; left: -10%;`};
`;

// Seperator is a nested element so we can support a 'fullwidth' line, meaning it
// ignores padding and always crosses
export const Seperator = ({
  inverse,
  fullWidth,
  padding = "md 0",
  className,
  hideBar,
  withinGrid
}: {
  inverse?: boolean;
  fullWidth?: boolean;
  padding?: string;
  className?: string;
  hideBar?: boolean;
  withinGrid?: boolean;
}) => (
  <SeperatorWrapper
    className={cx(className, css(buildSpacingFromString(padding)), {
      "cap-padding--horizontal": withinGrid
    })}
  >
    {!hideBar && <SeperatorInternal inverse={inverse} fullWidth={fullWidth} />}
  </SeperatorWrapper>
);

const VerticalSeperatorInternal = styled("div")<{ inverse?: boolean }>`
  background-color: ${({ inverse, theme }) => (inverse ? theme.color.ui01 : theme.color.ui04)};
  width: 1px;
  position: absolute;
  top: 0;
  bottom: 0;
`;

// Require's parent element to have position relative
// adjust top/bottom of internal element to add top/bottom padding
// TODO: parse padding to convert it into top/bottom adjustments.
export const VerticalSeperator = ({
  inverse,
  padding = "md 0",
  className
}: {
  inverse?: boolean;
  padding?: string;
  className?: string;
}) => (
  <div className={cx(className, css(buildSpacingFromString(padding), css("position: relative;")))}>
    <VerticalSeperatorInternal inverse={inverse} />
  </div>
);
