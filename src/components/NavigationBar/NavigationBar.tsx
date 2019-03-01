import isPropValid from "@emotion/is-prop-valid";
import MenuIcon from "@fss/icons/dist/svg/menu_24";
import { css, cx } from "emotion";
import React, { ComponentType } from "react";
import ReactDOM from "react-dom";
import Media from "react-media";
import { Overwrite } from "type-zoo";
import { breakpoints, mqStrings, mqStringsMax } from "../../layout/mediaQueries";
import { Flex, FlexProps } from "../../primitives/elements";
import { styled, Theme, withTheme } from "../../support/theme";
import Icon from "../Icon";
import PushOver from "../PushOver";
import PushOverItem from "../PushOverItem";

export type PrimaryBarItemProps = FlexProps & { isSelected?: boolean };

const shouldForwardProp = (prop: string) => prop !== "isSelected" && isPropValid(prop);

// We can extend existing styles by wrapping them with styled
const PrimaryBarItem = styled("div", {
  shouldForwardProp
})<PrimaryBarItemProps>(props => {
  const fromFlex = Flex.formatter({
    padding: "sm md",
    alignment: "vertical center",
    ...props
  });
  return `
          ${fromFlex};
          ${props.theme.fonts.styles.body};
          ${props.isSelected ? `font-weight: ${props.theme.fonts.weights.bold};` : ""}
          color: ${props.theme.color.inverse01};
          fill: ${props.theme.color.inverse01};
          :hover {
            background-color: ${props.theme.color.nav02};
          }
          cursor: pointer;
          text-decoration: none;
          outline: none;
          flex-shrink: 0;
        `;
});

function PrimaryBarNavItem<T extends object = {}>({
  asComp,
  className,
  ...props
}: { asComp?: ComponentType<T>; className?: string } & Overwrite<PrimaryBarItemProps, T>) {
  return (
    <Media query={{ maxWidth: breakpoints.s }}>
      {matches => {
        const Comp = PrimaryBarItem.withComponent(asComp || ("div" as any));
        if (matches) {
          return (
            <PushOverItem {...props}>
              {({ className: iC }) => <Comp className={cx(iC, className)} {...props} />}
            </PushOverItem>
          );
        }
        return <Comp className={className} {...props} />;
      }}
    </Media>
  );
}

const PrimaryBarIcon = styled(PrimaryBarItem, {
  shouldForwardProp: prop => prop !== "as" && shouldForwardProp(prop)
})<PrimaryBarItemProps & { as?: any }>(props => {
  const color = props.isSelected ? props.theme.color.nav01 : props.theme.color.inverse01;
  return `
          ${
            props.isSelected
              ? `
            background-color: ${props.theme.color.brand03} !important;
            & > .icon-circle {
              color: ${props.theme.color.brand03};
              fill: ${props.theme.color.brand03};
            }
          `
              : ""
          }
          color: ${color};
          fill: ${color};
          :hover {
            > .icon-circle {
              color: ${props.theme.color.nav02};
              fill: ${props.theme.color.nav02};
            }
          }
        `;
});

const PrimaryBarTitle = styled(PrimaryBarItem)`
  padding-left: 0;
  flex: 1 1 auto;
  cursor: auto;
  ${props => props.theme.fonts.styles.specialtyBody};
  font-weight: ${props => props.theme.fonts.weights.bold};
`;

const NavSectionWrapper = styled.div<{ hasTitleSection?: boolean }>`
  display: flex;
  overflow: auto;
  ${({ hasTitleSection }) => (hasTitleSection ? "" : "flex: 1 1 auto; justify-content: flex-end;")};
`;

const RightSectionWrapper = styled.div`
  margin-left: 1rem;
  display: flex;
  > * {
    border-left: 1px solid ${props => props.theme.color.text02};
  }
`;

const PrimaryBarMainMenuItem = PrimaryBarItem.withComponent("div");

const PrimaryBarInternal = styled.nav`
  display: flex;
  border-bottom: 1px solid ${props => props.theme.color.brand03};
  background-color: ${props => props.theme.color.nav01};
  flex-shrink: 0;
  height: 48px;
  ${mqStrings.s("padding-left: 40px;")};
  overflow: hidden;
`;

enum TranslationKeys {
  openMenu = "wfss-components.primarybar.menu.open",
  menuTitle = "wfss-components.primarybar.menu.title",
  mainNavTitle = "wfss-components.primarybar.title"
}

const defaultTranslation: Record<TranslationKeys, string> = {
  [TranslationKeys.menuTitle]: "Menu",
  [TranslationKeys.mainNavTitle]: "Main",
  [TranslationKeys.openMenu]: "Open menu"
};

const defaultTranslate = (args: { id: TranslationKeys }) => defaultTranslation[args.id];

const PrimaryBarWithoutTheme: React.FunctionComponent<
  {
    className?: string;
  } & {
    titleSection?: React.ReactNode;
    navSection?: React.ReactNode;
    rightSection?: React.ReactNode;
    menuIcon?: React.ReactNode;
    /* Event handler for when primary bar is viewed from a small screen */
    onMenuToggle?: React.MouseEventHandler;
    showMenu?: boolean;
    mobileMenuRef?: React.RefObject<HTMLElement>;
    renderMobileMenuContent?: (
      arg: { navSection: React.ReactNode; getWrapperProps: () => any }
    ) => React.ReactNode;
    theme?: Theme;
    translate?: typeof defaultTranslate;
    id?: string;
  }
> = ({
  titleSection,
  navSection,
  rightSection,
  menuIcon,
  onMenuToggle,
  showMenu,
  mobileMenuRef,
  renderMobileMenuContent,
  theme,
  translate = defaultTranslate,
  id = "",
  ...otherProps
}) => (
  <Media query={{ maxWidth: breakpoints.s }}>
    {matches => {
      const PrimaryIcon = menuIcon || MenuIcon;
      const wrapperProps = {
        className: css`
          display: flex;
          flex: 1 1 auto;
          overflow: auto;
          background-color: ${theme.color.nav02};
          flex-direction: column;
          ${theme.fonts.styles.specialtyBody};
        `,
        tabIndex: -1
      };
      const mobileMenuRefCurrent = mobileMenuRef && mobileMenuRef.current;
      return (
        <>
          <PrimaryBarInternal
            aria-label={translate({ id: TranslationKeys.mainNavTitle })}
            id={`wfss-navigation-bar-primary-${id}`}
            {...otherProps}
          >
            {matches && (
              <PrimaryBarMainMenuItem
                onClick={onMenuToggle}
                role="button"
                aria-haspopup={!!mobileMenuRefCurrent}
                aria-expanded={mobileMenuRefCurrent && showMenu}
                aria-controls={`wfss-navigation-bar-primary-${id}-mobile-menu`}
                aria-label={translate({ id: TranslationKeys.openMenu })}
              >
                <Icon size="medium">
                  <PrimaryIcon />
                </Icon>
              </PrimaryBarMainMenuItem>
            )}
            {titleSection}
            {!matches && (
              <NavSectionWrapper hasTitleSection={!!titleSection}>{navSection}</NavSectionWrapper>
            )}
            {rightSection && <RightSectionWrapper>{rightSection}</RightSectionWrapper>}
          </PrimaryBarInternal>
          {matches &&
            mobileMenuRefCurrent &&
            renderMobileMenuContent &&
            ReactDOM.createPortal(
              <PushOver
                isOpen={showMenu}
                showOverlay={true}
                onOverlayClick={onMenuToggle}
                role="navigation"
                aria-label={translate({ id: TranslationKeys.menuTitle })}
                id={`wfss-navigation-bar-primary-${id}-mobile-menu`}
              >
                {renderMobileMenuContent({ navSection, getWrapperProps: () => wrapperProps })}
              </PushOver>,
              mobileMenuRefCurrent
            )}
        </>
      );
    }}
  </Media>
);

const PrimaryBar = withTheme(PrimaryBarWithoutTheme);

// istanbul ignore next
const SecondaryBar = styled.nav`
  border-bottom: ${props => props.theme.color.text02} 1px solid;
  background-color: ${props => props.theme.color.nav02};
  ${mqStrings.s(`
  > * {
    padding-left: 28px;
    padding-right: 28px;
  }
  `)};
  ${mqStringsMax.s(`
    [role="tablist"] {
      justify-content: flex-start;
    }
  `)};
`;

export default {
  PrimaryBar,
  PrimaryBarIcon,
  PrimaryBarTitle,
  SecondaryBar,
  PrimaryBarNavItem
};
