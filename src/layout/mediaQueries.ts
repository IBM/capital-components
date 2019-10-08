import { css } from "emotion";
import { Omit } from "type-zoo";
import { useMedia } from "react-use";
import { breakpoints as carbonBreakpoints, baseFontSize } from "@carbon/elements";

import { CSSObject } from "create-emotion";

export interface IBreakPointDescriptor<A> {
  base?: A;
  sm?: A;
  md?: A;
  lg?: A;
  xlg?: A;
  max?: A;
}

export const smallestBreakpoint = "sm" as const;

// breakpoints as defined in css-gridish.json file.
// We aren't importing it because we don't want to make assumptions
// about what the client can parse. Keep it to js output.
export const breakpoints: Required<IBreakPointDescriptor<number>> = {
  ...Object.keys(carbonBreakpoints).reduce((acc, key) => {
    acc[key] = parseInt(carbonBreakpoints[key].width.replace("rem", ""), 10) * baseFontSize;
    return acc;
  }, {}),
  base: 0
} as any;

export type MqDescriptor = Required<
  IBreakPointDescriptor<(arg: string | CSSObject) => string | CSSObject>
>;

/**
 * MQ object supports quick media query aware emotion syntax: https://emotion.sh/docs/media-queries
 * It generates the CSS string to be used within other other emotion css strings. Note
 * that the size (m, s, l, etc) indicates the min-width that the css will apply.
 */
export const mqStrings = Object.keys(breakpoints).reduce(
  (accumulator, label) => {
    accumulator[label] = (cls: string | CSSObject) => {
      if (typeof cls === "string") {
        return `
          @media (min-width:${breakpoints[label]}px) {
            ${cls}${cls.endsWith(";") ? "" : ";"}
          }
        `;
      } else {
        return {
          [`@media (min-width:${breakpoints[label]}px)`]: cls
        };
      }
    };
    return accumulator;
  },
  {} as MqDescriptor
);

/**
 * MQ object supports quick media query aware emotion syntax: https://emotion.sh/docs/media-queries
 * It generates the CSS string to be used within other other emotion css strings. Note
 * that the size (m, s, l, etc) indicates the max-width that the css will apply.
 */
export const mqStringsMax = Object.keys(breakpoints).reduce(
  (accumulator, label) => {
    // base doesn't make sense for max-widths, since base is 0
    if (label === "base") {
      return accumulator;
    }
    accumulator[label] = (cls: string | CSSObject) => {
      if (typeof cls === "string") {
        return `
          @media (max-width:${breakpoints[label] - 1}px) {
            ${cls}${cls.endsWith(";") ? "" : ";"}
          }
        `;
      } else {
        return {
          [`@media (max-width:${breakpoints[label] - 1}px)`]: cls
        };
      }
    };
    return accumulator;
  },
  {} as Omit<MqDescriptor, "base">
);

/**
 * A helper function used to build a string (to be used in emotion) that
 * reflects particular settings for media queries.
 */
export const buildStringForMediaQueries = (
  desc: string | IBreakPointDescriptor<string> | undefined,
  predicate: (arg: string) => string
) => {
  if (!desc) {
    return null;
  }

  if (typeof desc === "string") {
    return predicate(desc);
  }
  const mediaQueries = Object.keys(desc).map(key => mqStrings[key](predicate(desc[key])));
  return mediaQueries.join("\n");
};

/**
 * MQ object supports quick media query aware emotion syntax: https://emotion.sh/docs/media-queries
 * It generates actual classnames, as opposed to mqStrings which generates the CSS string. Note
 * that the size (m, s, l, etc) indicates the min-width that the css will apply.
 */
export const mq = Object.keys(mqStrings).reduce(
  (accumulator, label) => {
    accumulator[label] = cls => css(mqStrings[label](cls));
    return accumulator;
  },
  {} as MqDescriptor
);

/**
 * MQ object supports quick media query aware emotion syntax: https://emotion.sh/docs/media-queries
 * It generates actual classnames, as opposed to mqStrings which generates the CSS string. Note
 * that the size (m, s, l, etc) indicates the max-width that the css will apply.
 */
export const mqMax = Object.keys(mqStrings).reduce(
  (accumulator, label) => {
    accumulator[label] = cls => css(mqStringsMax[label](cls));
    return accumulator;
  },
  {} as MqDescriptor
);
/**
 * A hook useful to detect if page is viewed on a mobile size screen (small)
 */
export function useIsMobile(max: keyof typeof breakpoints = "sm") {
  const isMobileQuery = `(max-width: ${breakpoints[max] - 1}px)`;
  return useMedia(isMobileQuery, false);
}
