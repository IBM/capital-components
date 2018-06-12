import React from "react";
import { storiesOf } from "@storybook/react";
import { doc } from "storybook-readme";
import readme from "../README.md";

storiesOf("Welcome|Getting started", module).add("Usage", doc(readme));
