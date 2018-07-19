import React from "react";
import { withTheme } from "../../support/theme";
import { Block } from "../../primitives/elements";
import { css, cx } from "emotion";

export interface IProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Where to include a seperator */
  seperator?: "bottom" | "top";
}

export const DropMenuItem: React.SFC<IProps> = withTheme<IProps>(
  ({ seperator, theme, className, ...other }) => {
    const seperatorStyles = css`border-${seperator}: 2px solid ${theme.color.nav02};`;

    const onClickStyles = css`
      cursor: pointer;
      &:hover {
        background-color: ${theme.color.nav02};
      }
    `;
    return (
      <Block
        padding="lg"
        className={cx(className, {
          [seperatorStyles]: seperator,
          [onClickStyles]: !!other.onClick
        })}
        {...other}
      />
    );
  }
) as any;

export default DropMenuItem;
