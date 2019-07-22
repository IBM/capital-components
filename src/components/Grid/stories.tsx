import { Col, Grid } from "capital-components";
import { withInfo } from "@storybook/addon-info";
import { storiesOf } from "@storybook/react";
import { css } from "emotion";
import React from "react";
import Readme from "./README.md";
import { withReadme } from "storybook-readme";

const stories = storiesOf("Components|Grid", module).addDecorator(withReadme([Readme]));

const redBackground = css(`background-color: red;`);
const blueBackground = css(`background-color: blue;`);
const yellowBackground = css(`background-color: yellow;`);

stories.add(
  "Basic Grid",
  withInfo({
    text: `
    #### Grids
    Grids allow you to be able to horizontally align your contents. Note
    that you cannot have a grid within a grid and expect it to follow the 
    exact same lanes (due to a lack of support for subgrids).

    #### Cols
    Cols are not quite table columns but are items within the grid. They 
    must take up at least size 1 (default). You can specify size as any 
    fraction of 12 (reduced) or an integer (<= 12).
  `
  })(() => (
    <Grid isContainer={true}>
      <Col size="all" className={redBackground}>
        This is one column crossing all
      </Col>
      <Col size="1/6" className={blueBackground}>
        With a smaller column
      </Col>
      <Col size="5/6" className={yellowBackground}>
        Another column filling up the rest
      </Col>
    </Grid>
  ))
);

stories.add(
  "Fluid Rows",
  withInfo({
    text: `
      Fluid rows means that row height will be determined similar to column
      width (in chunks). This means that 12 rows make up 100vh.
    `
  })(() => (
    <Grid isContainer={true} isFluidRows={true}>
      <Col size="all" className={redBackground}>
        This is one column crossing all
      </Col>
      <Col size="1/6" className={blueBackground}>
        With a smaller column
      </Col>
      <Col size="5/6" className={yellowBackground}>
        Another column filling up the rest
      </Col>
    </Grid>
  ))
);

stories.add(
  "Fixed Columns",
  withInfo({
    text: `
        Fixed columns means that the width of the column never changes. It
        is always 1/12 of our optimal screen width.
      `
  })(() => (
    <Grid isContainer={true} isFixedColumns={true}>
      <Col size="all" className={redBackground}>
        This is one column crossing all
      </Col>
      <Col size="1/6" className={blueBackground}>
        With a smaller column
      </Col>
      <Col size="5/6" className={yellowBackground}>
        Another column filling up the rest
      </Col>
    </Grid>
  ))
);

stories.add(
  "Vertical Padding",
  withInfo({
    text: `
          Padding can be added for vertical alignment
        `
  })(() => (
    <Grid isContainer={true} verticalPadding="top xl">
      <Col size="all" className={redBackground}>
        This is one column crossing all
      </Col>
      <Col size="1/6" className={blueBackground} verticalPadding="xl">
        With a smaller column
      </Col>
      <Col size="5/6" className={yellowBackground}>
        Another column filling up the rest
      </Col>
    </Grid>
  ))
);

stories.add(
  "Breakpoint Columns",
  withInfo({
    text: `
            Sometimes you want columns to take up differing amounts of space
            depending on the screen size.
          `
  })(() => (
    <Grid isContainer={true}>
      <Col size={{ xs: "all", m: "1/2" }} className={redBackground}>
        When the screen gets small, I take up all the room.
      </Col>
      <Col size="1/6" className={blueBackground} verticalPadding="xl">
        With a smaller column
      </Col>
      <Col size="5/6" className={yellowBackground}>
        Another column filling up the rest
      </Col>
    </Grid>
  ))
);

stories.add(
  "Vertical spacing - Media query aware",
  withInfo({
    text: `
            Sometimes you need your spacing to also depend on the screen size
          `
  })(() => (
    <Grid isContainer={true} verticalMargin={{ base: "sm", m: "xl" }}>
      <Col size={{ base: "all", m: "1/2" }} className={redBackground}>
        When the screen gets small, I take up all the room.
      </Col>
      <Col size="1/6" className={blueBackground} verticalPadding="xl">
        With a smaller column
      </Col>
      <Col size="5/6" className={yellowBackground}>
        Another column filling up the rest
      </Col>
    </Grid>
  ))
);
