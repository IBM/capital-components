// based on http://carbondesignsystem.com/style/spacing
import { buildStringForMediaQueries, IBreakPointDescriptor } from "./mediaQueries";
import { spacing as elementSpacing } from "@carbon/elements";

// Use for margins within grid elements
export const spacing = {
  /** 2px - Deprecated */
  "3xs": elementSpacing[0],
  /** 2px */
  xs3: elementSpacing[0],
  /** 4px - Deprecated */
  "2xs": elementSpacing[1],
  /** 4px */
  xs2: elementSpacing[1],
  /** 8px */
  xs: elementSpacing[2],
  /** 12px */
  sm: elementSpacing[3],
  /** 16px */
  md: elementSpacing[4],
  /** 24px */
  lg: elementSpacing[5],
  /** 32px */
  xl: elementSpacing[6],
  /** 40px - Deprecated */
  "2xl": elementSpacing[7],
  /** 40px */
  xl2: elementSpacing[7],
  /** 48px - Deprecated */
  "3xl": elementSpacing[8],
  /** 48px */
  xl3: elementSpacing[8],
  /** 64px */
  xl4: elementSpacing[9],
  /** 80px */
  xl5: elementSpacing[10],
  /** 96px */
  xl6: elementSpacing[11]
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
