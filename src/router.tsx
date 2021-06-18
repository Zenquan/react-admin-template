import React, { lazy, Component, Suspense } from "react";
import {
  withRouter,
  BrowserRouter,
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
    component: lazy(() => import(/* webpackChunkName: "home" */ "pages/Home")),
    path: "/",
  },
  {
    component: lazy(
      () => import(/* webpackChunkName: "login" */ "pages/Login")
    ),
    path: "/login",
  },
  {
    component: lazy(
      () =>
        import(
          /* webpackChunkName: "table-basicTable" */ "pages/Table/BasicTable"
        )
    ),
    path: "/table/basicTable",
  },
  {
    component: lazy(
      () =>
        import(
          /* webpackChunkName: "table-advancedTable" */ "pages/Table/AdvancedTable"
        )
    ),
    path: "/table/advancedTable",
  },
  {
    component: lazy(
      () =>
        import(
          /* webpackChunkName: "table-asynchronousTable" */ "pages/Table/AsynchronousTable"
        )
    ),
    path: "/table/asynchronousTable",
  },
  {
    component: lazy(
      () =>
        import(
          /* webpackChunkName: "chart-shadowchart" */ "pages/Chart/ShadowChart"
        )
    ),
    path: "/chart/shadowChart",
  },
  {
    component: lazy(
      () => import(/* webpackChunkName: "not-found" */ "pages/NotFound")
    ),
  },
];

const isProd = process.env.NODE_ENV === 'production';
(window as any).$origin = `${window.location.origin}${isProd ? '' : '/#'}`;

const Router: any = !isProd
  ? HashRouter
  : BrowserRouter;

const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />;
class AppRouter extends Component<RouteComponentProps> {
  render() {
    return (
      <Router>
        <Suspense
          fallback={
            <Space size="large" className="loading all-center">
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
      </Router>
    );
  }
}

export default withRouter(AppRouter);
