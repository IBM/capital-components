import React, { ReactNode } from "react";
import { cx, css } from "emotion";

// A basic tabs components to represent tabs without having to worry about tab content.
// Redux handles that.

export default ({ children, className }: { children: ReactNode; className?: string }) => (
  <nav
    className={cx(
      className,
      "bx--tabs",
      css`
        .bx--tabs__nav-item {
          align-items: center !important;

          &.bx--tabs__nav-item--selected {
            padding-bottom: calc(0.75rem - 2px);
          }
        }
        .;
      `,
      // Bunch of override CSS to prevent mobile version
      css`
        background: none;
        min-height: 3.0625rem;
        .bx--tabs__nav-item + .bx--tabs__nav-item {
          margin-left: 3rem;
        }
        > .bx--tabs__nav {
          font-size: 1rem;
          -webkit-box-orient: horizontal;
          -webkit-box-direction: normal;
          flex-direction: row;
          margin-right: 1rem;
          margin-left: 1rem;
          background: none;
          box-shadow: none;
        }
        .bx--tabs__nav-item {
          background: transparent;
          padding: 0.75rem 0 0.75rem;
        }
        .bx--tabs__nav-link {
          padding: 0 0.125rem;
          width: auto;
        }
        .bx--tabs__nav-item:hover {
          outline: transparent solid 1px;
          background: transparent;
        }
      `
    )}
    role="navigation"
  >
    <ul role="tablist" className={cx("bx--tabs__nav")}>
      {children}
    </ul>
  </nav>
);

interface TabProps {
  label: ReactNode;
  id: string;
  selected: boolean;
  tabIndex: number;
  handleClick?: (event: Event) => void;
  route?:
    | {
        type: string;
        payload: object;
        query: object;
      }
    | string;
  children?: React.ReactNode;
}
