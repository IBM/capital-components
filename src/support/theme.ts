import {
  OptionalThemeProps,
  ThemeProvider as eThemeProvider,
  ThemeProviderComponent,
  withTheme as eWithTheme
} from "emotion-theming";
import React, { ComponentType } from "react";
import emotion, { CreateStyled } from "react-emotion";
import sharedTheme from "./themes/shared";

export type Theme = typeof sharedTheme;

export type ThemeModule = IEmotionThemingModule<Theme>;

export const styled = emotion as CreateStyled<Theme>;

interface IEmotionThemingModule<T> {
  ThemeProvider: ThemeProviderComponent<T>;
  withTheme<Props>(component: ComponentType<OptionalThemeProps<Props, T>>): ComponentType<Props>;
}

// tslint:disable-next-line:no-object-literal-type-assertion
const module = {
  ThemeProvider: eThemeProvider,
  withTheme: eWithTheme
} as ThemeModule;

export const ThemeProvider = module.ThemeProvider;
export const withTheme = module.withTheme;
