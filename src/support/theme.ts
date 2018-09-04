import emotion, { CreateStyled } from "react-emotion";
import {
  ThemeProvider as eThemeProvider,
  withTheme as eWithTheme,
  OptionalThemeProps,
  ThemeProviderComponent
} from "emotion-theming";
import React, { ComponentType } from "react";
import { spacing, layout } from "../layout/spacing";
import { layers } from "../layout/layers";

export type Theme = {
  color: {
    brand01: string;
    brand02: string;
    brand03: string;
    ui01: string;
    ui02: string;
    ui03: string;
    ui04: string;
    ui05: string;
    text01: string;
    text02: string;
    text03: string;
    inverse01: string;
    field01: string;
    support01: string;
    support02: string;
    support03: string;
    support04: string;
    nav01: string;
    nav02: string;
  };
  spacing: {
    spacing: typeof spacing;
    layout: typeof layout;
  };
  layers: typeof layers;
  fonts: {
    weights: {
      thin: number;
      regular: number;
      bold: number;
    };
  };
};

export type ThemeModule = EmotionThemingModule<Theme>;

export const styled = emotion as CreateStyled<Theme>;

interface EmotionThemingModule<Theme> {
  ThemeProvider: ThemeProviderComponent<Theme>;
  withTheme<Props>(
    component: ComponentType<OptionalThemeProps<Props, Theme>>
  ): ComponentType<Props>;
}

const module = {
  ThemeProvider: eThemeProvider,
  withTheme: eWithTheme
} as ThemeModule;

export const ThemeProvider = module.ThemeProvider;
export const withTheme = module.withTheme;
