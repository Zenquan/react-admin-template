import React, { lazy, Suspense } from 'react';
import { withRouter, Switch, RouteComponentProps } from 'react-router-dom';
import { StaticContext } from 'react-router';
import { Spin, Space } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';
import random from 'number-random';
import CommonRoute from '/@/components/CommonRoute';
import Dashboard from '/@/pages/Dashboard';
import EditableTable from '/@/pages/Table/EditableTable';
import DragSortingTable from '/@/pages/Table/DragSortingTable';
import LineChart from '/@/pages/Chart/LineChart';
import PieChart from '/@/pages/Chart/PieChart';
import RichText from '/@/pages/Components/RichText';
import Markdown from '/@/pages/Components/Markdown';
import JsonEditor from '/@/pages/Components/JsonEditor';
import ExcelExport from '/@/pages/Excel/Export';
import NotFound from '/@/pages/NotFound';

const routes: Array<{
  component:
    | React.ComponentType<any>
    | React.ComponentType<RouteComponentProps<any, StaticContext, unknown>>;
  path?: string;
}> = [
  {
    component: Dashboard,
    path: '/dashboard',
  },
  {
    component: EditableTable,
    path: '/table/editableTable',
  },
  {
    component: DragSortingTable,
    path: '/table/dragSortingTable',
  },
  {
    component: LineChart,
    path: '/chart/lineChart',
  },
  {
    component: PieChart,
    path: '/chart/pieChart',
  },
  {
    component: RichText,
    path: '/components/richText',
  },
  {
    component: Markdown,
    path: '/components/markdown',
  },
  {
    component: JsonEditor,
    path: '/components/jsonEditor',
  },
  {
    component: ExcelExport,
    path: '/excel/export',
  },
  {
    component: NotFound,
  },
];

const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />;
const AppRouter = () => (
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
            path?: string;
          }) => {
            const key = random(100, 999),
              { component, path } = route;
            // @ts-ignore
            return <CommonRoute path={path} key={key} exact component={component} />;
          },
        )}
    </Switch>
  </Suspense>
);

export default withRouter(AppRouter);
