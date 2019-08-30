import React from "react";
import { storiesOf } from "@storybook/react";
import {
  ProductiveHeading01,
  ProductiveHeading02,
  ExpressiveHeading01,
  ExpressiveHeading02,
  Code01,
  BodyLong01,
  Display01,
  BodyShort01,
  Caption01,
  Quotation01
} from "capital-components/lib/primitives/text";
import { styled } from "capital-components/lib/support/theme";

storiesOf("Fonts", module)
  .add(
    "With React Components",
    () => (
      <div>
        <ProductiveHeading01>Heading 1</ProductiveHeading01>
        <ProductiveHeading02>Heading 2</ProductiveHeading02>
        <ExpressiveHeading01>Heading 3</ExpressiveHeading01>
        <ExpressiveHeading02>Heading 4</ExpressiveHeading02>
        <Code01>Code 01</Code01>
        <BodyLong01 padding="md">Body Long 01 with md padding</BodyLong01>
        <Display01 padding="md" margin="xs">
          Display Long 01 with md padding and xs margin
        </Display01>
        <BodyShort01>Body Short 01</BodyShort01>
        <Caption01>Caption 01</Caption01>
        <Quotation01>Quotation 01</Quotation01>
      </div>
    ),
    {
      info: {
        text: `
          Better to use react components that support standardized
          padding options and more react focused syntax.
        `
      }
    }
  )
  .add(
    "With Prebuilt Styles",
    () => {
      const El1 = styled.div(({ theme }) => theme.fonts.styles.bodyLong01);

      const CodeLargeFontSize = styled.div(
        ({ theme }) => theme.fonts.styles.code01,
        `
        font-size: 100px;
        line-height: 100px;
      `
      );
      return (
        <div>
          <El1>dataVizLabel styled element</El1>
          <CodeLargeFontSize>Giant Code!</CodeLargeFontSize>
        </div>
      );
    },
    {
      info: {
        text: `
          Sometimes you want to be able to bring in styles directly from your theme
          object. This can easily be done with the prebuilt styles property in fonts.
          You can combine the class objects (or functions)
        `
      }
    }
  );
