import React from "react";
import { Grid, Col } from "@fss/components";
import { storiesOf } from "@storybook/react";
import { withInfo } from "@storybook/addon-info";
import { css } from "emotion";

const stories = storiesOf("Grid", module);

const redBackground = css(`background-color: red;`);
const blueBackground = css(`background-color: blue;`);
const yellowBackground = css(`background-color: yellow;`);

stories.add(
  "Basic Grid",
  withInfo({
    inline: true,
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
    <Grid isContainer>
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
    inline: true,
    text: `
      Fluid rows means that row height will be determined similar to column
      width (in chunks). This means that 12 rows make up 100vh.
    `
  })(() => (
    <Grid isContainer isFluidRows>
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
    inline: true,
    text: `
        Fixed columns means that the width of the column never changes. It
        is always 1/12 of our optimal screen width.
      `
  })(() => (
    <Grid isContainer isFixedColumns>
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
    inline: true,
    text: `
          Padding can be added for vertical alignment
        `
  })(() => (
    <Grid isContainer verticalPadding="top xl">
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
    inline: true,
    text: `
            Sometimes you want columns to take up differing amounts of space
            depending on the screen size.
          `
  })(() => (
    <Grid isContainer>
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
