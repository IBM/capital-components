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
  Col,
  Mobile
} from "capital-components";
import {
  ContentWrapper,
  MainWrapper,
  VerticalScrollableContent,
  Flex,
  ContentBottomPadding
} from "capital-components/lib/primitives/elements";
import { styled } from "capital-components/lib/support/theme";
import MessagesIcon from "../../src/fss-icons/email_24";
import UserIcon from "../../src/fss-icons/user_64";
import FilterIcon from "../../src/fss-icons/filter_64";
import { action } from "@storybook/addon-actions";
import { storiesOf } from "@storybook/react";
import { DataTable as CCDataTable, Pagination, Button, Dropdown } from "carbon-components-react";
import React, { ComponentPropsWithoutRef, useRef } from "react";
import { matchPath } from "react-router";
import { Link } from "react-router-dom";
import { Omit } from "type-zoo";
import useReactRouter from "use-react-router";
import withExternalWindow from "../../storybook-addons/external-window";
import useToggle from "../../src/hooks/useToggle";
import { ProductiveHeading02 } from "capital-components/lib/primitives/text";
import { LoremIpsum } from "lorem-ipsum";

const lorem = new LoremIpsum();

const {
  PrimaryBar,
  PrimaryBarIcon,
  PrimaryBarNavItem,
  PrimaryBarTitle,
  SecondaryBar,
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
}> = props => {
  const { location } = useReactRouter();
  const result = matchPath(location.pathname, props);

  return (
    <Tab {...props} isSelected={!!result} refName="innerRef">
      {({ tabProps }) => (
        <Link to={props.path} {...tabProps}>
          {props.children}
        </Link>
      )}
    </Tab>
  );
};

const PrimaryBarItemIconLink = PrimaryBarIcon.withComponent(Link);

const ReactRouterPrimaryLink: React.FunctionComponent<
  {
    path: string;
    children: React.ReactNode;
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

const navOptions = [
  {
    path: "/mail1",
    content: "Some Nav 1"
  },
  {
    path: "/mail2",
    content: "Some Nav 2"
  }
];

const SelectedTitle = () => {
  const { location } = useReactRouter();
  const selectedNav = navOptions.find(item => {
    const result = matchPath(location.pathname, { path: item.path });
    return !!result;
  });

  return (
    <Mobile>
      {isMobile =>
        isMobile && selectedNav ? (
          selectedNav.content
        ) : (
          <>
            <IBMTitle>IBM</IBMTitle>
            <span>Project name</span>
          </>
        )
      }
    </Mobile>
  );
};

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
              <SelectedTitle />
            </PrimaryBarTitle>
          }
          navSection={
            <>
              {navOptions.map(item => (
                <ReactRouterPrimaryLink path={item.path}>{item.content}</ReactRouterPrimaryLink>
              ))}
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
                <Col size="all">
                  <DataTable
                    columns={columns}
                    rows={rows}
                    getRowIdentifier={row => row.name}
                    renderToolbar={<TableToolbarSearch onChange={action("Searching")} />}
                  />
                  <Pagination
                    page={1}
                    totalItems={50}
                    pageSize={10}
                    pageSizes={[10, 50, 100]}
                    onChange={action("pagination change")}
                  />
                  <ContentBottomPadding />
                </Col>
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
          <VerticalScrollableContent>
            <BannerRibbon.Ribbon
              title="INQUIRIES_TITLE"
              floatRightOfTitle={
                <ScrollRow>
                  <Col size={2}>
                    <ProductiveHeading02>Header 1</ProductiveHeading02>
                    <Flex alignment="vertical center">Some other content</Flex>
                  </Col>
                  <Col size={2}>
                    <ProductiveHeading02>Header 2</ProductiveHeading02>
                    <Flex alignment="vertical center">Some other content</Flex>
                  </Col>
                  <Col size={2}>
                    <ProductiveHeading02>Header 3</ProductiveHeading02>
                    <Flex alignment="vertical center">Some other content</Flex>
                  </Col>
                  <Col size={2}>
                    <ProductiveHeading02>Header 4</ProductiveHeading02>
                    <Flex alignment="vertical center">Some other content</Flex>
                  </Col>
                </ScrollRow>
              }
            />
            <Grid isContainer allowGrow preventShrink>
              <Col size="all">
                <TabsV2 alignment="flex-start" underscoreHeight="thin">
                  <ReactRouterTab path="/el1">Element 1</ReactRouterTab>
                  <ReactRouterTab path="/el2">Element 2</ReactRouterTab>
                </TabsV2>
              </Col>
              <Col size="1/3" separator="fullscreen right">
                {lorem.generateParagraphs(1)}
              </Col>
              <Col size="1/3" separator="fullscreen right">
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

stories.add("Sidebar section with small col", () => {
  return (
    <MainWrapper>
      <ContentWrapper>
        <VerticalScrollableContent>
          <Grid isContainer allowGrow>
            <Col size={3} separator="fullscreen right">
              {lorem.generateParagraphs(7)}
            </Col>
            <Col size={9} css="background-color: red;">
              <div>Some main content</div>
            </Col>
          </Grid>
        </VerticalScrollableContent>
      </ContentWrapper>
    </MainWrapper>
  );
});

stories.add("BannerRibbon with Vertical scroll", () => {
  return (
    <ContentWrapper>
      <VerticalScrollableContent>
        <BannerRibbon.Ribbon
          title="INQUIRIES_TITLE"
          floatRightOfTitle={
            <BannerRibbon.DropdownWrapper>
              <Dropdown
                items={["Option 1", "Option 2", "Option 3"]}
                onChange={action("onChange")}
              />
            </BannerRibbon.DropdownWrapper>
          }
        />
        <Grid isContainer allowGrow preventShrink>
          <Col size="all">
            <TabsV2 alignment="flex-start" underscoreHeight="thin">
              <ReactRouterTab path="/el1">Element 1</ReactRouterTab>
              <ReactRouterTab path="/el2">Element 2</ReactRouterTab>
            </TabsV2>
          </Col>
          <Col size="1/4" separator="fullscreen right">
            {lorem.generateParagraphs(1)}
          </Col>
          <Col size="1/4" separator="fullscreen right">
            <div>Some main content</div>
          </Col>
          <Col size="1/4">Some sidebar content</Col>
          <Col size="1/4">Just another column (as columns should come in powers of 2)</Col>
        </Grid>
      </VerticalScrollableContent>
    </ContentWrapper>
  );
});
