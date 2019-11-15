import { Col, Grid, Row } from "capital-components";
import { Seperator } from "capital-components/lib/primitives/elements";
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
    must take up at least size 1 (default). You can specify size as an integer (<= 16).
  `
  })(() => (
    <Grid>
      <Row>
        <Col className={redBackground}>This is one column crossing all</Col>
      </Row>
      <Row>
        <Col size={3} className={blueBackground}>
          With a smaller column
        </Col>
        <Col className={yellowBackground}>Another column filling up the rest</Col>
      </Row>
      <Row>
        <Col size={{ sm: 2, lg: 8 }} className={blueBackground}>
          A large column that takes up 2 spans in small, and 8 at large
        </Col>
      </Row>
      <Seperator padding="bottom sm" />
      <Row>
        <Col>Some content after seperator</Col>
      </Row>
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
    <Grid>
      <Row>
        <Col size={4} className={redBackground}>
          When the screen gets small, I take up all the room.
        </Col>
        <Col size={{ sm: 1, lg: 2 }} className={blueBackground} verticalPadding="xl">
          With a smaller column
        </Col>
        <Col size={{ sm: 3, lg: 14 }} className={yellowBackground}>
          Another column filling up the rest
        </Col>
      </Row>
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
    <Grid verticalMargin={{ base: "sm", md: "xl" }}>
      <Row>
        <Col className={redBackground}>When the screen gets small, I take up all the room.</Col>
        <Col className={blueBackground} verticalPadding="xl">
          With a smaller column
        </Col>
        <Col className={yellowBackground}>Another column filling up the rest</Col>
      </Row>
    </Grid>
  ))
);
