import emotion, { CreateStyled } from "react-emotion";
import {
  ThemeProvider as eThemeProvider,
  withTheme as eWithTheme,
  OptionalThemeProps,
  ThemeProviderComponent
} from "emotion-theming";
import React, { ComponentType } from "react";
import sharedTheme from "./themes/shared";

export type Theme = typeof sharedTheme;

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
