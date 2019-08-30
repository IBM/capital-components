import { makeBaseElement } from "./elements";
import { styled } from "../support/theme";
import { styles as carbonStyles } from "@carbon/elements";
import { CSSObject } from "create-emotion";

export const prebuiltFontStyles: {
  caption01: CSSObject;
  label01: CSSObject;
  helperText01: CSSObject;
  bodyShort01: CSSObject;
  bodyLong01: CSSObject;
  bodyShort02: CSSObject;
  bodyLong02: CSSObject;
  code01: CSSObject;
  code02: CSSObject;
  heading01: CSSObject;
  productiveHeading01: CSSObject;
  heading02: CSSObject;
  productiveHeading02: CSSObject;
  productiveHeading03: CSSObject;
  productiveHeading04: CSSObject;
  productiveHeading05: CSSObject;
  productiveHeading06: CSSObject;
  productiveHeading07: CSSObject;
  expressiveHeading01: CSSObject;
  expressiveHeading02: CSSObject;
  expressiveHeading03: CSSObject;
  expressiveHeading04: CSSObject;
  expressiveHeading05: CSSObject;
  expressiveHeading06: CSSObject;
  expressiveParagraph01: CSSObject;
  quotation01: CSSObject;
  quotation02: CSSObject;
  display01: CSSObject;
  display02: CSSObject;
  display03: CSSObject;
  display04: CSSObject;
} = carbonStyles;

export const Caption01 = makeBaseElement(styled.div(prebuiltFontStyles.caption01));
export const Label01 = makeBaseElement(styled.div(prebuiltFontStyles.label01));
export const HelperText01 = makeBaseElement(styled.div(prebuiltFontStyles.helperText01));
export const BodyShort01 = makeBaseElement(styled.div(prebuiltFontStyles.bodyShort01));
export const BodyLong01 = makeBaseElement(styled.div(prebuiltFontStyles.bodyLong01));
export const BodyShort02 = makeBaseElement(styled.div(prebuiltFontStyles.bodyShort02));
export const BodyLong02 = makeBaseElement(styled.div(prebuiltFontStyles.bodyLong02));
export const Code01 = makeBaseElement(styled.div(prebuiltFontStyles.code01));
export const Code02 = makeBaseElement(styled.div(prebuiltFontStyles.code02));
export const Heading01 = makeBaseElement(styled.div(prebuiltFontStyles.heading01));
export const ProductiveHeading01 = makeBaseElement(
  styled.div(prebuiltFontStyles.productiveHeading01)
);
export const Heading02 = makeBaseElement(styled.div(prebuiltFontStyles.heading02));
export const ProductiveHeading02 = makeBaseElement(
  styled.div(prebuiltFontStyles.productiveHeading02)
);
export const ProductiveHeading03 = makeBaseElement(
  styled.div(prebuiltFontStyles.productiveHeading03)
);
export const ProductiveHeading04 = makeBaseElement(
  styled.div(prebuiltFontStyles.productiveHeading04)
);
export const ProductiveHeading05 = makeBaseElement(
  styled.div(prebuiltFontStyles.productiveHeading05)
);
export const ProductiveHeading06 = makeBaseElement(
  styled.div(prebuiltFontStyles.productiveHeading06)
);
export const ProductiveHeading07 = makeBaseElement(
  styled.div(prebuiltFontStyles.productiveHeading07)
);
export const ExpressiveHeading01 = makeBaseElement(
  styled.div(prebuiltFontStyles.expressiveHeading01)
);
export const ExpressiveHeading02 = makeBaseElement(
  styled.div(prebuiltFontStyles.expressiveHeading02)
);
export const ExpressiveHeading03 = makeBaseElement(
  styled.div(prebuiltFontStyles.expressiveHeading03)
);
export const ExpressiveHeading04 = makeBaseElement(
  styled.div(prebuiltFontStyles.expressiveHeading04)
);
export const ExpressiveHeading05 = makeBaseElement(
  styled.div(prebuiltFontStyles.expressiveHeading05)
);
export const ExpressiveHeading06 = makeBaseElement(
  styled.div(prebuiltFontStyles.expressiveHeading06)
);
export const ExpressiveParagraph01 = makeBaseElement(
  styled.div(prebuiltFontStyles.expressiveParagraph01)
);
export const Quotation01 = makeBaseElement(styled.div(prebuiltFontStyles.quotation01));
export const Quotation02 = makeBaseElement(styled.div(prebuiltFontStyles.quotation02));
export const Display01 = makeBaseElement(styled.div(prebuiltFontStyles.display01));
export const Display02 = makeBaseElement(styled.div(prebuiltFontStyles.display02));
export const Display03 = makeBaseElement(styled.div(prebuiltFontStyles.display03));
export const Display04 = makeBaseElement(styled.div(prebuiltFontStyles.display04));

// // export const Body = makeBaseElement("div", ["cap--type-body"]);
// // export const SpecialtyBody = makeBaseElement("div", ["cap--type-specialty-body"]);
// // export const Label = makeBaseElement("div", ["cap--type-label"]);
// // export const Input = makeBaseElement("div", ["cap--type-input"]);
// // export const Large = makeBaseElement("div", ["cap--type-large"]);
// // export const DataVizLabel = makeBaseElement("div", ["cap--type-data-viz--label"]);

// /* This code is duplicated in scss. */
// export const prebuiltFontStyles = {
//   alpha: `
//     font-size: 2rem;
//     line-height: 2.5rem;
//     font-weight: 600;
//   `,
//   beta: `
//     font-size: 1.5rem;
//     line-height: 2rem;
//     font-weight: 600;
//   `,
//   gamma: `
//     font-size: 1.25rem;
//     line-height: 1.5rem;
//     font-weight: 600;
//   `,
//   delta: `
//     font-size: 1rem;
//     line-height: 1.25rem;
//     font-weight: 600;
//   `,
//   epsilon: `
//     font-size: 0.875rem;
//     line-height: 1.25rem;
//     font-weight: 600;
//   `,
//   body: `
//     font-size: 0.875rem;
//     line-height: 1.25rem;
//     font-weight: 400;
//   `,
//   specialtyBody: `
//     font-size: 1rem;
//     line-height: 1.25rem;
//     font-weight: 400;
//   `,
//   label: `
//     font-size: 0.75rem;
//     line-height: 1rem;
//     font-weight: 600;
//   `,
//   input: `
//     font-size: 0.875rem;
//     line-height: 1rem;
//     font-weight: 400;
//   `,
//   large: `
//     font-size: 3.375rem;
//     line-height: 4.25rem;
//     font-weight: 400;
//   `,
//   dataVizLabel: `
//     font-size: 0.75rem;
//     line-height: 0.875rem;
//     font-weight: 400;
//   `
// };

// const headerToClassName = {
//   "1": "alpha",
//   "2": "beta",
//   "3": "gamma",
//   "4": "delta",
//   "5": "epsilon",
//   "6": "zeta"
// };

// export const Heading = ({
//   level,
//   ...otherProps
// }: {
//   level: "1" | "2" | "3" | "4" | "5" | "6";
// } & ISharedElementProps &
//   React.HTMLAttributes<HTMLHeadingElement>) => {
//   const Element = makeBaseElement(`h${level}`, [`cap--type-${headerToClassName[level]}`]);
//   return React.createElement(Element, otherProps);
// };
