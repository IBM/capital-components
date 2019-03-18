import {
  BannerRibbon,
  DataTable,
  DropMenu,
  DropMenuItem,
  Grid,
  Icon,
  Popover,
  PushOver,
  NavigationBar,
  Tab,
  TabsV2,
  ScrollRow,
  Col
} from "@fss/components";
import {
  ContentWrapper,
  MainWrapper,
  VerticalScrollableContent,
  Flex,
  ContentBottomPadding
} from "@fss/components/lib/primitives/elements";
import { styled } from "@fss/components/lib/support/theme";
import MessagesIcon from "@fss/icons/dist/svg/email_24";
import UserIcon from "@fss/icons/dist/svg/user_64";
import FilterIcon from "@fss/icons/dist/svg/filter_64";
import { action } from "@storybook/addon-actions";
import { storiesOf } from "@storybook/react";
import { DataTable as CCDataTable, PaginationV2, Button } from "carbon-components-react";
import React, { ComponentPropsWithoutRef, useRef } from "react";
import { matchPath } from "react-router";
import { Link } from "react-router-dom";
import { Omit } from "type-zoo";
import useReactRouter from "use-react-router";
import withExternalWindow from "../../storybook-addons/external-window";
import useToggle from "../../src/hooks/useToggle";
import { Heading } from "@fss/components/lib/primitives/text";

const {
  PrimaryBar,
  PrimaryBarIcon,
  PrimaryBarNavItem,
  PrimaryBarTitle,
  SecondaryBar,
  SecondaryBarIcon,
  FooterBar,
  FooterBarIcon
} = NavigationBar;

const stories = storiesOf("Layout|General", module).addDecorator(withExternalWindow());

const columns: any[] = [
  {
    key: "name",
    isSortable: false,
    header: "Name" // Or could be a react element
  },
  {
    key: "rating",
    header: "Rating", // Or could be a react element
    isSortable: true
  },
  {
    key: "date",
    header: <div>Date</div>, // Or could be a react element
    content: ({ row, colKey }) => <div>Prefix: {row[colKey].toString()}</div>
  }
];

const rows = [
  {
    name: "item1",
    rating: 5,
    date: new Date()
  },
  {
    name: "item2",
    rating: 1,
    date: new Date()
  },
  {
    name: "item3",
    rating: 2,
    date: new Date()
  }
];

const FlexUL = Flex.withComponent("ul");

const renderMobileMenuContent = ({ navSection, getWrapperProps }) => (
  <div {...getWrapperProps()}>
    <FlexUL
      direction="column"
      cssWithTheme={({ theme }) => `
        color: ${theme.color.inverse01};
        flex: 1 1 auto;
        overflow: auto;
      `}
    >
      {navSection}
    </FlexUL>
  </div>
);

const ReactRouterTab: React.FunctionComponent<{
  path: string;
  children: React.ReactNode;
}> = React.forwardRef((props, ref) => {
  const { location } = useReactRouter();
  const result = matchPath(location.pathname, props);

  return (
    <Tab {...props} isSelected={!!result} ref={ref}>
      {({ tabProps }) => (
        <Link to={props.path} {...tabProps}>
          {props.children}
        </Link>
      )}
    </Tab>
  );
});

const PrimaryBarItemIconLink = PrimaryBarIcon.withComponent(Link);

const ReactRouterPrimaryLink: React.FunctionComponent<
  {
    path: string;
  } & Omit<ComponentPropsWithoutRef<typeof Link>, "to" | "isSelected">
> = ({ path, ...otherProps }) => {
  const { location } = useReactRouter();
  const result = matchPath(location.pathname, { path });

  return <PrimaryBarNavItem to={path} isSelected={!!result} {...otherProps} asComp={Link} />;
};

const ReactRouterPrimaryLinkIcon: React.FunctionComponent<
  {
    path: string;
  } & Omit<ComponentPropsWithoutRef<typeof PrimaryBarItemIconLink>, "to" | "isSelected">
> = ({ path, ...otherProps }) => {
  const { location } = useReactRouter();
  const result = matchPath(location.pathname, { path });

  return <PrimaryBarItemIconLink to={path} isSelected={!!result} {...otherProps} />;
};

const TableToolbarSearch = styled(CCDataTable.TableToolbarSearch)`
  border: 1px solid ${({ theme }) => theme.colors.ui04};
`;

const IBMTitle = styled.span`
  font-weight: ${props => props.theme.fonts.weights.regular};
  margin-right: 0.25rem;
`;

const Footer = styled(NavigationBar.SecondaryBar)`
  direction: ltr !important;
  justify-content: flex-end;
`;

stories.add("Basic", () => {
  const [showOptions, toggleShowOptions] = useToggle(false);
  const [showMenu, toggleShowMenu] = useToggle(false);
  const [showPushOver, toggleShowPushOver] = useToggle(false);
  const [bannerExpanded, toggleBannerExpanded] = useToggle(false);
  const menuRef = useRef(null);
  return (
    <>
      <div ref={menuRef} />
      <MainWrapper>
        <PrimaryBar
          titleSection={
            <PrimaryBarTitle>
              <IBMTitle>IBM</IBMTitle>
              <span>Project name</span>
            </PrimaryBarTitle>
          }
          navSection={
            <>
              <ReactRouterPrimaryLink path="/mail2">Some Nav 1</ReactRouterPrimaryLink>
              <ReactRouterPrimaryLink path="/mail3">Some Nav 1</ReactRouterPrimaryLink>
            </>
          }
          rightSection={
            <>
              <PrimaryBarIcon onClick={() => toggleShowPushOver()}>
                <Icon size="medium" title="notifications" circleColor="white" color="black">
                  9+
                </Icon>
              </PrimaryBarIcon>
              <ReactRouterPrimaryLinkIcon path="/mail">
                <Icon size="medium" title="email">
                  <MessagesIcon />
                </Icon>
              </ReactRouterPrimaryLinkIcon>
              <Popover
                reference={({ ref }) => (
                  <PrimaryBarIcon innerRef={ref} onClick={() => toggleShowOptions()}>
                    <Icon size="medium" title="User options">
                      <UserIcon />
                    </Icon>
                  </PrimaryBarIcon>
                )}
                placement="bottom-end"
                show={showOptions}
              >
                <DropMenu>
                  <DropMenuItem>Item 1</DropMenuItem>
                  <DropMenuItem>Item 2</DropMenuItem>
                  <DropMenuItem seperator="top">Item 3</DropMenuItem>
                </DropMenu>
              </Popover>
            </>
          }
          showMenu={showMenu}
          onMenuToggle={() => toggleShowMenu()}
          mobileMenuRef={menuRef}
          renderMobileMenuContent={renderMobileMenuContent}
        />
        <SecondaryBar>
          <TabsV2>
            <ReactRouterTab path="/el1">Element 1</ReactRouterTab>
            <ReactRouterTab path="/el2">Element 2</ReactRouterTab>
          </TabsV2>
        </SecondaryBar>
        <ContentWrapper>
          <VerticalScrollableContent>
            <BannerRibbon.Ribbon
              title="Some Title <Could be component>"
              supertitle="breadcrumb/to/something"
              expandable
              isExpanded={bannerExpanded}
              onExpandClick={toggleBannerExpanded}
              floatRightOfTitle={
                <div>
                  <Button>Click me!</Button>
                </div>
              }
            />
            <Flex direction="row">
              <Grid isContainer verticalPadding="top lg" preventShrink={false}>
                <DataTable
                  columns={columns}
                  rows={rows}
                  getRowIdentifier={row => row.name}
                  renderToolbar={<TableToolbarSearch onChange={action("Searching")} />}
                />
                <PaginationV2
                  page={1}
                  totalItems={50}
                  pageSize={10}
                  pageSizes={[10, 50, 100]}
                  onChange={action("pagination change")}
                />
                <ContentBottomPadding />
              </Grid>
              <PushOver
                isOpen={showPushOver}
                position="right"
                closePosition="right"
                closable
                onCloseClick={() => toggleShowPushOver()}
                fullScreenMode={false}
              >
                Some content
              </PushOver>
            </Flex>
          </VerticalScrollableContent>
        </ContentWrapper>
      </MainWrapper>
    </>
  );
});

stories.add("Sidebar section", () => {
  const [showOptions, toggleShowOptions] = useToggle(false);
  const [showMenu, toggleShowMenu] = useToggle(false);
  const menuRef = useRef(null);
  return (
    <>
      <div ref={menuRef} />
      <MainWrapper>
        <PrimaryBar
          titleSection={
            <PrimaryBarTitle>
              <IBMTitle>IBM</IBMTitle>
              <span>Project name</span>
            </PrimaryBarTitle>
          }
          navSection={
            <>
              <ReactRouterPrimaryLink path="/mail2">Some Nav 1</ReactRouterPrimaryLink>
              <ReactRouterPrimaryLink path="/mail3">Some Nav 1</ReactRouterPrimaryLink>
            </>
          }
          rightSection={
            <>
              <PrimaryBarIcon>
                <Icon size="medium" title="notifications" circleColor="white" color="black">
                  9+
                </Icon>
              </PrimaryBarIcon>
              <ReactRouterPrimaryLinkIcon path="/mail">
                <Icon size="medium" title="email">
                  <MessagesIcon />
                </Icon>
              </ReactRouterPrimaryLinkIcon>
              <Popover
                reference={({ ref }) => (
                  <PrimaryBarIcon innerRef={ref} onClick={() => toggleShowOptions()}>
                    <Icon size="medium" title="User options">
                      <UserIcon />
                    </Icon>
                  </PrimaryBarIcon>
                )}
                placement="bottom-end"
                show={showOptions}
              >
                <DropMenu>
                  <DropMenuItem>Item 1</DropMenuItem>
                  <DropMenuItem>Item 2</DropMenuItem>
                  <DropMenuItem seperator="top">Item 3</DropMenuItem>
                </DropMenu>
              </Popover>
            </>
          }
          showMenu={showMenu}
          onMenuToggle={() => toggleShowMenu()}
          mobileMenuRef={menuRef}
          renderMobileMenuContent={renderMobileMenuContent}
        />
        <SecondaryBar>
          <TabsV2>
            <ReactRouterTab path="/el1">Element 1</ReactRouterTab>
            <ReactRouterTab path="/el2">Element 2</ReactRouterTab>
          </TabsV2>
        </SecondaryBar>
        <ContentWrapper>
          <VerticalScrollableContent allowShrink>
            <BannerRibbon.Ribbon
              title="INQUIRIES_TITLE"
              floatRightOfTitle={
                <ScrollRow>
                  <Col size={2}>
                    <Heading level="2">Header 1</Heading>
                    <Flex alignment="vertical center">Some other content</Flex>
                  </Col>
                  <Col size={2}>
                    <Heading level="2">Header 2</Heading>
                    <Flex alignment="vertical center">Some other content</Flex>
                  </Col>
                  <Col size={2}>
                    <Heading level="2">Header 3</Heading>
                    <Flex alignment="vertical center">Some other content</Flex>
                  </Col>
                  <Col size={2}>
                    <Heading level="2">Header 4</Heading>
                    <Flex alignment="vertical center">Some other content</Flex>
                  </Col>
                </ScrollRow>
              }
            />
            <Grid isContainer>
              <Col size="all">
                <TabsV2 alignment="flex-start" underscoreHeight="thin">
                  <ReactRouterTab path="/el1">Element 1</ReactRouterTab>
                  <ReactRouterTab path="/el2">Element 2</ReactRouterTab>
                </TabsV2>
              </Col>
              <Col size="1/3" separator="right">
                Some sidebar content
              </Col>
              <Col size="1/3">
                <div>Some main content</div>
                <div>Some main content</div>
                <div>Some main content</div>
                <div>Some main content</div>
                <div>Some main content</div>
                <div>Some main content</div>
                <div>Some main content</div>
                <div>Some main content</div>
                <div>Some main content</div>
                <div>Some main content</div>
                <div>Some main content</div>
                <div>Some main content</div>
                <div>Some main content</div>
                <div>Some main content</div>
                <div>Some main content</div>
                <div>Some main content</div>
                <div>Some main content</div>
                <div>Some main content</div>
                <div>Some main content</div>
                <div>Some main content</div>
                <div>Some main content</div>
                <div>Some main content</div>
                <div>Some main content</div>
                <div>Some main content</div>
                <div>Some main content</div>
                <div>Some main content</div>
                <div>Some main content</div>
                <div>Some main content</div>
              </Col>
              <Col size="1/3">Some sidebar content</Col>
            </Grid>
          </VerticalScrollableContent>
          <FooterBar>
            <FooterBarIcon onClick={action("email")}>
              <Icon size="medium" title="email">
                <MessagesIcon />
              </Icon>
            </FooterBarIcon>
            <FooterBarIcon onClick={action("filter")} isSelected={true}>
              <Icon size="medium" title="filter">
                <FilterIcon />
              </Icon>
            </FooterBarIcon>
          </FooterBar>
        </ContentWrapper>
      </MainWrapper>
    </>
  );
});
