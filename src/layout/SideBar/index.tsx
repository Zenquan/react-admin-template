import React, { FC, useState, useEffect } from 'react';
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
  const [openKeys, setOpenKeys] = useState<string[]>([])
  const [selectedKeys, setSelectedKeys] = useState<string[]>([])

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

  const onOpenChange = (item: string[]) => {
    setOpenKeys(item)
  }

  const onMenuItemClick = (item: { keyPath: string[], key: string }) => {
    sessionStorage.setItem('openKeys', JSON.stringify(item.keyPath))
    sessionStorage.setItem('selectedKeys', JSON.stringify([item.key]))
    setSelectedKeys([item.key])
    setOpenKeys(item.keyPath)
  }

  useEffect(() => {
    const openKeys = sessionStorage.getItem('openKeys'),
    selectedKeys = sessionStorage.getItem('selectedKeys')
    setOpenKeys(openKeys ? JSON.parse(openKeys) : [])
    setSelectedKeys(selectedKeys ? JSON.parse(selectedKeys) : [])
  }, [])

  return <Sider trigger={null} collapsible
        collapsed={collapsed}>
      <Menu className={style['menus']}
          defaultSelectedKeys={['dashboard']}
          openKeys={openKeys}
          selectedKeys={selectedKeys}
          mode="inline"
          theme="dark"
          // @ts-ignore
          onOpenChange={onOpenChange}
          onClick={onMenuItemClick}
        >
          {
            menus && menus.map((menu: CompItemType) => {
              const {component, key, path, sub, icon} = menu
              return (
                sub && sub.length
                  ? <SubMenu key={key} icon={icon && renderIcon(icon)} title={component}>
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
                  : <Menu.Item key={key}
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
