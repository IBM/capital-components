import { BannerRibbon, ScrollRow, Col } from "@fss/components";
import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import useToggle from "../../hooks/useToggle";
import { Button, DropdownV2 } from "carbon-components-react";

const stories = storiesOf("Components|BannerRibbon", module);

stories.add(
  "Basic",
  () => {
    const [open, toggleOpen] = useToggle(false);
    return (
      <div css="width: 100vw;">
        <BannerRibbon.Ribbon
          title="Some Content goes here"
          onExpandClick={toggleOpen}
          isExpanded={open}
          expandable
          floatRightOfTitle={
            <div>
              <Button>Do something</Button>
            </div>
          }
        >
          {open && <Col size="all">Some content is hidden with expand/collapse</Col>}
          <ScrollRow preventShrink>
            <Col size={2} verticalPadding="sm" css="justify-content: space-between;">
              Some content is not
            </Col>
            <Col size={2} verticalPadding="sm" css="justify-content: space-between;">
              This is just a scrolling view, if items are too large
            </Col>
            <Col size={2} verticalPadding="sm" css="justify-content: space-between;">
              or there are too many
            </Col>
            <Col size={2} verticalPadding="sm" css="justify-content: space-between;">
              or something
            </Col>
          </ScrollRow>
        </BannerRibbon.Ribbon>
      </div>
    );
  },
  {
    text: `
      Nothing special
    `
  }
);

stories.add(
  "No children",
  () => {
    const [open, toggleOpen] = useToggle(false);
    return (
      <div css="width: 100vw;">
        <BannerRibbon.Ribbon
          title="Some Content goes here"
          onExpandClick={toggleOpen}
          isExpanded={open}
          floatRightOfTitle={
            <div>
              <Button>Do something</Button>
            </div>
          }
        />
      </div>
    );
  },
  {
    text: `
        Sometimes you don't have anything nested within the ribbon but still want to support expanding.
      `
  }
);

stories.add(
  "With dropdown section",
  () => {
    const [open, toggleOpen] = useToggle(false);
    return (
      <div css="width: 100vw;">
        <BannerRibbon.Ribbon
          title="Some Content goes here"
          onExpandClick={toggleOpen}
          isExpanded={open}
          floatRightOfTitle={
            <BannerRibbon.DropdownWrapper>
              <DropdownV2
                items={["Option 1", "Option 2", "Option 3"]}
                onChange={action("onChange")}
              />
            </BannerRibbon.DropdownWrapper>
          }
        />
      </div>
    );
  },
  {
    text: `
          A dropdown needs some coercing. So you need to wrap it in an additional component.
        `
  }
);