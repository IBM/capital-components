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
  TabsV2
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
import { action } from "@storybook/addon-actions";
import { storiesOf } from "@storybook/react";
import { DataTable as CCDataTable, PaginationV2 } from "carbon-components-react";
import React, { ComponentPropsWithoutRef, useRef } from "react";
import { matchPath } from "react-router";
import { Link } from "react-router-dom";
import { Omit } from "type-zoo";
import useReactRouter from "use-react-router";
import withExternalWindow from "../../storybook-addons/external-window";
import useToggle from "../../src/hooks/useToggle";

const {
  PrimaryBar,
  PrimaryBarIcon,
  PrimaryBarNavItem,
  PrimaryBarTitle,
  SecondaryBar
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

const ReactRouterTab: React.FunctionComponent<{
  path: string;
  children: React.ReactNode;
}> = React.forwardRef((props, ref) => {
  const { location } = useReactRouter();
  const result = matchPath(location.pathname, props);

  return (
    <Tab isSelected={!!result} ref={ref}>
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

stories.add(
  "Basic",
  () => {
    const [showOptions, toggleShowOptions] = useToggle(false);
    const [showMenu, toggleShowMenu] = useToggle(false);
    const [showPushOver, toggleShowPushOver] = useToggle(false);
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
            mobileMenuContents={<>Hello dearest my old friend</>}
            mobileMenuRef={menuRef.current}
          />
          <SecondaryBar>
            <TabsV2>
              <ReactRouterTab path="/el1">Element 1</ReactRouterTab>
              <ReactRouterTab path="/el2">Element 2</ReactRouterTab>
            </TabsV2>
          </SecondaryBar>
          <ContentWrapper>
            <VerticalScrollableContent>
              <BannerRibbon.Ribbon title="Some Title <Could be component>" />
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
                  listMode={false}
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
  },
  {
    info: {
      disable: true
    }
  }
);
