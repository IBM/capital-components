import { ThemeProvider } from "../src/support/theme";
import theme from "../src/support/themes/other-products";
import { render } from "@testing-library/react";
import React from "react";
import MatchMediaMock from "match-media-mock";

export function renderWithDefaultTheme(ui: React.ReactNode) {
  return render(<ThemeProvider theme={theme}>{ui}</ThemeProvider>);
}

const presets = {
  phone: {
    type: "screen",
    width: 375
  },
  tablet: {
    type: "screen",
    width: 768
  },
  "tablet-portrait": {
    type: "screen",
    width: 1078
  },
  monitor: {
    type: "screen",
    width: 1440
  }
};

export function mockScreenSize(size: keyof typeof presets) {
  const mock = MatchMediaMock.create();
  mock.setConfig(presets[size]);
  window.matchMedia = jest.fn().mockImplementation(mock);
}
