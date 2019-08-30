import { fontFamilies, fontWeights, scale } from "@carbon/elements";

// based on http://carbondesignsystem.com/style/typography/overview
export const sizes: number[] = scale;

export const weights: {
  light: number;
  normal: number;
  regular: number;
  ["semi-bold"]: number;
  semiBold: number;
} = {
  ...fontWeights,
  normal: fontWeights.regular,
  "semi-bold": fontWeights.semiBold
};

export const families: {
  mono: string;
  sans: string;
  sansCondensed: string;
  sansHebrew: string;
  serif: string;
} = fontFamilies;
