import React, { FC, useEffect, useState, memo } from 'react';
import { Menu, Layout, Dropdown } from 'antd';
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
} from '@ant-design/icons';
import { Link } from 'react-router-dom';
import { useStore } from 'stores';
import style from './index.module.less'
import classNames from 'classnames';
import { home } from 'services';
import AppRouter from 'components/Router';
import SideBar from 'layout/SideBar';

const { Header, Content, Footer } = Layout;
interface IHome {
  history: any
}

const Home: FC<IHome> = ({history}: IHome) => {
  const [collapsed, setCollapsed] = useState(false)
  const [userInfo, setUserInfo] = useState<UserInfoType>({
    avatar: '',
    userName: '',
    roleType: 0
  })
  const [menus, setMenus] = useState<Array<CompItemType> | null>(null)
  const { loginStore } = useStore()
  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };

  const initUserInfo = (fn: Function) => {
    const userInfoStorage = localStorage.getItem('userInfo');
    const userInfo = userInfoStorage ? JSON.parse(userInfoStorage) : loginStore.getUserInfo();
    setUserInfo(userInfo)
    userInfo.roleType && fn && fn(userInfo.roleType)
  }

  const getMenus = async (roleType: number) => {
    const data = await home.menus({params: {roleType}});
    console.log('data>>>', data);
    if (data.ret === '0') {
      const {menus} = data.data
      setMenus(menus)
    }
  }

  const notLogin = (
    <div>
      <Link to={{pathname: '/login', state: {from: location}}} style={{color: 'rgba(0, 0, 0, 0.65)'}}>登录</Link>&nbsp;
      <img src={''} alt=""/>
    </div>
  )

  const logout = () => {
    loginStore.toggleLogin(false)
    history.push('/login')
  }

  const headMenu = (
    <Menu>
      <Menu.Item key="1">
        <span onClick={logout}>退出登录</span>
      </Menu.Item>
    </Menu>
  );

  const login = (
    <Dropdown overlay={headMenu} trigger={['click']}>
      <img src={userInfo.avatar} alt=""
        className={style['avatar']}/>
    </Dropdown>
  )

  const renderContent = () => (
    <>
      <Header className={
          classNames(
            style["site-layout-background"],
            style['header']
          )}>
        {React.createElement(
            collapsed
              ? MenuUnfoldOutlined
              : MenuFoldOutlined,
        {
          className: 'trigger',
          onClick: toggleCollapsed,
        })}
        {loginStore.isLogin ? login : notLogin}
      </Header>
      <Content
        className={style["site-layout-background"]}
        style={{
          margin: '24px 16px',
          padding: 24,
          minHeight: 280,
        }}
      >
        <AppRouter/>
      </Content>
      <Footer style={{textAlign: 'center'}}>react-admin-template ©2021 Created by Jomsou@qq.com <a target='_blank' href='https://github.com/zenquan/react-admin-template'>github地址</a></Footer>
    </>
  )

  useEffect(() => {
    initUserInfo(getMenus);
  }, [])

  return (
    <Layout>
      {
        menus &&
          <SideBar menus={menus}
            collapsed={collapsed}
            history={history}
          />
      }
      <Layout className={style["site-layout"]}>
          {renderContent()}
        </Layout>
    </Layout>
  );
};

export default memo(Home);