import { BannerRibbon, ScrollRow, Col } from "capital-components";
import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import useToggle from "../../hooks/useToggle";
import { Button, DropdownV2 } from "carbon-components-react";
import { cx, css } from "emotion";

const stories = storiesOf("Components|BannerRibbon", module);

stories.add(
  "Basic",
  () => {
    const [open, toggleOpen] = useToggle(false);
    return (
      <div css="width: 100vw;">
        <BannerRibbon.Ribbon
          title="Basic title"
          supertitle={<BannerRibbon.Breadcrumb>Breadkcrumb/</BannerRibbon.Breadcrumb>}
          onExpandClick={toggleOpen}
          isExpanded={open}
          expandable
          floatRightOfTitle={
            <BannerRibbon.DropdownWrapper>
              <DropdownV2
                items={["Option 1", "Option 2", "Option 3"]}
                onChange={action("onChange")}
              />
            </BannerRibbon.DropdownWrapper>
          }
        >
          {open && (
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
          )}
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

stories.add(
  "Without any expandable content",
  () => {
    return (
      <div css="width: 100vw;">
        <BannerRibbon.Ribbon title="Some Content goes here" expandable={false}>
          Some static content
        </BannerRibbon.Ribbon>
      </div>
    );
  },
  {
    text: `
            Sometimes the banner just has static content.
          `
  }
);

stories.add(
  "With a breadcrumb",
  () => {
    return (
      <div css="width: 100vw;">
        <BannerRibbon.Ribbon
          supertitle="breadcrumb/to/something"
          title="Some title"
          expandable
          onExpandClick={action("expand")}
        >
          Something to expand
        </BannerRibbon.Ribbon>
      </div>
    );
  },
  {
    text: `
              Sometimes you need a breadcrumb
            `
  }
);

stories.add("Variety of title lengths", () => {
  return (
    <div css="width: 100vw;">
      <BannerRibbon.Ribbon
        title="Basic title"
        floatRightOfTitle={
          <BannerRibbon.DropdownWrapper>
            <DropdownV2
              items={["Option 1", "Option 2", "Option 3"]}
              onChange={action("onChange")}
            />
          </BannerRibbon.DropdownWrapper>
        }
      />
      <BannerRibbon.Ribbon
        title={`
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam a augue lorem. In eu nunc ut quam viverra eleifend id a massa. In vitae sollicitudin odio, ac semper nulla. Fusce vitae convallis lorem. Phasellus tempor metus nec aliquam luctus. Duis odio nunc, ullamcorper ac augue quis, luctus posuere leo. Nam.
          `}
        floatRightOfTitle={
          <BannerRibbon.DropdownWrapper>
            <DropdownV2
              items={["Option 1", "Option 2", "Option 3"]}
              onChange={action("onChange")}
            />
          </BannerRibbon.DropdownWrapper>
        }
      />
      <BannerRibbon.Ribbon
        supertitle="Something/super"
        title={`
            Loremipsumdolorsitamet,consecteturadipiscingelit.Etiamaauguelorem.Ineununcutquamviverraeleifendidamassa.Invitaesollicitudinodio,acsempernulla.Fuscevitaeconvallislorem.Phasellustempormetusnecaliquamluctus.Duisodionunc,ullamcorperacauguequis,luctusposuereleo.Nam.
          `}
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
});

stories.add("Restricted title width", () => {
  return (
    <div css="width: 100vw;">
      <BannerRibbon.Ribbon
        title="Basic title with hint 6"
        titleWidthHint="6"
        floatRightOfTitle={
          <Col size="all" css="border: 1px solid blue; flex: 1 1 auto;">
            Some float content
          </Col>
        }
      />
      <BannerRibbon.Ribbon
        title="Basic title with hint 7"
        titleWidthHint="7"
        floatRightOfTitle={
          <Col size="all" css="border: 1px solid blue; flex: 1 1 auto;">
            Some float content
          </Col>
        }
      />
      <BannerRibbon.Ribbon
        title="Basic title with hint 9"
        titleWidthHint="9"
        floatRightOfTitle={
          <Col size="all" css="border: 1px solid blue; flex: 1 1 auto;">
            Some float content
          </Col>
        }
      />
    </div>
  );
});

stories.add("Double dropdowns", () => {
  return (
    <div css="width: 100vw;">
      <BannerRibbon.Ribbon
        title="Basic title"
        floatRightOfTitle={
          <>
            <BannerRibbon.DropdownWrapper>
              <DropdownV2
                items={["Option 1", "Option 2", "Option 3"]}
                onChange={action("onChange")}
              />
            </BannerRibbon.DropdownWrapper>
            <BannerRibbon.DropdownWrapper>
              <DropdownV2
                items={["Option 1", "Option 2", "Option 3"]}
                onChange={action("onChange")}
              />
            </BannerRibbon.DropdownWrapper>
          </>
        }
      />
    </div>
  );
});
