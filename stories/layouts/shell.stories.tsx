import { Grid, Row, NavigationBar } from "capital-components";
import { action } from "@storybook/addon-actions";
import { HeaderContainer } from "carbon-components-react";
import React from "react";
import { Link } from "react-router-dom";
import withExternalWindow from "../../storybook-addons/external-window";
const { FooterBar, FooterBarIcon } = NavigationBar;
import {
  Content,
  Header,
  HeaderMenuButton,
  HeaderName,
  HeaderNavigation,
  HeaderMenu,
  HeaderMenuItem,
  HeaderGlobalBar,
  HeaderGlobalAction,
  HeaderPanel,
  HeaderSideNavItems,
  SkipToContent,
  SideNav,
  SideNavItems,
  SideNavLink,
  SideNavMenu,
  SideNavMenuItem,
  Switcher,
  SwitcherItem,
  SwitcherDivider
} from "carbon-components-react/lib/components/UIShell";
import { Search20, Notification20, AppSwitcher20, AddAlt20 } from "@carbon/icons-react";
import { storiesOf } from "@storybook/react";
import { LoremIpsum } from "lorem-ipsum";

const lorem = new LoremIpsum();

const stories = storiesOf("Layout|Shell", module).addDecorator(withExternalWindow());

stories.add("Basic", () => {
  return (
    <>
      <HeaderContainer
        render={({ isSideNavExpanded, onClickSideNavExpand }: any) => (
          <>
            <Header aria-label="IBM Platform Name">
              <SkipToContent />
              <HeaderMenuButton
                aria-label="Open menu"
                onClick={onClickSideNavExpand}
                isActive={isSideNavExpanded}
              />
              <HeaderName prefix="IBM" element={Link} to="/">
                [Platform]
              </HeaderName>
              <HeaderNavigation aria-label="IBM [Platform]">
                <HeaderMenuItem element={Link} to="/link-1">
                  Link 1
                </HeaderMenuItem>
                <HeaderMenuItem element={Link} to="/link-2">
                  Link 2
                </HeaderMenuItem>
                <HeaderMenuItem element={Link} to="/link-3">
                  Link 3
                </HeaderMenuItem>
                <HeaderMenu aria-label="Link 4" menuLinkName="Link 4">
                  <HeaderMenuItem element={Link} to="/sub-link-1">
                    Sub-link 1
                  </HeaderMenuItem>
                  <HeaderMenuItem element={Link} to="/sub-link-2">
                    Sub-link 2
                  </HeaderMenuItem>
                  <HeaderMenuItem element={Link} to="/sub-link-3">
                    Sub-link 3
                  </HeaderMenuItem>
                </HeaderMenu>
              </HeaderNavigation>
              <HeaderGlobalBar>
                <HeaderGlobalAction aria-label="Search" onClick={action("search click")}>
                  <Search20 />
                </HeaderGlobalAction>
                <HeaderGlobalAction
                  aria-label="Notifications"
                  onClick={action("notification click")}
                >
                  <Notification20 />
                </HeaderGlobalAction>
                <HeaderGlobalAction
                  aria-label="App Switcher"
                  onClick={action("app-switcher click")}
                >
                  <AppSwitcher20 />
                </HeaderGlobalAction>
              </HeaderGlobalBar>
              <SideNav
                aria-label="Side navigation"
                expanded={isSideNavExpanded}
                isPersistent={false}
              >
                <SideNavItems>
                  <HeaderSideNavItems>
                    <HeaderMenuItem href="#">Link 1</HeaderMenuItem>
                    <HeaderMenuItem href="#">Link 2</HeaderMenuItem>
                    <HeaderMenuItem href="#">Link 3</HeaderMenuItem>
                    <HeaderMenu aria-label="Link 4" menuLinkName="Link 4">
                      <HeaderMenuItem href="#">Sub-link 1</HeaderMenuItem>
                      <HeaderMenuItem href="#">Sub-link 2</HeaderMenuItem>
                      <HeaderMenuItem href="#">Sub-link 3</HeaderMenuItem>
                    </HeaderMenu>
                  </HeaderSideNavItems>
                </SideNavItems>
              </SideNav>
            </Header>
          </>
        )}
      />
      <Content
        id="main-content"
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          flex: "1 1 auto",
          overflow: "auto"
        }}
      >
        <Grid>
          <Row>{lorem.generateParagraphs(5)}</Row>
        </Grid>
      </Content>
      <FooterBar>
        <FooterBarIcon onClick={action("email")}>
          <AddAlt20 title="add" />
        </FooterBarIcon>
        <FooterBarIcon onClick={action("filter")} isSelected={true}>
          <AddAlt20 title="add" />
        </FooterBarIcon>
      </FooterBar>
    </>
  );
});
