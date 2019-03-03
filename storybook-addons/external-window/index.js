import Component from "./component";
import React from "react";

export default () => StoryFn => {
  return (
    <Component rootProps={{ class: "external-preview" }}>
      <StoryFn />
    </Component>
  );
};
