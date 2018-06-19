import Component from "./component";
import React from "react";

export default () => storyFn => {
  return <Component>{storyFn()}</Component>;
};
