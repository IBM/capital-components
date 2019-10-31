import React from "react";
import Media, { MediaProps } from "react-media";
import { breakpoints } from "../../layout/mediaQueries";
import { Overwrite } from "type-zoo/types";

type Props = Overwrite<
  MediaProps,
  {
    query?: MediaProps["query"];
    /**
     * The breakpoint defining the maxWidth of the media query.
     */
    max?: keyof typeof breakpoints;
  }
>;

export const Mobile = ({ max = "md", ...props }: Props) => (
  <Media query={{ maxWidth: breakpoints[max] - 1 }} {...props} />
);

export default Mobile;
