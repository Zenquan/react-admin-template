import React, { FC, useEffect, useState, memo } from 'react';
import { Menu, Layout, Dropdown } from 'antd';
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  TableOutlined,
  BarChartOutlined,
  AppstoreOutlined,
  FileExcelOutlined
} from '@ant-design/icons';
import { Link } from 'react-router-dom';
import { useStore } from 'stores'
import { UserInfoType } from 'stores/login';
import style from './index.module.less'
import classNames from 'classnames';
import { home } from 'services';
import AppRouter from '../../router';

const { Header, Sider, Content, Footer } = Layout;
const { SubMenu } = Menu;
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
  const selectMenuItem = (path: string) => {
    history.push(path)
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

  const renderSlider = () => {
    const renderIcon = (icon: string) => {
      if (icon === 'table') {
        return <TableOutlined />
      } else if (icon === 'chart') {
        return <BarChartOutlined />
      } else if (icon === 'components') {
        return <AppstoreOutlined />
      } else if (icon === 'excel') {
        return <FileExcelOutlined />
      }
    }

    return <Sider trigger={null} collapsible
          collapsed={collapsed}
          className={style['home']}>
        <Menu className={style['menus']}
            defaultSelectedKeys={['1']}
            defaultOpenKeys={['sub1']}
            mode="inline"
            theme="dark"
          >
            {
              menus && menus.map((menu: CompItemType) => {
                const {component, path, sub, icon} = menu
                return (
                  <SubMenu key={path} icon={icon && renderIcon(icon)} title={component}>
                    {
                      sub && sub.map(((s: CompItemType) => {
                        const {component, path, key} = s
                        return (<Menu.Item key={key}
                                  onClick={e => selectMenuItem(path)}>
                                {component}
                              </Menu.Item>)
                      }))
                    }
                  </SubMenu>
                )
              })
            }
          </Menu>
      </Sider>
  }

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
        {
          (location.href === 'http://127.0.0.1:8000/#/' || location.href === 'https://react-admin-template.vercel.app/#/')
            ? (
              <p style={{ fontSize: 30, fontWeight: 500, margin: 20, }}>
                欢迎来到React Admin后台系统
              </p>
            ) : <AppRouter/>
        }
      </Content>
      <Footer style={{textAlign: 'center'}}>react-admin-template ©2021 Created by Jomsou@qq.com <a target='_blank' href='https://github.com/zenquan/react-admin-template'>github地址</a></Footer>
    </>
  )

  useEffect(() => {
    initUserInfo(getMenus);
  }, [])

  return (
    <Layout>
      {renderSlider()}
      <Layout className={style["site-layout"]}>
          {renderContent()}
        </Layout>
    </Layout>
  );
};

export default memo(Home);