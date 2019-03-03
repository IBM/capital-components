import Tooltip from "./Tooltip";
import { storiesOf } from "@storybook/react";
import React from "react";
import Readme from "./README.md";
import { withReadme } from "storybook-readme";

const stories = storiesOf("Components|Tooltip", module).addDecorator(withReadme([Readme]));

stories.add("Some basic tooltips", () => {
  return (
    <div css="width: 400px; height: 200px; display: flex; align-items: center; justify-content: center;">
      <Tooltip placement="bottom" content="Tooltip">
        {({ getReferenceProps }) => <div {...getReferenceProps()}>Hey buddy</div>}
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
