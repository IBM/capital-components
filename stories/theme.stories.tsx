import React from "react";
import { storiesOf } from "@storybook/react";
import { Block, InlineBlock } from "@fss/components/lib/primitives/elements";
import { ThemeProvider, withTheme } from "@fss/components/lib/support/theme";
import otherProductsTheme from "@fss/components/lib/support/themes/other-products";
import { withInfo } from "@storybook/addon-info";

storiesOf("Themes", module)
  .add(
    "All Colors",
    withInfo({
      inline: true,
      text: "Examples"
    })(() => {
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
            </Block>
          ))}
        </div>
      ));

      return (
        <ThemeProvider theme={otherProductsTheme}>
          <Comp />
        </ThemeProvider>
      );
    })
  )
  .add(
    "Primitives",
    withInfo({
      inline: true,
      text: "Basic primitives can access the theme through a special prop."
    })(() => (
      <ThemeProvider theme={otherProductsTheme}>
        <React.Fragment>
          <Block cssWithTheme={({ theme }) => `background-color: ${theme.color.brand01};`}>
            Brand01
          </Block>
          <Block cssWithTheme={({ theme }) => `background-color: ${theme.color.brand02};`}>
            Brand02
          </Block>
        </React.Fragment>
      </ThemeProvider>
    ))
  )
  .add(
    "WithTheme enhancer",
    withInfo({
      inline: true,
      text: `
        You can hook up any component to the theme object.
      `
    })(() => {
      const Comp = withTheme(({ theme }) => <div>{theme.color.brand01}</div>);

      return (
        <ThemeProvider theme={otherProductsTheme}>
          <Comp />
        </ThemeProvider>
      );
    })
  );
