import DownIcon from "@fss/icons/dist/svg/triangle-down_16";
import RightIcon from "@fss/icons/dist/svg/triangle-right_16";
import React from "react";
import Media from "react-media";
import { Col, Grid, Icon } from "../../";
import { breakpoints, mqStrings as mediaQuery } from "../../layout/mediaQueries";
import { Block, Flex } from "../../primitives/elements";
import { styled } from "../../support/theme";
import { scrollRowContainerClass } from "../ScrollRow/ScrollRow";

const BannerRibbonWrapper = styled("div")`
  background-color: ${({ theme }) => theme.color.nav02};
  color: ${({ theme }) => theme.color.inverse01};
  overflow: visible;
  width: 100%;
  > * {
    overflow: visible;
  }
  .${scrollRowContainerClass} > :first-child {
    padding-left: 0;
  }
  .${scrollRowContainerClass} > :last-child {
    padding-right: 0;
  }
`;

export const BannerDropdownWrapper = styled("div")`
  ${mediaQuery.base(`
    max-width: 100%;
  `)};
  ${mediaQuery.s(`
    width: 100%;
    max-width: 300px;
    margin-left: 20px;
  `)};
`;

const BannerRibbon: React.SFC<{
  className?: string;
  wrapperClassName?: string;
  children?: React.ReactNode;
  expandable?: boolean;
  isExpanded?: boolean;
  onExpandClick?: React.MouseEventHandler<HTMLDivElement>;
  title: React.ReactNode;
  floatRightOfTitle?: React.ReactNode;
}> = ({
  className,
  wrapperClassName,
  children,
  title,
  floatRightOfTitle,
  expandable,
  ...otherProps
}) => (
  <Media query={{ maxWidth: breakpoints.s }}>
    {matches => {
      let isActuallyExpandable = expandable;
      if (matches) {
        isActuallyExpandable = expandable || (!!floatRightOfTitle || !!children);
      } else {
        isActuallyExpandable = expandable || !!children;
      }
      const content = (
        <>
          <BannerTitleRow
            title={title}
            expandable={isActuallyExpandable}
            {...otherProps}
            mobile={matches}
          >
            {floatRightOfTitle}
          </BannerTitleRow>
          {children}
        </>
      );
      const allContent = matches ? (
        <Block
          className={className}
          cssWithTheme={({ theme }) => `
            position: relative;
            > * {
                padding-left: ${theme.spacing.spacing.xl};
                padding-right: ${theme.spacing.spacing.xl};
            }
            > :not(:first-child) {
                padding-bottom: ${theme.spacing.spacing.md};
            }
          `}
        >
          {content}
        </Block>
      ) : (
        <Grid isContainer={true} verticalPadding="xl" className={className}>
          {content}
        </Grid>
      );
      return <BannerRibbonWrapper className={wrapperClassName}>{allContent}</BannerRibbonWrapper>;
    }}
  </Media>
);

interface IExpandableProps {
  className?: string;
  expandable?: boolean;
  isExpanded?: boolean;
  onExpandClick?: React.MouseEventHandler<HTMLDivElement>;
  title: React.ReactNode;
  mobile?: boolean;
}

const ExpandWrapper: React.SFC<IExpandableProps> = ({
  expandable,
  isExpanded,
  onExpandClick,
  children,
  title,
  mobile
}) => (
  <>
    <Flex
      padding={mobile ? "top md bottom md" : undefined}
      cssWithTheme={({ theme }) => `
            ${mediaQuery.base(theme.fonts.styles.specialtyBody)};
            ${mediaQuery.s(theme.fonts.styles.alpha)};
            color: currentColor;
            flex: 1 1 auto;
            position: relative;
        `}
      onClick={onExpandClick}
    >
      {expandable && (
        <Flex
          alignment="center"
          padding="right xs"
          cssWithTheme={({ theme }) => `
                    position: absolute;
                    transform: translateX(-100%);
                    fill: ${theme.color.ui01};
                    height: 100%;
                    width: 32px;
                    justify-content: flex-end;
                    top: 0;
                  `}
        >
          <Icon size="small" title="expand">
            {isExpanded ? <RightIcon /> : <DownIcon />}
          </Icon>
        </Flex>
      )}
      {title}
    </Flex>
    {(isExpanded || !expandable || !mobile) && children}
  </>
);

const BannerTitleRow: React.SFC<IExpandableProps> = ({ className, ...props }) => {
  const content = <ExpandWrapper {...props} />;
  if (!props.mobile) {
    return (
      <Col size="all" flexDirection="row" className={className}>
        {content}
      </Col>
    );
  }
  return content;
};

export default BannerRibbon;
