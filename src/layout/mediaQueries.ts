import { css } from "emotion";

// breakpoints as defined in css-gridish.json file.
// We aren't importing it because we don't want to make assumptions
// about what the client can parse. Keep it to js output.
const breakpoints = {
  // Numerical values will result in a min-width query
  xs: 576,
  s: 768,
  m: 992,
  l: 1200,
  xl: 1600
};

/** MQ object supports quick media query aware emotion syntax: https://emotion.sh/docs/media-queries */
export const mq = Object.keys(breakpoints).reduce((accumulator, label) => {
  let prefix = typeof breakpoints[label] === "string" ? "" : "min-width:";
  let suffix = typeof breakpoints[label] === "string" ? "" : "px";
  accumulator[label] = cls =>
    css`
      @media (${prefix + breakpoints[label] + suffix}) {
        ${cls};
      }
    `;
  return accumulator;
}, {});
