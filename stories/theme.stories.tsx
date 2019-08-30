import React from "react";
import { storiesOf } from "@storybook/react";
import { Block, InlineBlock } from "capital-components/lib/primitives/elements";
import { ThemeProvider, withTheme, themeContext } from "capital-components/lib/support/theme";
import { themes } from "@carbon/themes";
import createTheme from "capital-components/lib/support/createTheme";

const createdTheme = createTheme(themes.g10);
const stories = storiesOf("Themes", module);

stories.add("All Colors", () => {
  const Comp = withTheme(({ theme }) => (
    <div>
      {Object.keys(theme.color).map(key => (
        <Block>
          {key}:{" "}
          <InlineBlock
            css={`
              background-color: ${theme.color[key]};
              width: 30px;
              height: 30px;
              border: 1px solid black;
            `}
          />
          {theme.color[key]}
        </Block>
      ))}
    </div>
  ));

  return (
    <ThemeProvider theme={createdTheme}>
      <Comp />
    </ThemeProvider>
  );
});

stories.add("Primitives", () => (
  <ThemeProvider theme={createdTheme}>
    <React.Fragment>
      <Block cssWithTheme={({ theme }) => `background-color: ${theme.color.brand01};`}>
        Brand01
      </Block>
      <Block cssWithTheme={({ theme }) => `background-color: ${theme.color.brand02};`}>
        Brand02
      </Block>
    </React.Fragment>
  </ThemeProvider>
));

stories.add("WithTheme enhancer", () => {
  const Comp = withTheme(({ theme }) => (
    <Block>
      {theme.color.brand01}:{" "}
      <InlineBlock
        css={`
          background-color: ${theme.color.brand01};
          width: 30px;
          height: 30px;
          border: 1px solid black;
        `}
      />
      {theme.color.brand01}
    </Block>
  ));

  return (
    <ThemeProvider theme={createdTheme}>
      <Comp />
    </ThemeProvider>
  );
});

stories.add("With useContext", () => {
  const theme = React.useContext(themeContext);

  return Object.keys(theme.color).map(key => (
    <Block>
      {key}:{" "}
      <InlineBlock
        css={`
          background-color: ${theme.color[key]};
          width: 30px;
          height: 30px;
          border: 1px solid black;
        `}
      />
      {theme.color[key]}
    </Block>
  ));
});
