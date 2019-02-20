import { Tab, TabsV2 } from "@fss/components";
import { storiesOf } from "@storybook/react";
import * as R from "ramda";
import React from "react";
import { WithState } from "../../internal/storyHelpers";

storiesOf("Components|Tabs", module)
  .add("Some basic tabs", () => (
    <TabsV2>
      <Tab>{({ tabProps }) => <div {...tabProps}>SomeContent</div>}</Tab>
      <Tab>{({ tabProps }) => <div {...tabProps}>SomeContent2</div>}</Tab>
    </TabsV2>
  ))
  .add("Many tabs and scroll control", () => (
    <WithState initialState={{ selectTabIndex: 0 }}>
      {({ state, setState }) => (
        <React.Fragment>
          <TabsV2 scrollToTab={state.selectTabIndex}>
            {R.range(0, 50).map(num => (
              <Tab key={num} isSelected={num === state.selectTabIndex}>
                {({ tabProps }) => <div {...tabProps}>SomeContent{num}</div>}
              </Tab>
            ))}
          </TabsV2>
          <button
            onClick={() =>
              setState(prevState => ({ selectTabIndex: (prevState.selectTabIndex + 1) % 50 }))
            }
          >
            Focus on tab {state.selectTabIndex}
          </button>
        </React.Fragment>
      )}
    </WithState>
  ))
  .add("Adding dyanimc tabs", () => (
    <WithState initialState={{ selectTabIndex: 0, tabs: [] }}>
      {({ state, setState }) => (
        <React.Fragment>
          <TabsV2 scrollToTab={state.selectTabIndex}>
            {state.tabs.map((_, index) => (
              <Tab key={index} isSelected={index === state.selectTabIndex}>
                {({ tabProps }) => <div {...tabProps}>SomeContent{index}</div>}
              </Tab>
            ))}
          </TabsV2>
          <button
            onClick={() =>
              setState(prevState => ({
                selectTabIndex: (prevState.selectTabIndex + 1) % prevState.tabs.length
              }))
            }
          >
            Focus on tab {state.selectTabIndex}
          </button>
          <button onClick={() => setState(prevState => ({ tabs: [...prevState.tabs, {}] }))}>
            Create new tab
          </button>
        </React.Fragment>
      )}
    </WithState>
  ));
