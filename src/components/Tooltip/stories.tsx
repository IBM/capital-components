import Tooltip from "./Tooltip";
import { storiesOf } from "@storybook/react";
import React from "react";
import Readme from "./README.md";
import { withReadme } from "storybook-readme";

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
