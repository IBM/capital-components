// based on http://carbondesignsystem.com/style/spacing
import { buildStringForMediaQueries, IBreakPointDescriptor } from "./mediaQueries";

// Use for margins within grid elements
// 3xs = xs3 and similar for the sake of consistent naming
export const spacing = {
  /** 2px */
  "3xs": "0.125rem",
  /** 2px */
  xs3: "0.125rem",
  /** 4px */
  "2xs": "0.25rem",
  /** 4px */
  xs2: "0.25rem",
  /** 8px */
  xs: "0.5rem",
  /** 12px */
  sm: "0.75rem",
  /** 16px */
  md: "1rem",
  /** 24px */
  lg: "1.5rem",
  /** 32px */
  xl: "2rem",
  /** 40px */
  "2xl": "2.5rem",
  /** 40px */
  xl2: "2.5rem",
  /** 48px */
  "3xl": "3rem",
  /** 48px */
  xl3: "3rem"
};

// Use for vertical layout. For horizontal layout, always use grid elements
export const layout = {
  /** 16px */
  "2xs": "1rem",
  /** 16px */
  xs2: "1rem",
  /** 24px */
  xs: "1.5rem",
  /** 32px */
  sm: "2rem",
  /** 48px */
  md: "3rem",
  /** 64px */
  lg: "4rem",
  /** 96px */
  xl: "6rem",
  /** 160px */
  "2xl": "10rem",
  /** 160px */
  xl2: "10rem"
};

export const getSpacingOrDefault = value => spacing[value] || value;

export const buildSpacing = (
  padding?: string | IBreakPointDescriptor<string>,
  type: "padding" | "margin" = "padding"
) => {
  return buildStringForMediaQueries(padding, pad => buildSpacingFromString(pad, type));
};

export const buildSpacingFromString = (
  padding?: string,
  type: "padding" | "margin" = "padding"
) => {
  if (!padding) {
    return null;
  }

  const values = padding.trim().split(" ");
  if (values.length === 1) {
    return `${type}: ${getSpacingOrDefault(values[0])};`;
  } else if (values.length % 2 === 0 && ["top", "right", "bottom", "left"].includes(values[0])) {
    const resultArr: string[] = [];
    for (let i = 0; i < values.length; i += 2) {
      resultArr.push(`${type}-${values[i]}: ${getSpacingOrDefault(values[i + 1])};`);
    }
    return resultArr.join(" ");
  } else {
    return `${type}: ${values.map(getSpacingOrDefault).join(" ")};`;
  }
};
