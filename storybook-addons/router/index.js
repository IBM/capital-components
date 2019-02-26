import React, { Component, useEffect, useCallback } from "react";
import PropTypes from "prop-types";
import useReactRouter from "use-react-router";
import { action } from "@storybook/addon-actions";
import { MemoryRouter, matchPath } from "react-router";

const match = (link, path) => {
  // If the new path matches with one of the keys defined in the links object, then
  // executes the given corresponding callback value with the path as argument.
  // As behind the scene matchProps uses path-to-regexp (https://goo.gl/xgzOaL)
  // you can use parameter names and regexp within the link keys.
  return matchPath(link, { path: path, exact: true });
};

const StoryRouter = ({ links, routerProps, children }) => (
  // Limitation: as MemoryRouter creates a new history object, you cannot pass it from
  // a story to another one and so you cannot implement a back or forward button which
  // works among stories.
  <MemoryRouter {...routerProps}>
    <HistoryWatcher links={links} />
    {children}
  </MemoryRouter>
);

const HistoryWatcher = ({ links }) => {
  const { history, location, match } = useReactRouter();
  const handleHistoryChanged = (internalLocation, historyAction) => {
    const path = internalLocation.pathname;

    for (const link in links) {
      if (match(path, link)) {
        links[link](path);
        return;
      }
    }
    action(historyAction ? historyAction : location.action)(path);
  };
  useEffect(
    () => {
      const unlisten = history.listen(handleHistoryChanged);
      return unlisten;
    },
    [history]
  );
  return null;
};

const StorybookRouter = (links, routerProps) => Story => {
  return (
    <StoryRouter links={links} routerProps={routerProps}>
      <Story />
    </StoryRouter>
  );
};

export default StorybookRouter;
