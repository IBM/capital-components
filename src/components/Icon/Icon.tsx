import React from "react";
import { css, cx } from "emotion";
import { CenteredBlock } from "../../primitives/elements";

export interface IProps {
  size: "xsmall" | "small" | "medium" | "large" | "xlarge" | "xxxlarge";
  title: string;
  glyph?: {
    id: string;
    viewBox: string;
  };
  children?: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

export const sizeToREM = {
  xsmall: 0.5,
  small: 1,
  medium: 1.5,
  large: 2,
  xlarge: 2.5,
  xxxlarge: 10
};

type ContainerProps = Pick<IProps, "size" | "className" | "onClick" | "children">;

// any => Escape typing until emotion updates to using new context api that supports typing.
const SVGContainer = React.forwardRef<any, ContainerProps>(
  ({ className, onClick, size, children }, ref) => {
    const iconSize = sizeToREM[size];
    const iconHeight = css`
      height: ${iconSize}rem;
      min-height: ${iconSize}rem;
      width: ${iconSize}rem;
      min-width: ${iconSize}rem;
      position: relative;
    `; // Use min-height/max-height for IE issue with svg sizing.

    const fill = css`
      ${iconHeight} > * {
        flex: 1 1 auto;
      }
    `;
    return (
      <CenteredBlock className={cx(className, fill)} onClick={onClick} innerRef={ref}>
        {children}
      </CenteredBlock>
    );
  }
);

export const Icon: React.SFC<IProps & { ref?: React.Ref<any> }> = React.forwardRef<any, IProps>(
  ({ size, title, glyph, children, onClick, ...props }, ref) => (
    <SVGContainer size={size} {...props} onClick={onClick} ref={ref}>
      {glyph && (
        <svg aria-label={title} viewBox={glyph.viewBox}>
          <title>{title}</title>
          <use xlinkHref={`#${glyph.id}`} />
        </svg>
      )}
      {children}
    </SVGContainer>
  )
) as any;

export default Icon;
