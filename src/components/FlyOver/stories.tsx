import React from "react";
import { FlyOver } from "@fss/components";
import { storiesOf } from "@storybook/react";
import { withInfo } from "@storybook/addon-info";
import { action } from "@storybook/addon-actions";
import styled from "react-emotion";
import { css } from "emotion";
import { WithState } from "../../internal/storyHelpers";

const stories = storiesOf("Components|FlyOver", module);

const Base = styled("div")`
  height: 100vh;
  width: 100vw;
  background-color: blue;
  position: relative;
  overflow-x: hidden;
`;

stories
  .add(
    "Left closable",
    withInfo({
      text: `
    Flyovers are useful for showing additional information, like dialogs, but let obtrussive.
  `
    })(() => (
      <WithState initialState={{ open: true }}>
        {({ state, setState }) => (
          <Base>
            <FlyOver
              closable
              show={state.open}
              onCloseClick={() => {
                setState({ open: false });
              }}
              position="left"
              className={css`
                background-color: red;
              `}
            >
              Some content
            </FlyOver>
            <button onClick={() => setState(prevState => ({ open: !prevState.open }))}>
              Open/close
            </button>
          </Base>
        )}
      </WithState>
    ))
  )
  .add(
    "Right closable",
    withInfo({
      text: `
      Flyovers are useful for showing additional information, like dialogs, but let obtrussive.

      Please note that the wrapping element must be position relative and have overlow-x: hidden for the right side to be hidden properly.
    `
    })(() => (
      <WithState initialState={{ open: true }}>
        {({ state, setState }) => (
          <Base>
            <FlyOver
              closable
              show={state.open}
              onCloseClick={() => {
                setState({ open: false });
              }}
              position="right"
              className={css`
                background-color: red;
              `}
            >
              Some content
            </FlyOver>
            <button onClick={() => setState(prevState => ({ open: !prevState.open }))}>
              Open/close
            </button>
          </Base>
        )}
      </WithState>
    ))
  );
