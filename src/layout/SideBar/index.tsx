import React, { FC } from 'react';
import { Menu, Layout } from 'antd';
import {
  TableOutlined,
  BarChartOutlined,
  AppstoreOutlined,
  FileExcelOutlined,
  MehOutlined,
  HomeOutlined
} from '@ant-design/icons';
import style from './index.module.less'

const { Sider } = Layout;
const { SubMenu } = Menu;

interface ISlideBar {
  history: any;
  menus: Array<CompItemType>;
  collapsed: boolean;
}

const SlideBar: FC<ISlideBar> = ({
  history,
  menus,
  collapsed
}: ISlideBar) => {
  const renderIcon = (icon: string) => {
    if (icon === 'table') {
      return <TableOutlined />
    } else if (icon === 'chart') {
      return <BarChartOutlined />
    } else if (icon === 'components') {
      return <AppstoreOutlined />
    } else if (icon === 'excel') {
      return <FileExcelOutlined />
    } else if (icon === '404') {
      return <MehOutlined />
    } else if (icon === 'dashboard') {
      return <HomeOutlined />
    }
  }

  const selectMenuItem = (path: string) => {
    history.push(path)
  }

  return <Sider trigger={null} collapsible
        collapsed={collapsed}>
      <Menu className={style['menus']}
          defaultSelectedKeys={['/dashboard']}
          // defaultOpenKeys={['sub1']}
          mode="inline"
          theme="dark"
        >
          {
            menus && menus.map((menu: CompItemType) => {
              const {component, path, sub, icon} = menu
              return (
                sub && sub.length
                  ? <SubMenu key={path} icon={icon && renderIcon(icon)} title={component}>
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
                  : <Menu.Item key={path}
                      icon={icon && renderIcon(icon)}
                      onClick={e => selectMenuItem(path)}>
                    {component}
                  </Menu.Item>
              )
            })
          }
        </Menu>
    </Sider>
}

export default SlideBar;
