import React from "react";
import { storiesOf } from "@storybook/react";
import {
  lightPalette,
  darkPalette,
  lightPaletteHighContrast
} from "@fss/components/lib/support/vizColors";
import { styled } from "@fss/components/lib/support/theme";
import { TinyColor } from "@ctrl/tinycolor";

const ColorSwatches = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
`;

const ColorSwatch = styled.div<{ color: string }>`
  background-color: ${({ color }) => color};
  display: inline-block;
  height: 60px;
  color: ${({ color }) => {
    const colorC = new TinyColor(color);
    return colorC.isDark() ? "white" : "black";
  }};
`;

const stories = storiesOf("Colors|Visualization", module);

stories.add("Light Color Palette", () => (
  <ColorSwatches>
    {lightPalette.map(color => (
      <ColorSwatch color={color}>{color}</ColorSwatch>
    ))}
  </ColorSwatches>
));

stories.add("Dark Color Palette", () => (
  <ColorSwatches>
    {darkPalette.map(color => (
      <ColorSwatch color={color}>{color}</ColorSwatch>
    ))}
  </ColorSwatches>
));

stories.add("Light Color Palette (high contrast)", () => (
  <ColorSwatches>
    {lightPaletteHighContrast.map(color => (
      <ColorSwatch color={color}>{!!color ? color : "Missing Color!"}</ColorSwatch>
    ))}
  </ColorSwatches>
));
