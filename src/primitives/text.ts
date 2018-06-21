import { buildSpacingFromString } from "../layout/spacing";
import { cx, css } from "emotion";
import React from "react";

const makeStyledComponentWithClass = <T = HTMLDivElement>(
  c: string,
  elementType: string = "div"
) => ({
  padding,
  className,
  ...otherProps
}: {
  padding?: string;
} & React.HTMLAttributes<T>) => {
  const cls = cx(className, css(buildSpacingFromString(padding)), c);
  return React.createElement(elementType, {
    ...otherProps,
    className: cls
  });
};

export const Body = makeStyledComponentWithClass("cap--type-body");
export const SpecialtyBody = makeStyledComponentWithClass("cap--type-specialty-body");
export const Label = makeStyledComponentWithClass("cap--type-label");
export const Input = makeStyledComponentWithClass("cap--type-input");
export const Large = makeStyledComponentWithClass("cap--type-large");
export const DataVizLabel = makeStyledComponentWithClass("cap--type-data-viz--label");

const headerToClassName = {
  "1": "alpha",
  "2": "beta",
  "3": "gamma",
  "4": "delta",
  "5": "epsilon"
};

export const Heading = ({
  level,
  padding,
  className,
  ...otherProps
}: {
  level: "1" | "2" | "3" | "4" | "5";
  padding?: string;
} & React.HTMLAttributes<HTMLHeadingElement>) => {
  const cls = cx(
    className,
    css(buildSpacingFromString(padding)),
    `cap--type-${headerToClassName[level]}`
  );
  return React.createElement(`h${level}`, {
    ...otherProps,
    className: cls
  });
};
