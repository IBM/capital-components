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

// any => Escape typing until emotion updates to using new context api that supports typing.
const SVGContainer = ({ className, onClick, size, children }: any) => {
  const iconSize = sizeToREM[size];
  const iconHeight = css`
    height: ${iconSize}rem;
    min-height: ${iconSize}rem;
    width: ${iconSize}rem;
    min-width: ${iconSize}rem;
  `; // Use min-height/max-height for IE issue with svg sizing.

  const fill = css`
    ${iconHeight} > * {
      flex: 1 1 auto;
    }
  `;

  return (
    <CenteredBlock className={cx(className, fill)} onClick={onClick}>
      {children}
    </CenteredBlock>
  );
};

export const Icon: React.SFC<IProps> = ({ size, title, className, glyph, children, onClick }) => (
  <SVGContainer size={size} className={className} onClick={onClick}>
    {glyph && (
      <svg aria-label={title} viewBox={glyph.viewBox}>
        <title>{title}</title>
        <use xlinkHref={`#${glyph.id}`} />
      </svg>
    )}
    {children}
  </SVGContainer>
);

export default Icon;
