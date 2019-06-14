import Tooltip from "./Tooltip";
import { storiesOf } from "@storybook/react";
import React from "react";
import Readme from "./README.md";
import { withReadme } from "storybook-readme";
import { styled } from "@fss/components/lib/support/theme";

const stories = storiesOf("Components|Tooltip", module).addDecorator(withReadme([Readme]));

stories.add("Timing based tooltip", () => {
  return (
    <div css="width: 400px; height: 200px; display: flex; align-items: center; justify-content: center;">
      <Tooltip placement="bottom" content="Tooltip">
        {({ getReferenceProps }) => <div {...getReferenceProps()}>Hey buddy (default 200ms)</div>}
      </Tooltip>
    </div>
  );
});

stories.add("Click to pin", () => {
  return (
    <div css="width: 400px; height: 200px; display: flex; align-items: center; justify-content: center;">
      <Tooltip placement="bottom" content="Tooltip" clickToOpen>
        {({ getReferenceProps }) => <div {...getReferenceProps()}>Hey buddy</div>}
      </Tooltip>
    </div>
  );
});

stories.add("Using a built in div and custom delay", () => {
  return (
    <div css="width: 400px; height: 200px; display: flex; align-items: center; justify-content: center;">
      <Tooltip placement="bottom" content="Tooltip" delayInMs={400}>
        Hey buddy
      </Tooltip>
    </div>
  );
});

stories.add("Positioning", () => {
  return (
    <>
      <div css="flex-direction: column; width: 100%; height: 200px; display: flex; align-items: flex-end; justify-content: flex-end;">
        <Tooltip
          placement="bottom"
          content="Tooltip which is very long and stuff"
          delayInMs={400}
          clickToOpen
        >
          <div>Bottom</div>
        </Tooltip>
        <Tooltip
          placement="top"
          content="Tooltip which is very long and stuff"
          delayInMs={400}
          clickToOpen
        >
          <div>Top</div>
        </Tooltip>
        <Tooltip
          placement="left"
          content="Tooltip which is very long and stuff"
          delayInMs={400}
          clickToOpen
        >
          <div>left</div>
        </Tooltip>
        <Tooltip
          placement="right"
          content="Tooltip which is very long and stuff"
          delayInMs={400}
          clickToOpen
        >
          <div>right</div>
        </Tooltip>
      </div>
    </>
  );
});

const ScrollParent = styled.div`
  max-height: 200px;
  background-color: red;
  overflow: auto;
`;

stories.add("Within scroll parent", () => {
  return (
    <>
      <ScrollParent>
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(num => (
          <Tooltip placement="bottom" content="Item1 content" key={num}>
            Item {num}
          </Tooltip>
        ))}
      </ScrollParent>
    </>
  );
});
