import MenuIcon from "@fss/icons/dist/svg/menu_24";
import { cx } from "emotion";
import React, { ComponentPropsWithoutRef, ComponentType } from "react";
import ReactDOM from "react-dom";
import Media from "react-media";
import { Overwrite } from "type-zoo";
import { PushOver, PushOverItem } from "../../components";
import { breakpoints, mqStrings } from "../../layout/mediaQueries";
import { Flex } from "../../primitives/elements";
import { styled, Theme, withTheme } from "../../support/theme";
import Icon from "../Icon";

// We can extend existing styles by wrapping them with styled
const PrimaryBarItem = styled("div", {
  shouldForwardProp: prop => prop !== "isSelected"
})<ComponentPropsWithoutRef<typeof Flex> & { isSelected?: boolean }>(props => {
  const fromFlex = Flex.formatter({
    padding: "md md",
    alignment: "vertical center",
    ...props
  });
  return `
          ${fromFlex};
          ${props.theme.fonts.styles.body};
          ${props.isSelected ? `font-weight: ${props.theme.fonts.weights.bold};` : ""}
          color: ${props.theme.color.inverse01};
          fill: ${props.theme.color.inverse01};
          height: 55px;
          cursor: pointer;
          text-decoration: none;
        `;
});

function PrimaryBarNavItem<T extends object = {}>({
  asComp,
  className,
  ...props
}: { asComp?: ComponentType<T>; className?: string } & Overwrite<
  ComponentPropsWithoutRef<typeof PrimaryBarItem>,
  T
>) {
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
  shouldForwardProp: prop => prop !== "isSelected" && prop !== "as"
})<ComponentPropsWithoutRef<typeof PrimaryBarItem> & { isSelected?: boolean; as?: any }>(props => {
  const color = props.isSelected ? props.theme.color.nav01 : props.theme.color.inverse01;
  return `
          ${props.isSelected ? `background-color: ${props.theme.color.brand03};` : ""}
          color: ${color};
          fill: ${color};
          border-left: 1px solid ${props.theme.color.ui04};
          height: 55px;
          cursor: pointer;
          text-decoration: none;
        `;
});

const PrimaryBarTitle = styled(PrimaryBarItem)`
  padding-left: 0;
  flex: 1 1 auto;
  cursor: auto;
  ${props => props.theme.fonts.styles.specialtyBody};
  font-weight: ${props => props.theme.fonts.weights.bold};
`;

const FlexUL = Flex.withComponent("ul");

const PrimaryBarMainMenuItem = PrimaryBarItem.withComponent("div");

const PrimaryBarInternal = styled.nav`
  display: flex;
  border-bottom: 1px solid ${props => props.theme.color.brand03};
  background-color: ${props => props.theme.color.nav01};
  flex-shrink: 0;
  ${mqStrings.s("padding-left: 40px;")};
`;

enum TranslationKeys {
  menuTitle = "wfss-components.primarybar.menu.title"
}

const defaultTranslations: Record<TranslationKeys, string> = {
  [TranslationKeys.menuTitle]: "Menu"
};

const defaultTranslateWithId = (id: TranslationKeys) => defaultTranslations[id];

const PrimaryBarWithoutTheme: React.FunctionComponent<
  ComponentPropsWithoutRef<typeof PrimaryBarInternal> & {
    titleSection?: React.ReactNode;
    navSection?: React.ReactNode;
    rightSection?: React.ReactNode;
    menuIcon?: React.ReactNode;
    /* Event handler for when primary bar is viewed from a small screen */
    onMenuToggle?: React.MouseEventHandler;
    showMenu?: boolean;
    mobileMenuContents?: React.ReactNode;
    mobileMenuRef?: Element | null;
    mobileMenuHeaderContent?: React.ReactNode;
    theme?: Theme;
    translateWithId?: typeof defaultTranslateWithId;
  }
> = ({
  titleSection,
  navSection,
  rightSection,
  menuIcon,
  onMenuToggle,
  showMenu,
  mobileMenuContents,
  mobileMenuRef,
  mobileMenuHeaderContent,
  theme,
  translateWithId = defaultTranslateWithId,
  ...otherProps
}) => (
  <Media query={{ maxWidth: breakpoints.s }}>
    {matches => {
      if (!matches) {
        return (
          <PrimaryBarInternal {...otherProps}>
            {titleSection}
            {navSection}
            {rightSection}
          </PrimaryBarInternal>
        );
      }
      const PrimaryIcon = menuIcon || MenuIcon;
      return (
        <>
          <PrimaryBarInternal {...otherProps}>
            <PrimaryBarMainMenuItem onClick={onMenuToggle}>
              <Icon size="medium" title={translateWithId(TranslationKeys.menuTitle)}>
                <PrimaryIcon />
              </Icon>
            </PrimaryBarMainMenuItem>
            {titleSection}
            {rightSection}
          </PrimaryBarInternal>
          {mobileMenuRef &&
            ReactDOM.createPortal(
              <PushOver
                isOpen={showMenu}
                showOverlay={true}
                css={`
                  overflow: hidden;
                  ${theme.fonts.styles.specialtyBody};
                  line-height: 1rem;
                `}
                onOverlayClick={onMenuToggle}
              >
                {mobileMenuHeaderContent && (
                  <Flex
                    alignment="center"
                    padding="md lg"
                    css={`
                      flex-shrink: 0;
                      background-color: ${theme.color.nav01};
                      border-bottom: 1px solid ${theme.color.brand03};
                    `}
                  >
                    {mobileMenuHeaderContent}
                  </Flex>
                )}
                <FlexUL
                  direction="column"
                  css={`
                    color: ${theme.color.inverse01};
                    flex: 1 1 auto;
                    overflow: auto;
                  `}
                >
                  {navSection}
                </FlexUL>
              </PushOver>,
              mobileMenuRef
            )}
        </>
      );
    }}
  </Media>
);

const PrimaryBar = withTheme(PrimaryBarWithoutTheme);

const SecondaryBar = styled.nav`
  border-bottom: ${props => props.theme.color.text02} 1px solid;
  background-color: ${props => props.theme.color.nav02};
  > * {
    padding-left: 28px;
    padding-right: 28px;
  }
`;

export default {
  PrimaryBar,
  PrimaryBarIcon,
  PrimaryBarTitle,
  SecondaryBar,
  PrimaryBarNavItem
};
