import { Tab, TabsV2, NavigationBar } from "capital-components";
import { storiesOf } from "@storybook/react";
import * as R from "ramda";
import React, { useState } from "react";
import Readme from "./README.md";
import { withReadme } from "storybook-readme";

const stories = storiesOf("Components|Tabs", module).addDecorator(withReadme([Readme]));

const { SecondaryBar } = NavigationBar;

stories
  .add("Some basic tabs", () => {
    const [selectedTabIndex, setSelectedTabIndex] = useState(0);
    return (
      <SecondaryBar css="width: 500px;">
        <TabsV2>
          <Tab isSelected={selectedTabIndex === 0}>
            {({ tabProps }) => (
              <div style={{}} {...tabProps} onClick={() => setSelectedTabIndex(0)}>
                SomeContent
              </div>
            )}
          </Tab>
          <Tab isSelected={selectedTabIndex === 1} onClick={() => setSelectedTabIndex(1)}>
            SomeContent2
          </Tab>
        </TabsV2>
      </SecondaryBar>
    );
  })
  .add("Some basic thin tabs", () => {
    const [selectedTabIndex, setSelectedTabIndex] = useState(0);
    return (
      <SecondaryBar css="width: 500px;">
        <TabsV2 underscoreHeight="thin">
          <Tab isSelected={selectedTabIndex === 0}>
            {({ tabProps }) => (
              <div style={{}} {...tabProps} onClick={() => setSelectedTabIndex(0)}>
                SomeContent
              </div>
            )}
          </Tab>
          <Tab isSelected={selectedTabIndex === 1} onClick={() => setSelectedTabIndex(1)}>
            SomeContent2
          </Tab>
        </TabsV2>
      </SecondaryBar>
    );
  })
  .add("Many tabs and scroll control", () => {
    const [selectedTabIndex, setSelectedTabIndex] = useState(0);
    return (
      <React.Fragment>
        <SecondaryBar>
          <TabsV2 scrollToTab={selectedTabIndex}>
            {R.range(0, 50).map(num => (
              <Tab key={num} isSelected={num === selectedTabIndex}>
                {({ tabProps }) => <div {...tabProps}>SomeContent{num}</div>}
              </Tab>
            ))}
          </TabsV2>
        </SecondaryBar>
        <button onClick={() => setSelectedTabIndex(prevState => (prevState + 1) % 50)}>
          Focus on tab {selectedTabIndex + 1}
        </button>
      </React.Fragment>
    );
  })
  .add("Adding dyanimc tabs", () => {
    const [selectedTabIndex, setSelectedTabIndex] = useState(0);
    const [tabs, setTabs] = useState([]);
    return (
      <React.Fragment>
        <SecondaryBar>
          <TabsV2 scrollToTab={selectedTabIndex}>
            {tabs.map((_, index) => (
              <Tab key={index} isSelected={index === selectedTabIndex}>
                {({ tabProps }) => <div {...tabProps}>SomeContent{index}</div>}
              </Tab>
            ))}
          </TabsV2>
        </SecondaryBar>
        {tabs.length > 0 && (
          <button onClick={() => setSelectedTabIndex(prevState => (prevState + 1) % tabs.length)}>
            Focus on tab {(selectedTabIndex + 1) % tabs.length}
          </button>
        )}
        <button onClick={() => setTabs(prevState => [...prevState, {}])}>Create new tab</button>
      </React.Fragment>
    );
  })
  .add("Light colored tabs", () => {
    const [selectedTabIndex, setSelectedTabIndex] = useState(0);
    return (
      <TabsV2>
        <Tab isSelected={selectedTabIndex === 0}>
          {({ tabProps }) => (
            <div style={{}} {...tabProps} onClick={() => setSelectedTabIndex(0)}>
              SomeContent
            </div>
          )}
        </Tab>
        <Tab isSelected={selectedTabIndex === 1}>
          {({ tabProps }) => (
            <div {...tabProps} onClick={() => setSelectedTabIndex(1)}>
              SomeContent2
            </div>
          )}
        </Tab>
      </TabsV2>
    );
  })
  .add("Left aligned tabs", () => {
    const [selectedTabIndex, setSelectedTabIndex] = useState(0);
    return (
      <TabsV2 alignment="flex-start">
        <Tab isSelected={selectedTabIndex === 0}>
          {({ tabProps }) => (
            <div style={{}} {...tabProps} onClick={() => setSelectedTabIndex(0)}>
              SomeContent
            </div>
          )}
        </Tab>
        <Tab isSelected={selectedTabIndex === 1}>
          {({ tabProps }) => (
            <div {...tabProps} onClick={() => setSelectedTabIndex(1)}>
              SomeContent2
            </div>
          )}
        </Tab>
      </TabsV2>
    );
  })
  .add("Customizing spacing between", () => {
    const [selectedTabIndex, setSelectedTabIndex] = useState(0);
    return (
      <TabsV2 alignment="flex-start" spacingBetween="md">
        <Tab isSelected={selectedTabIndex === 0}>
          {({ tabProps }) => (
            <div style={{}} {...tabProps} onClick={() => setSelectedTabIndex(0)}>
              SomeContent
            </div>
          )}
        </Tab>
        <Tab isSelected={selectedTabIndex === 1}>
          {({ tabProps }) => (
            <div {...tabProps} onClick={() => setSelectedTabIndex(1)}>
              SomeContent2
            </div>
          )}
        </Tab>
      </TabsV2>
    );
  })
  .add("Single tab", () => {
    const [selectedTabIndex, setSelectedTabIndex] = useState(0);
    return (
      <React.Fragment>
        <SecondaryBar>
          <TabsV2 scrollToTab={selectedTabIndex}>
            <Tab isSelected>Tab1</Tab>
          </TabsV2>
        </SecondaryBar>
        <button onClick={() => setSelectedTabIndex(prevState => (prevState + 1) % 50)}>
          Focus on tab {selectedTabIndex + 1}
        </button>
      </React.Fragment>
    );
  });
