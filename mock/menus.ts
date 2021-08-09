import CN_MENUS from './lang/cn.json';
import EN_MENUS from './lang/en.json';

const getMenus = (roleType: string, lng: string) => {
  let result: {
    ret: string,
    msg: string
    data: {
      menus: any
    }
  } = {
    ret: '0',
    msg: '成功',
    data: {
      menus: []
    },
  }

  if (roleType === '1') {
    if (lng === 'cn') {
      result.data.menus = CN_MENUS.admin
    } else {
      result.data.menus = EN_MENUS.admin
    }

  } else if (roleType === '2') {
    if (lng === 'cn') {
      result.data.menus = CN_MENUS.zenquan
    } else {
      result.data.menus = EN_MENUS.zenquan
    }
  }

  return result
}

export default getMenus;