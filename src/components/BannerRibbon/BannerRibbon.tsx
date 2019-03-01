import DownIcon from "@fss/icons/dist/svg/triangle-down_16";
import RightIcon from "@fss/icons/dist/svg/triangle-right_16";
import invariant from "invariant";
import React from "react";
import Media from "react-media";
import { breakpoints, mqStrings as mediaQuery } from "../../layout/mediaQueries";
import { Block, Flex } from "../../primitives/elements";
import { styled } from "../../support/theme";
import Col from "../Col";
import Grid from "../Grid";
import Icon from "../Icon";
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

const DropdownWrapper = styled("div")`
  ${mediaQuery.base(`
    max-width: 100%;
  `)};
  ${mediaQuery.s(`
    width: 100%;
    max-width: 300px;
    margin-left: 20px;
  `)};
`;

const Ribbon: React.SFC<{
  /** ClassName to the grid/inner element */
  className?: string;
  /** ClassName for the full wrapping element */
  wrapperClassName?: string;
  children?: React.ReactNode;
  /**
   * Whether or not the banner ribbon can expand. This MUST be combined with onExpandClick. If this is undefined
   * we will try to guess at if it can be expanded.
   */
  expandable?: boolean;
  /** Whether or not the banner ribbon is expanded. */
  isExpanded?: boolean;
  /** Handles click on banner. */
  onExpandClick?: React.MouseEventHandler<HTMLDivElement>;
  /** Node to be displayed as title. */
  title: React.ReactNode;
  /** If set to false, the floatRightOfTitle will NOT move under the title on mobile. */
  isStaticRightSection?: boolean;
  /** Element that will float to the right until in mobile view. In mobile view, it will be underneath. */
  floatRightOfTitle?: React.ReactNode;
  /** Node to be displayed just above title. */
  supertitle?: React.ReactNode;
}> = ({
  className,
  wrapperClassName,
  children,
  title,
  floatRightOfTitle,
  expandable,
  isStaticRightSection,
  ...otherProps
}) => (
  <Media query={{ maxWidth: breakpoints.s }}>
    {matches => {
      invariant(
        !expandable || otherProps.onExpandClick,
        "BannerRibbon: if expandable is specified, onExpandClick must be provided as well."
      );

      const isExpandable = isActuallyExpandable(
        matches,
        expandable,
        floatRightOfTitle,
        children,
        otherProps
      );
      const content = (
        <>
          <BannerTitleRow
            title={title}
            expandable={isExpandable}
            isStaticRightSection={isStaticRightSection}
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
                padding-left: ${isExpandable ? theme.spacing.spacing.xl : "calc(11px + 5px)"};
                padding-right: ${isExpandable ? theme.spacing.spacing.xl : "calc(11px + 5px)"};
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
  supertitle?: React.ReactNode;
  isStaticRightSection?: boolean;
}

const BannerMobileFloatWrapper = styled.div`
  padding-top: 12px;
  padding-bottom: ${({ theme }) => theme.spacing.spacing.lg};
`;

const renderFloatWrapper = (mobile, children) => {
  if (mobile && children) {
    return <BannerMobileFloatWrapper>{children}</BannerMobileFloatWrapper>;
  }
  return children;
};

const ExpandWrapper: React.SFC<IExpandableProps> = ({
  expandable,
  isExpanded,
  onExpandClick,
  children,
  title,
  mobile,
  supertitle,
  isStaticRightSection
}) => (
  <>
    <Flex
      direction="column"
      css="flex: 1 1 auto;"
      padding={mobile ? "top 12px bottom 12px" : undefined}
    >
      {supertitle}
      <Flex
        cssWithTheme={({ theme }) => `
            ${mediaQuery.base(theme.fonts.styles.specialtyBody)};
            ${mediaQuery.s(theme.fonts.styles.alpha)};
            color: currentColor;
            flex: 1 1 auto;
            position: relative;
        `}
        onClick={onExpandClick}
        role={expandable ? "button" : "header"}
        aria-expanded={expandable ? isExpanded : undefined}
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
              {isExpanded ? <DownIcon /> : <RightIcon />}
            </Icon>
          </Flex>
        )}
        {title}
        {isStaticRightSection && children}
      </Flex>
    </Flex>
    {(isExpanded || !expandable || !mobile) &&
      !isStaticRightSection &&
      renderFloatWrapper(mobile, children)}
  </>
);

const BannerTitleRow: React.SFC<IExpandableProps> = ({ className, ...props }) => {
  const content = <ExpandWrapper {...props} />;
  if (!props.mobile) {
    return (
      <Col
        size="all"
        flexDirection="row"
        verticalPadding={props.isExpanded ? "bottom 2xs" : undefined}
        className={className}
      >
        {content}
      </Col>
    );
  }
  return content;
};

const Breadcrumb = styled.a`
  ${({ theme }) => theme.fonts.styles.body};
  color: ${({ theme }) => theme.color.brand03};
  cursor: pointer;
  :hover {
    text-decoration: underline;
  }
`;

export default {
  Ribbon,
  DropdownWrapper,
  Breadcrumb
};

function isActuallyExpandable(
  isMobile: boolean,
  expandable: boolean,
  floatRightOfTitle: React.ReactNode,
  children: React.ReactNode,
  otherProps: {
    /** Whether or not the banner ribbon is expanded. */
    isExpanded?: boolean;
    /** Handles click on banner. */
    onExpandClick?: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
    /** Node to be displayed just above title. */
    supertitle?: React.ReactNode;
  }
) {
  if (!otherProps.onExpandClick) {
    return false;
  }
  if (expandable === false) {
    return false;
  }
  if (isMobile) {
    return expandable || (!!floatRightOfTitle || !!children);
  }
  return expandable || !!children;
}
