import React, { FC } from "react";
import { cx } from "emotion";

const Row: FC<React.HTMLAttributes<HTMLDivElement>> = ({ className, ...otherProps }) => (
  <div className={cx("bx--row", className)} {...otherProps} />
);

export default Row;
