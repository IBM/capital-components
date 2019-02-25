import { css, cx } from "emotion";
import React, { ComponentPropsWithoutRef } from "react";
import { Omit } from "type-zoo";
import { CenteredBlock } from "../../primitives/elements";

export type Props = ComponentPropsWithoutRef<typeof CenteredBlock> & {
  size: "xsmall" | "small" | "medium" | "large" | "xlarge" | "xxxlarge";
  title: string;
  glyph?: {
    id: string;
    viewBox: string;
  };
  circleColor?: string;
  color?: string;
};

export const sizeToREM = {
  xsmall: 0.5,
  small: 1,
  medium: 1.5,
  large: 2,
  xlarge: 2.5,
  xxxlarge: 10
};

type ContainerProps = Omit<Props, "title" | "glyph">;

// any => Escape typing until emotion updates to using new context api that supports typing.
const SVGContainer = React.forwardRef<HTMLDivElement, ContainerProps>(
  ({ className, onClick, size, children, circleColor, color }, ref) => {
    const iconSize = sizeToREM[size];

    const fill = css`
      height: ${iconSize}rem;
      min-height: ${iconSize}rem;
      width: ${iconSize}rem;
      min-width: ${iconSize}rem;
      position: relative;
      fill: ${color};
      color: ${color};
      > * {
        flex: 1 1 auto;
      }
    `;
    const circleStyle = cx(
      css`
        background-color: ${circleColor};
        border-radius: 50%;
        > * {
          margin: 0.25rem;
        }
      `,
      "icon-circle" // This is getting around an issue that should be resolved with emotion 10
    );
    return (
      <CenteredBlock
        className={cx(className, fill, "icon", {
          [circleStyle]: circleColor
        })}
        onClick={onClick}
        innerRef={ref}
      >
        {children}
      </CenteredBlock>
    );
  }
);

// We do this workaround (type casting) so doc generation can pick out these props
export const Icon: React.SFC<Props & { ref?: React.Ref<HTMLDivElement> }> = React.forwardRef<
  HTMLDivElement,
  Props
>(({ size, title, glyph, children, ...props }, ref) => (
  <SVGContainer size={size} {...props} ref={ref}>
    {glyph && (
      <svg aria-label={title} viewBox={glyph.viewBox}>
        <title>{title}</title>
        <use xlinkHref={`#${glyph.id}`} />
      </svg>
    )}
    {children}
  </SVGContainer>
)) as any;

export default Icon;
