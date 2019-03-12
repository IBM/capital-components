import DownIcon from "@fss/icons/dist/svg/triangle-down_16";
import RightIcon from "@fss/icons/dist/svg/triangle-right_16";
import { detect } from "detect-browser";
import { css, cx } from "emotion";
import invariant from "invariant";
import React from "react";
import Media from "react-media";
import { breakpoints, mqStrings as mediaQuery } from "../../layout/mediaQueries";
import { Flex } from "../../primitives/elements";
import { styled } from "../../support/theme";
import Col from "../Col";
import Grid from "../Grid";
import Icon from "../Icon";
import { scrollRowContainerClass } from "../ScrollRow/ScrollRow";

const browser = detect();
/* istanbul ignore next */
const isIE = browser && browser.name === "ie";

const BannerRibbonWrapper = styled("div")<{ mobile: boolean; isExpandable: boolean }>`
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
  ${({ mobile, theme, isExpandable }) =>
    mobile
      ? `
    display: block;
    position: relative;
    > * {
        padding-left: ${isExpandable ? theme.spacing.spacing.xl : "calc(11px + 5px)"};
        padding-right: ${isExpandable ? theme.spacing.spacing.xl : "calc(11px + 5px)"};
    }
  `
      : ""}
`;

/* istanbul ignore next */
const DropdownWrapper = props => (
  <Media query={{ maxWidth: breakpoints.s }}>
    {isMobile =>
      isMobile ? <div css="max-width: 100%;" {...props} /> : <Col size={2} {...props} />
    }
  </Media>
);

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
  /** Element that will float to the right until in mobile view. In mobile view, it will be underneath. */
  floatRightOfTitle?: React.ReactNode;
  /** Node to be displayed just above title. */
  supertitle?: React.ReactNode;
  /** Set the number of columns you want the title to take up. Note that this is a general hint and the actual width may differ depending on the floatRightOfTitle. Supported values: 6-11|all */
  titleWidthHint?: "6" | "7" | "8" | "9" | "10" | "11" | "all";
}> = ({
  className,
  wrapperClassName,
  title,
  expandable,
  floatRightOfTitle,
  children,
  titleWidthHint,
  ...otherProps
}) => (
  <Media query={{ maxWidth: breakpoints.s }}>
    {isMobile => {
      invariant(
        !expandable || otherProps.onExpandClick,
        "BannerRibbon: if expandable is specified, onExpandClick must be provided as well."
      );

      const isExpandable = isActuallyExpandable(
        isMobile,
        expandable,
        floatRightOfTitle,
        children,
        otherProps
      );

      if (isMobile) {
        return (
          <BannerRibbonWrapper className={className} isExpandable={isExpandable} mobile={isMobile}>
            <MobileExpandWrapper
              {...otherProps}
              title={title}
              expandable={isExpandable}
              floatRightOfTitle={floatRightOfTitle}
            />
            {children}
          </BannerRibbonWrapper>
        );
      }

      /* istanbul ignore next */
      if (isIE) {
        // this is why we can't have nice things
        const vwCalced = (90 * Number.parseInt(titleWidthHint, 10)) / 12;
        const maxWidth =
          !titleWidthHint || titleWidthHint === "all" ? undefined : `max-width: ${vwCalced}vw;`;
        return (
          <BannerRibbonWrapper className={className} isExpandable={isExpandable} mobile={isMobile}>
            <Grid isContainer={true} verticalPadding="xl">
              <ExpanderWrapper css={maxWidth}>
                <ExpanderIcon
                  expandable={isExpandable}
                  isExpanded={otherProps.isExpanded}
                  className={css`
                    ${otherProps.supertitle ? "margin-top: 2.5rem" : "margin-top: 1.25rem"};
                  `}
                />
              </ExpanderWrapper>
              <Flex direction="row" css="overflow: hidden;">
                <IEDesktopExpandWrapper
                  supertitle={otherProps.supertitle}
                  title={title}
                  floatRightOfTitle={floatRightOfTitle}
                  onClick={otherProps.onExpandClick}
                  role={expandable ? "button" : "header"}
                  aria-expanded={isExpandable ? otherProps.isExpanded : undefined}
                />
              </Flex>
              {children}
            </Grid>
          </BannerRibbonWrapper>
        );
      }

      return (
        <BannerRibbonWrapper className={className} isExpandable={isExpandable} mobile={isMobile}>
          <Grid isContainer={true} verticalPadding="xl">
            <Flex direction="row">
              <DesktopExpandWrapper
                {...otherProps}
                expandable={isExpandable}
                titleWidthHint={titleWidthHint}
                title={title}
                floatRightOfTitle={floatRightOfTitle}
              />
            </Flex>
            {children}
          </Grid>
        </BannerRibbonWrapper>
      );
    }}
  </Media>
);

interface IExpandableProps {
  className?: string;
  expandable?: boolean;
  isExpanded?: boolean;
  onExpandClick?: React.MouseEventHandler<HTMLDivElement>;
  title: React.ReactNode;
  supertitle?: React.ReactNode;
  floatRightOfTitle?: React.ReactNode;
}

const BannerMobileFloatWrapper = styled.div`
  padding-top: 12px;
  padding-bottom: ${({ theme }) => theme.spacing.spacing.lg};
`;

const ExpanderIcon = ({
  expandable,
  isExpanded,
  className
}: {
  expandable: boolean;
  isExpanded: boolean;
  className?: string;
}) =>
  expandable ? (
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
      className={className}
    >
      <Icon size="small" title="expand">
        {isExpanded ? <DownIcon /> : <RightIcon />}
      </Icon>
    </Flex>
  ) : null;

const ExpanderWrapper = styled(Flex)`
  ${({ theme }) => mediaQuery.base(theme.fonts.styles.specialtyBody)};
  ${({ theme }) => mediaQuery.s(theme.fonts.styles.alpha)};

  color: currentColor;
  flex: 1 1 auto;
  position: relative;
`;

const TextWrap = styled(Flex)`
  overflow-wrap: break-word;
  word-wrap: break-word;
  word-break: break-all;
  word-break: break-word;
  hyphens: auto;
  flex: 1 1 auto;
  overflow: hidden;
`;

const MobileExpandWrapper: React.SFC<IExpandableProps> = ({
  expandable,
  isExpanded,
  onExpandClick,
  floatRightOfTitle,
  title,
  supertitle
}) => (
  <>
    <Flex direction="column" css="flex: 1 1 auto;" padding="top 12px bottom 12px">
      {supertitle}
      <ExpanderWrapper
        onClick={onExpandClick}
        role={expandable ? "button" : "header"}
        aria-expanded={expandable ? isExpanded : undefined}
      >
        <ExpanderIcon expandable={expandable} isExpanded={isExpanded} />
        <TextWrap>{title}</TextWrap>
      </ExpanderWrapper>
    </Flex>
    {(isExpanded || !expandable) && floatRightOfTitle && (
      <BannerMobileFloatWrapper>{floatRightOfTitle}</BannerMobileFloatWrapper>
    )}
  </>
);

const BannerDesktopFloatWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  > .cap-grid__col--xs--2 {
    min-width: calc((100rem - 10vw) * (2 / 12));
  }
  > .cap-grid__col--xs--3 {
    min-width: calc((100rem - 10vw) * (3 / 12));
  }
`;

/* istanbul ignore next */
const IETitleWrapper = styled(Flex)`
  ${({ theme }) => mediaQuery.base(theme.fonts.styles.specialtyBody)};
  overflow: hidden;
  flex: 1 1 auto;
`;

/* istanbul ignore next */
const IETextWrap = styled(TextWrap)`
  ${({ theme }) => mediaQuery.s(theme.fonts.styles.alpha)};
  overflow: hidden;
  flex: 1 1 auto;
`;

/* istanbul ignore next */
const IEDesktopExpandWrapper = ({ supertitle, title, floatRightOfTitle, ...props }) => (
  <>
    <IETitleWrapper direction="column" {...props}>
      {supertitle}
      <IETextWrap>{title}</IETextWrap>
    </IETitleWrapper>
    {floatRightOfTitle && (
      <BannerDesktopFloatWrapper>{floatRightOfTitle}</BannerDesktopFloatWrapper>
    )}
  </>
);

const DesktopExpandWrapper: React.SFC<IExpandableProps & { titleWidthHint: string }> = ({
  expandable,
  isExpanded,
  onExpandClick,
  floatRightOfTitle,
  title,
  supertitle,
  titleWidthHint,
  className
}) => {
  const vwCalced = (90 * Number.parseInt(titleWidthHint, 10)) / 12;
  /* istanbul ignore next */
  const maxWidth =
    !titleWidthHint || titleWidthHint === "all" ? undefined : `max-width: ${vwCalced}vw;`;

  return (
    <>
      <Flex
        direction="column"
        alignment="horizontal flex-start"
        className={cx(
          css`
            flex: 1 1 auto;
          `,
          "cap-padding--horizontal",
          className
        )}
      >
        {supertitle}
        <ExpanderWrapper
          onClick={onExpandClick}
          role={expandable ? "button" : "header"}
          aria-expanded={expandable ? isExpanded : undefined}
          css={maxWidth}
        >
          <ExpanderIcon expandable={expandable} isExpanded={isExpanded} />
          <TextWrap>{title}</TextWrap>
        </ExpanderWrapper>
      </Flex>
      {floatRightOfTitle && (
        <BannerDesktopFloatWrapper>{floatRightOfTitle}</BannerDesktopFloatWrapper>
      )}
    </>
  );
};

export default Ribbon;

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
