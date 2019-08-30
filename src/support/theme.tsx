import {
  OptionalThemeProps,
  ThemeProvider as eThemeProvider,
  ThemeProviderComponent,
  withTheme as eWithTheme
} from "emotion-theming";
import React, { ComponentType } from "react";
import emotion, { CreateStyled } from "react-emotion";
import createTheme from "./createTheme";

export type Theme = ReturnType<typeof createTheme>;

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

// Can't default to shared theme because it will create a circular dependency
export const themeContext = React.createContext<Theme>(null);

const InnerThemeProvider = module.withTheme(({ theme, ...otherProps }) => (
  <>
    <themeContext.Provider {...otherProps} value={theme} />
  </>
));
// We wrap the theme provider with another context so can use react's native context object
// along with emotions withTheme. This can go away once we upgrade to emotion 10.
export const ThemeProvider: React.SFC<{ theme: Theme }> = ({ theme, ...otherProps }) => (
  <module.ThemeProvider theme={theme}>
    <InnerThemeProvider {...otherProps} />
  </module.ThemeProvider>
);
// export const ThemeProvider = module.ThemeProvider;
export const withTheme = module.withTheme;
