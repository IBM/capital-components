import React from "react";
import { storiesOf } from "@storybook/react";
import {
  Heading,
  Body,
  SpecialtyBody,
  Label,
  Input,
  Large,
  DataVizLabel
} from "@fss/components/lib/primitives/text";
import { withInfo } from "@storybook/addon-info";

storiesOf("Fonts", module)
  .add(
    "With CSS classes",
    withInfo({
      text: "We support basic CSS classes for easier migration."
    })(() => (
      <div>
        <h1 className="cap--type-alpha">Heading 1</h1>
        <h2 className="cap--type-beta">Heading 2</h2>
        <h3 className="cap--type-gamma">Heading 3</h3>
        <h4 className="cap--type-delta">Heading 4</h4>
        <h5 className="cap--type-epsilon">Heading 5</h5>
        <div className="cap--type-body">Body</div>
        <div className="cap--type-specialty-body">Specialty Body</div>
        <div className="cap--type-label">Label</div>
        <div className="cap--type-input">Input</div>
        <div className="cap--type-large">Large</div>
        <div className="cap--type-data-viz--label">Data Viz - Label</div>
      </div>
    ))
  )
  .add(
    "With React Components",
    withInfo({
      text: `
        Better to use react components that support standardized
        padding options and more react focused syntax.
      `
    })(() => (
      <div>
        <Heading level="1">Heading 1</Heading>
        <Heading level="2">Heading 2</Heading>
        <Heading level="3">Heading 3</Heading>
        <Heading level="4">Heading 4</Heading>
        <Heading level="5">Heading 5</Heading>
        <Body>Body</Body>
        <SpecialtyBody>Specialty Body</SpecialtyBody>
        <Label>Label</Label>
        <Input>Input</Input>
        <Large>Large</Large>
        <DataVizLabel>Data Viz - Label</DataVizLabel>
      </div>
    ))
  );
