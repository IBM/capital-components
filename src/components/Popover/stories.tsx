import React from "react";
import { Popover, Icon } from "@fss/components";
import { storiesOf } from "@storybook/react";
import { withInfo } from "@storybook/addon-info";
import { action } from "@storybook/addon-actions";

import notificationBell from "@fss/icons/dist/svg/notification-bell_24.svg";

const stories = storiesOf("Components|Popover", module);

stories.add(
  "Basic",
  withInfo({
    text: `
    Popover provides the bare essential for a popover element. No additional
    styling is applied.
  `
  })(() => (
    <Popover
      reference={({ ref }) => (
        <Icon
          size="large"
          title="Mandatory Title (for accessibility)"
          glyph={notificationBell}
          ref={ref}
        />
      )}
      show={true}
      placement="bottom-end"
      onClickOutside={action("Click outside")}
    >
      Some item Some other item
    </Popover>
  ))
);
