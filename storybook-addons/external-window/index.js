import Component from "./component";
import React from "react";

export default () => storyFn => {
  return <Component rootProps={{ class: "external-preview" }}>{storyFn()}</Component>;
};
