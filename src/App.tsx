import React, { FC, Suspense } from 'react';
import { Route, Switch, HashRouter } from 'react-router-dom';
import { Spin, Space } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';
import './App.css';
import { hot } from 'react-hot-loader/root';
import { Provider } from 'mobx-react';
import { store, StoreContext } from 'stores';
import Login from './pages/Login';
import Home from './pages/Home';

const antIcon = <LoadingOutlined style={{ fontSize: 24, }} spin />;

const App: FC = () => {
  return (
    <Provider {...store} className="App">
      <StoreContext.Provider value={store}>
        <HashRouter>
          <Suspense fallback={
            <Space size="large" className="loading all-center">
              <Spin indicator={antIcon}
                size="large"
                tip="加载中"/>
            </Space>
          }>
            <Switch>
                <Route path='/login' component={Login}/>
                <Route path='/' component={Home}/>
            </Switch>
          </Suspense>
        </HashRouter>
      </StoreContext.Provider>
    </Provider>
  );
};

export default hot(App);