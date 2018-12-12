import { css } from "emotion";

export interface BreakPointDescriptor<A> {
  base?: A;
  xs?: A;
  s?: A;
  m?: A;
  l?: A;
  xl?: A;
}

// breakpoints as defined in css-gridish.json file.
// We aren't importing it because we don't want to make assumptions
// about what the client can parse. Keep it to js output.
export const breakpoints: Required<BreakPointDescriptor<number>> = {
  base: 0,
  // Numerical values will result in a min-width query
  xs: 576,
  s: 768,
  m: 992,
  l: 1200,
  xl: 1600
};

type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;

export type MqDescriptor = Required<BreakPointDescriptor<(arg: string) => string>>;

/** MQ object supports quick media query aware emotion syntax: https://emotion.sh/docs/media-queries
 * It generates the CSS string to be used within other other emotion css strings. Note
 * that the size (m, s, l, etc) indicates the min-width that the css will apply.
 */
export const mqStrings: MqDescriptor = Object.keys(breakpoints).reduce(
  (accumulator, label) => {
    accumulator[label] = cls =>
      `
      @media (min-width:${breakpoints[label]}px) {
        ${cls}${cls.endsWith(";") ? "" : ";"}
      }
    `;
    return accumulator;
  },
  {} as any
);

/** MQ object supports quick media query aware emotion syntax: https://emotion.sh/docs/media-queries
 * It generates the CSS string to be used within other other emotion css strings. Note
 * that the size (m, s, l, etc) indicates the max-width that the css will apply.
 */
export const mqStringsMax: Omit<MqDescriptor, "base"> = Object.keys(breakpoints).reduce(
  (accumulator, label) => {
    // base doesn't make sense for max-widths
    if (label === "base") {
      return accumulator;
    }
    accumulator[label] = cls =>
      `
      @media (max-width:${breakpoints[label]}px) {
        ${cls}${cls.endsWith(";") ? "" : ";"}
      }
    `;
    return accumulator;
  },
  {} as any
);

/** A helper function used to build a string (to be used in emotion) that
 * reflects particular settings for media queries.
 */
export const buildStringForMediaQueries = (
  desc: string | BreakPointDescriptor<string> | undefined,
  predicate: (arg: string) => string
) => {
  if (!desc) return null;

  if (typeof desc === "string") {
    return predicate(desc);
  }
  const mediaQueries = Object.keys(desc).map(key => mqStrings[key](predicate(desc[key])));
  return mediaQueries.join("\n");
};

/** MQ object supports quick media query aware emotion syntax: https://emotion.sh/docs/media-queries
 * It generates actual classnames, as opposed to mqStrings which generates the CSS string. Note
 * that the size (m, s, l, etc) indicates the min-width that the css will apply.
 */
export const mq: MqDescriptor = Object.keys(mqStrings).reduce(
  (accumulator, label) => {
    accumulator[label] = cls => css(mqStrings[label](cls));
    return accumulator;
  },
  {} as any
);

/** MQ object supports quick media query aware emotion syntax: https://emotion.sh/docs/media-queries
 * It generates actual classnames, as opposed to mqStrings which generates the CSS string. Note
 * that the size (m, s, l, etc) indicates the max-width that the css will apply.
 */
export const mqMax: MqDescriptor = Object.keys(mqStrings).reduce(
  (accumulator, label) => {
    accumulator[label] = cls => css(mqStringsMax[label](cls));
    return accumulator;
  },
  {} as any
);
