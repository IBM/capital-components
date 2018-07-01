import React from "react";
import { FlyOver } from "@fss/components";
import { storiesOf } from "@storybook/react";
import { withInfo } from "@storybook/addon-info";
import { action } from "@storybook/addon-actions";
import styled from "react-emotion";
import { css } from "emotion";

const stories = storiesOf("Components|FlyOver", module);

const Base = styled("div")`
  height: 100vh;
  width: 100vw;
  background-color: blue;
`;

stories
  .add(
    "Left closable",
    withInfo({
      text: `
    Flyovers are useful for showing additional information, like dialogs, but let obtrussive.
  `
    })(() => (
      <Base>
        <FlyOver
          closable
          onCloseClick={action("close")}
          position="left"
          className={css`
            background-color: red;
          `}
        >
          Some content
        </FlyOver>
      </Base>
    ))
  )
  .add(
    "Right closable",
    withInfo({
      text: `
      Flyovers are useful for showing additional information, like dialogs, but let obtrussive.
    `
    })(() => (
      <Base>
        <FlyOver
          closable
          onCloseClick={action("close")}
          position="right"
          className={css`
            background-color: red;
          `}
        >
          Some content
        </FlyOver>
      </Base>
    ))
  );
