import { Injectable } from '@nestjs/common';

@Injectable()
export class MenusService {
  menus(roleType) {
    let result = {
      ret: '0',
      msg: '成功',
      data: {
        menus: []
      },
    }

    if (roleType === '1') {
      result.data.menus = [
      {
        component: '表格',
        path: '/table',
        key: '/table',
        sub: [{
            component: '基本表格',
            path: '/table/basicTable',
            key: '/table/basicTable'
          },
          {
            component: '高级表格',
            path: '/table/advancedTable',
            key: '/table/advancedTable'
          },
          {
            component: '异步表格',
            path: '/table/asynchronousTable',
            key: '/table/asynchronousTable'
          },
        ]
      }, {
        component: '图表',
        path: '/chart',
        key: '/chart',
        sub: [{
            component: '渐变堆叠面积图',
            path: '/chart/shadowChart',
            key: '/chart/shadowChart'
          },
        ]
      }]
    } else if (roleType === '2') {
      result.data.menus = [
        {
          component: 'BasicTable',
          path: '/table/basicTable',
          key: '/table/basicTable'
        },
      ]
    }

    return result
  }
}
