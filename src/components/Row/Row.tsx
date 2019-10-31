import React from "react";
import { cx } from "emotion";
import { Flex } from "../../primitives/elements";

export interface IProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Useful setting to make the contents row/column aligned (flex-direction) */
  flexDirection?: "column" | "row";
  /** Useful setting alignment */
  flexAlignment?: string;
}

export const Row: React.FC<IProps> = props => {
  const { className, flexDirection, flexAlignment, ...otherProps } = props;

  return (
    <Flex
      direction={flexDirection}
      alignment={flexAlignment}
      className={cx(className, "bx--row")}
      {...otherProps}
    />
  );
};

export default Row;
