import React, { lazy, Component, Suspense } from "react";
import {
  withRouter,
  HashRouter,
  Switch,
  RouteComponentProps,
} from "react-router-dom";
import { StaticContext } from "react-router";
import { Spin, Space } from "antd";
import { LoadingOutlined } from "@ant-design/icons";
import random from "number-random";
import CommonRoute from 'components/CommonRoute'

const routes: Array<{
  component:
    | React.ComponentType<any>
    | React.ComponentType<RouteComponentProps<any, StaticContext, unknown>>;
  path?: string
}> = [
  {
    component: lazy(
      () =>
        import(
          "pages/Dashboard"
        )
    ),
    path: "/dashboard",
  },
  {
    component: lazy(
      () =>
        import(
          "pages/Table/EditableTable"
        )
    ),
    path: "/table/editableTable",
  },
  {
    component: lazy(
      () =>
        import(
          "pages/Table/DragSortingTable"
        )
    ),
    path: "/table/dragSortingTable",
  },
  {
    component: lazy(
      () =>
        import(
          "pages/Chart/LineChart"
        )
    ),
    path: "/chart/lineChart",
  },
  {
    component: lazy(
      () =>
        import(
          "pages/Chart/PieChart"
        )
    ),
    path: "/chart/pieChart",
  },
  {
    component: lazy(
      () =>
        import(
          "pages/Components/RichText"
        )
    ),
    path: "/components/richText",
  },
  {
    component: lazy(
      () =>
        import(
          "pages/Components/Markdown"
        )
    ),
    path: "/components/markdown",
  },
  {
    component: lazy(
      () =>
        import(
          "pages/Components/JsonEditor"
        )
    ),
    path: "/components/jsonEditor",
  },
  {
    component: lazy(
      () =>
        import(
          "pages/Excel/Export"
        )
    ),
    path: "/excel/export",
  },
  {
    component: lazy(
      () => import("pages/NotFound")
    ),
  },
];

const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />;
class AppRouter extends Component<RouteComponentProps> {
  render() {
    return (
      <HashRouter>
        <Suspense
          fallback={
            <Space size="large" className="loading flex-all-center">
              <Spin indicator={antIcon} size="large" tip="加载中" />
            </Space>
          }
        >
          <Switch>
            {routes &&
              routes.map(
                (route: {
                  component:
                  | React.ComponentType<any>
                  | React.ComponentType<RouteComponentProps<any, StaticContext, unknown>>;
                  path?: string }) => {
                  const key = random(100, 999),
                    { component, path } = route;
                  return (
                    <CommonRoute
                      path={path}
                      key={key}
                      exact
                      component={component}
                    />
                  );
                }
              )}
          </Switch>
        </Suspense>
      </HashRouter>
    );
  }
}

export default withRouter(AppRouter);
