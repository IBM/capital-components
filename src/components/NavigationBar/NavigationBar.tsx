import isPropValid from "@emotion/is-prop-valid";
import MenuIcon from "../../fss-icons/menu_24";
import ChevronDown from "../../fss-icons/chevron-down_16";
import { css, cx } from "emotion";
import React, { ComponentPropsWithoutRef, ComponentType } from "react";
import ReactDOM from "react-dom";
import Media from "react-media";
import { Overwrite } from "type-zoo";
import { darkModeContext } from "../../contexts";
import { breakpoints, mqStrings, mqStringsMax } from "../../layout/mediaQueries";
import { Flex, FlexProps } from "../../primitives/elements";
import { styled, Theme, withTheme } from "../../support/theme";
import Icon from "../Icon";
import PushOver from "../PushOver";
import PushOverItem from "../PushOverItem";
import Popover from "../Popover";
import Mobile from "../Mobile";
import { detect } from "detect-browser";
import useToggle from "../../hooks/useToggle";

const browser = detect();
/* istanbul ignore next */
const isIOS = browser && browser.os === "iOS";

export type NavigationBarItemProps = FlexProps & { isSelected?: boolean };
export type PrimaryBarItemProps = NavigationBarItemProps;

const shouldForwardProp = (prop: string) => prop !== "isSelected" && isPropValid(prop);

const NavigationBarItem = styled("div", {
  shouldForwardProp
})<NavigationBarItemProps>(props => {
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
          cursor: pointer;
          text-decoration: none;
          outline: none;
          flex-shrink: 0;
        `;
});

// We can extend existing styles by wrapping them with styled
const PrimaryBarItem = styled(NavigationBarItem, {
  shouldForwardProp
})<PrimaryBarItemProps>`
  :hover {
    background-color: ${({ theme }) => theme.color.nav02};
  }
`;

function PrimaryBarNavItem<T extends object = {}>({
  asComp,
  className,
  mobileWrapperClassName,
  ...props
}: {
  asComp?: ComponentType<T> | string;
  className?: string;
  mobileWrapperClassName?: string;
  children: React.ReactNode;
  innerRef?: React.Ref<any>;
} & Overwrite<PrimaryBarItemProps, T>) {
  // use useMemo
  const Comp = React.useMemo(
    () => (asComp ? PrimaryBarItem.withComponent(asComp as any) : PrimaryBarItem),
    [asComp]
  );
  return (
    <Mobile>
      {matches => {
        if (matches) {
          return (
            <PushOverItem className={mobileWrapperClassName}>
              {({ className: iC }) => <Comp className={cx(iC, className)} {...props} />}
            </PushOverItem>
          );
        }
        return <Comp className={className} {...props} />;
      }}
    </Mobile>
  );
}

const generateIconClasses = (props: { isSelected?: boolean; theme: Theme }) => `
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
`;

const PrimaryBarIcon = styled(PrimaryBarItem, {
  shouldForwardProp
})<PrimaryBarItemProps>(props => {
  const color = props.isSelected ? props.theme.color.nav01 : props.theme.color.inverse01;
  return `
          ${generateIconClasses(props)}
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

const SecondaryBarIcon = styled(NavigationBarItem, {
  shouldForwardProp
})<NavigationBarItemProps>(props => {
  const color = props.isSelected ? props.theme.color.nav02 : props.theme.color.inverse01;
  return `
          ${generateIconClasses(props)}
          border-left: 1px solid ${props.theme.color.text02};
          color: ${color};
          fill: ${color};
        `;
});

const PrimaryBarTitle = styled(PrimaryBarItem)`
  padding-left: 0;
  flex: 1 1 auto;
  cursor: auto;
  ${props => props.theme.fonts.styles.specialtyBody};
  font-weight: ${props => props.theme.fonts.weights.bold};
  :hover {
    background-color: ${({ theme }) => theme.color.nav01};
  }
`;

/* istanbul ignore next */
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

const PrimaryBarInternal = styled.nav<{ addLeftPadding?: boolean }>`
  display: flex;
  border-bottom: 1px solid ${props => props.theme.color.brand03};
  background-color: ${props => props.theme.color.nav01};
  flex-shrink: 0;
  height: 48px;
  padding-left: ${({ addLeftPadding }) => (addLeftPadding ? "40px" : "0")};
  overflow: hidden;
`;

enum TranslationKeys {
  openMenu = "wfss-components.primarybar.menu.open",
  menuTitle = "wfss-components.primarybar.menu.title",
  mainNavTitle = "wfss-components.primarybar.title",
  mainNavDropdownTitle = "wfss-components.primarybar.dropdown.title"
}

const defaultTranslation: Record<TranslationKeys, (values: any) => string> = {
  [TranslationKeys.menuTitle]: () => "Menu",
  [TranslationKeys.mainNavTitle]: () => "Main",
  [TranslationKeys.openMenu]: () => "Open menu",
  [TranslationKeys.mainNavDropdownTitle]: values => `Open menu for ${values.title}`
};

const defaultTranslate = (arg: { id: TranslationKeys; values?: any }) =>
  defaultTranslation[arg.id](arg.values);

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
    renderMobileMenuContent?: (arg: {
      navSection: React.ReactNode;
      getWrapperProps: () => any;
    }) => React.ReactNode;
    theme?: Theme;
    translate?: typeof defaultTranslate;
    id?: string;
    mobileWrapperClassName?: string;
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
  mobileWrapperClassName,
  ...otherProps
}) => (
  <Media query={{ maxWidth: breakpoints.s - 1 }}>
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
      const showMobileNavButton = matches && !!onMenuToggle && !!mobileMenuRef;
      return (
        <>
          <PrimaryBarInternal
            aria-label={translate({ id: TranslationKeys.mainNavTitle })}
            id={`wfss-navigation-bar-primary-${id}`}
            addLeftPadding={!matches || !showMobileNavButton}
            {...otherProps}
          >
            {matches && !!onMenuToggle && !!mobileMenuRef && (
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
            {titleSection || <PrimaryBarTitle />}
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
                size={300}
                isOpen={showMenu}
                showOverlay={true}
                onOverlayClick={onMenuToggle}
                role="navigation"
                aria-label={translate({ id: TranslationKeys.menuTitle })}
                id={`wfss-navigation-bar-primary-${id}-mobile-menu`}
                style={{ height: "100%" }}
                fullScreenMode={!isIOS}
                outerClassName={mobileWrapperClassName}
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

const Nav = styled("nav")`
  font-weight: ${props => props.theme.fonts.weights.regular};
  overflow: auto;
  display: flex;
  ${mqStrings.s("direction: rtl;")}
  flex-shrink: 0;
`;

// istanbul ignore next
const SecondaryBar = styled((props: ComponentPropsWithoutRef<typeof Nav>) => {
  return (
    <darkModeContext.Provider value={true}>
      <Nav {...props} />
    </darkModeContext.Provider>
  );
})`
  border-bottom: ${props => props.theme.color.text02} 1px solid;
  background-color: ${props => props.theme.color.nav02};
  ${mqStrings.s(`
  [role="tablist"]::after, [role="tablist"]::before {
    content: "";
    padding-left: 28px;
  }
  `)};
  ${({ theme }) =>
    mqStringsMax.s(`
    [role="tablist"]::after, [role="tablist"]::before {
      content: "";
      padding-left: ${theme.spacing.spacing.sm};
    }
    [role="tablist"] {
      justify-content: flex-start;
    }
  `)};
`;

const FooterBar = styled(PrimaryBarInternal)`
  border-bottom: none;
  justify-content: flex-end;
`;

const FooterBarIcon = styled(PrimaryBarIcon)`
  border-left: 1px solid ${props => props.theme.color.text02};
`;

const DropDownContainer = styled.div`
  background-color: ${({ theme }) => theme.color.nav01};
  width: 300px;
  color: ${({ theme }) => theme.color.inverse01};
  display: flex;
  flex-direction: column;
`;

const primaryBarDropDownDefaultState = () => {
  const [isOpen, toggleOpen] = useToggle(false);
  return {
    isOpen,
    toggleOpen
  };
};

type PrimaryBarDropDownProps = ComponentPropsWithoutRef<typeof PrimaryBarItem> & {
  title: string;
  id: string;
  translate?: typeof defaultTranslate;
} & ReturnType<typeof primaryBarDropDownDefaultState>;

const primaryBarDropDownStyles = {
  base: css`
    transition: all 250ms cubic-bezier(0.5, 0, 0.1, 1);
    margin-left: 0.5rem;
    transform: rotate(0);
  `,
  open: css`
    transform: rotate(180deg);
  `
};

const PrimaryBarDropDown = ({
  id,
  title,
  children,
  isOpen,
  toggleOpen,
  translate = defaultTranslate,
  ...props
}: PrimaryBarDropDownProps) => {
  const popperId = `wfss-navigation-bar-${id}-dropdown`;

  const navItemProps = {
    ...props,
    asComp: "li",
    id,
    role: "button",
    onClick: toggleOpen,
    ["aria-expanded"]: isOpen,
    ["aria-controls"]: popperId,
    ["aria-label"]: translate({
      id: TranslationKeys.mainNavDropdownTitle,
      values: { title }
    })
  };

  const openIcon = (
    <Icon
      size="small"
      className={cx(primaryBarDropDownStyles.base, {
        [primaryBarDropDownStyles.open]: isOpen
      })}
    >
      <ChevronDown />
    </Icon>
  );

  return (
    <Mobile>
      {matches =>
        matches ? (
          <>
            <PrimaryBarNavItem {...navItemProps} asComp={undefined}>
              <span
                className={css`
                  flex: 1 1 auto;
                `}
              >
                {title}
              </span>
              {openIcon}
            </PrimaryBarNavItem>
            {isOpen ? children : null}
          </>
        ) : (
          <Popover
            show={isOpen}
            placement="bottom-start"
            onClickOutside={toggleOpen}
            reference={({ ref }) => {
              return (
                <PrimaryBarNavItem {...navItemProps} innerRef={ref} aria-haspopup={true}>
                  {title}
                  {openIcon}
                </PrimaryBarNavItem>
              );
            }}
          >
            <DropDownContainer id={popperId} role="navigation" aria-labelledby={id}>
              {children}
            </DropDownContainer>
          </Popover>
        )
      }
    </Mobile>
  );
};
PrimaryBarDropDown.useDefaultState = primaryBarDropDownDefaultState;

const PrimaryBarDropDownItem = PrimaryBarNavItem;

export default {
  PrimaryBar,
  PrimaryBarIcon,
  PrimaryBarTitle,
  SecondaryBar,
  PrimaryBarNavItem,
  SecondaryBarIcon,
  FooterBar,
  FooterBarIcon,
  PrimaryBarDropDown,
  PrimaryBarDropDownItem
};
