import { css, cx } from "emotion";
import React from "react";
import { mq } from "../../layout/mediaQueries";
import { Flex } from "../../primitives/elements";

// Little bit of a hack to introduce a bleeding row with grid support
const innerBleedingRowClass = css`
  max-width: 1600;
  flex-grow: 1;
  width: 100%;
  ${mq.sm(`
    padding-left: calc(11px + 10px);
    padding-right: calc(11px + 10px);
  `)};
  ${mq.md(`
    padding-left: calc(5vw + 10px);
    padding-right: calc(5vw + 10px);
  `)};
`;

export interface IProps {
  outerClassName?: string;
  innerClassName?: string;
}

export const BleedingRow: React.SFC<IProps> = ({ outerClassName, innerClassName, children }) => (
  <Flex className={outerClassName} alignment="center">
    <Flex
      padding="md 10px"
      className={cx(
        innerBleedingRowClass,
        innerClassName,
        css`
          overflow: visible;
        `
      )}
      alignment="horizontal flex-end"
    >
      {children}
    </Flex>
  </Flex>
);

export default BleedingRow;
