import React from "react";
import { ISharedElementProps, makeBaseElement } from "./elements";

export const Body = makeBaseElement("div", ["cap--type-body"]);
export const SpecialtyBody = makeBaseElement("div", ["cap--type-specialty-body"]);
export const Label = makeBaseElement("div", ["cap--type-label"]);
export const Input = makeBaseElement("div", ["cap--type-input"]);
export const Large = makeBaseElement("div", ["cap--type-large"]);
export const DataVizLabel = makeBaseElement("div", ["cap--type-data-viz--label"]);

/* This code is duplicated in scss. */
export const prebuiltFontStyles = {
  alpha: `
    font-size: 2rem;
    line-height: 2.5rem;
    font-weight: 600;
  `,
  beta: `
    font-size: 1.5rem;
    line-height: 2rem;
    font-weight: 600;
  `,
  gamma: `
    font-size: 1.25rem;
    line-height: 1.5rem;
    font-weight: 600;
  `,
  delta: `
    font-size: 1rem;
    line-height: 1.25rem;
    font-weight: 600;
  `,
  epsilon: `
    font-size: 0.875rem;
    line-height: 1.25rem;
    font-weight: 600;
  `,
  body: `
    font-size: 0.875rem;
    line-height: 1.25rem;
    font-weight: 400;
  `,
  specialtyBody: `
    font-size: 1rem;
    line-height: 1.25rem;
    font-weight: 400;
  `,
  label: `
    font-size: 0.75rem;
    line-height: 1rem;
    font-weight: 600;
  `,
  input: `
    font-size: 0.875rem;
    line-height: 1rem;
    font-weight: 400;
  `,
  large: `
    font-size: 3.375rem;
    line-height: 4.25rem;
    font-weight: 400;
  `,
  dataVizLabel: `
    font-size: 0.75rem;
    line-height: 0.875rem;
    font-weight: 400;
  `
};

const headerToClassName = {
  "1": "alpha",
  "2": "beta",
  "3": "gamma",
  "4": "delta",
  "5": "epsilon",
  "6": "zeta"
};

export const Heading = ({
  level,
  ...otherProps
}: {
  level: "1" | "2" | "3" | "4" | "5" | "6";
} & ISharedElementProps &
  React.HTMLAttributes<HTMLHeadingElement>) => {
  const Element = makeBaseElement(`h${level}`, [`cap--type-${headerToClassName[level]}`]);
  return React.createElement(Element, otherProps);
};
