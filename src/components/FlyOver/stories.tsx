import React from "react";
import { FlyOver, FlyOverProvider } from "@fss/components";
import { storiesOf } from "@storybook/react";
import { withInfo } from "@storybook/addon-info";
import styled from "react-emotion";
import { css } from "emotion";
import { WithState } from "../../internal/storyHelpers";

const stories = storiesOf("Components|FlyOver", module);

const Base = styled("div")`
  height: 100vh;
  width: 100vw;
  background-color: blue;
  position: relative;
  display: flex;
  flex-direction: column;
`;

const ContentDefiningFlyOver = styled("div")`
  position: relative;
  flex: 1 1 auto;
`;

stories
  .add(
    "Left closable",
    withInfo({
      text: `
    Flyovers are useful for showing additional information, like dialogs, but less obtrussive.

    FlyOvers require a FlyOverProvider to be somewhere in it's parent hierarchy, and this
    provider (plus it's parent) defines the size and position of the flyover.

    Note that FlyOver does not need to be directly under FlyOverProvider. It can be anywhere underneath.
  `
    })(() => (
      <WithState initialState={{ open: true, count: 0 }}>
        {({ state, setState }) => (
          <Base>
            Something outside of Flyovers
            <ContentDefiningFlyOver>
              Some content underneath the Flyover. This content should should take up all the
              available space in it's parent.
              <button onClick={() => setState({ open: !state.open })}>Open/close</button>
              <FlyOverProvider position="left">
                <FlyOver
                  closable
                  show={state.open}
                  onCloseClick={() => {
                    setState({
                      open: false
                    });
                  }}
                  position="left"
                  className={css`
                    background-color: red;
                  `}
                >
                  Some content
                  <div>
                    Some dynamic content: {state.count}
                    <button onClick={() => setState(prevState => ({ count: prevState.count + 1 }))}>
                      Inc
                    </button>
                  </div>
                </FlyOver>
              </FlyOverProvider>
            </ContentDefiningFlyOver>
          </Base>
        )}
      </WithState>
    ))
  )
  .add(
    "Right closable",
    withInfo({
      text: `
        You can also specify a position of right. To do this, the provider needs to be configured with the proper position.
`
    })(() => (
      <WithState initialState={{ open: true }}>
        {({ state, setState }) => (
          <Base>
            <ContentDefiningFlyOver>
              <FlyOverProvider position="right">
                Some stuff in between provider and flyover.
                <div>
                  And more stuff
                  <div>
                    And more more stuff
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
                  </div>
                </div>
              </FlyOverProvider>
              <button onClick={() => setState(prevState => ({ open: !prevState.open }))}>
                Open/close
              </button>
            </ContentDefiningFlyOver>
          </Base>
        )}
      </WithState>
    ))
  )
  .add(
    "Left and Right",
    withInfo({
      text: `
        You can specify two flyouts if necessary. But only one should be active at a time.
      `
    })(() => (
      <WithState initialState={{ leftOpen: true, rightOpen: true }}>
        {({ state, setState }) => (
          <Base>
            <ContentDefiningFlyOver>
              <FlyOverProvider>
                <FlyOver
                  closable
                  show={state.leftOpen}
                  onCloseClick={() => {
                    setState({ leftOpen: false });
                  }}
                  position="left"
                  className={css`
                    background-color: red;
                  `}
                >
                  Left content
                </FlyOver>
                <FlyOver
                  closable
                  show={state.rightOpen}
                  onCloseClick={() => {
                    setState({ rightOpen: false });
                  }}
                  position="right"
                  className={css`
                    background-color: red;
                  `}
                >
                  Right content
                </FlyOver>
              </FlyOverProvider>
              <button onClick={() => setState(prevState => ({ leftOpen: !prevState.leftOpen }))}>
                Left Open/close
              </button>
              <button onClick={() => setState(prevState => ({ rightOpen: !prevState.rightOpen }))}>
                Right Open/close
              </button>
            </ContentDefiningFlyOver>
          </Base>
        )}
      </WithState>
    ))
  );
