// declare type CompItemType =  {
//   component: string,
//   path: string,
//   key: string,
//   sub?: CompItemType[]
// }

const getMenus = (roleType: string) => {
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
    result.data.menus = [
    {
      component: '表格',
      path: '/table',
      key: '/table',
      icon: 'table',
      sub: [
        // {
        //   component: '基本表格',
        //   path: '/table/basicTable',
        //   key: '/table/basicTable'
        // },
        {
          component: '可编辑行表格',
          path: '/table/editableTable',
          key: '/table/editableTable'
        },
        {
          component: '拖拽排序表格',
          path: '/table/dragSortingTable',
          key: '/table/dragSortingTable'
        },
      ]
    }, {
      component: '图表',
      path: '/chart',
      key: '/chart',
      icon: 'chart',
      sub: [{
          component: '折线图',
          path: '/chart/lineChart',
          key: '/chart/lineChart'
        }, {
          component: '饼图',
          path: '/chart/pieChart',
          key: '/chart/pieChart'
        }
      ]
    }, {
      component: '组件',
      path: '/components',
      key: '/components',
      icon: 'components',
      sub: [{
          component: '富文本编辑器',
          path: '/components/richText',
          key: '/components/richText'
        }, {
          component: 'Markdown',
          path: '/components/markdown',
          key: '/components/markdown'
        }, {
          component: 'JSON编辑器',
          path: '/components/jsonEditor',
          key: '/components/jsonEditor'
        },
      ]
    }, {
      component: 'Excel',
      path: '/excel',
      key: '/excel',
      icon: 'excel',
      sub: [{
          component: '导出excel',
          path: '/excel/export',
          key: '/excel/export'
        },
      ]
    }]
  } else if (roleType === '2') {
    result.data.menus = [
      {
        component: '表格',
        path: '/table',
        key: '/table',
        icon: 'table',
        sub: [
          // {
          //   component: '基本表格',
          //   path: '/table/basicTable',
          //   key: '/table/basicTable'
          // },
          {
            component: '可编辑行表格',
            path: '/table/editableTable',
            key: '/table/editableTable'
          },
          {
            component: '拖拽排序表格',
            path: '/table/dragSortingTable',
            key: '/table/dragSortingTable'
          },
        ]
      },
      {
        component: '组件',
        path: '/components',
        key: '/components',
        icon: 'components',
        sub: [{
            component: '富文本编辑器',
            path: '/components/richText',
            key: '/components/richText'
          }
        ]
      }
    ]
  }

  return result
}

export default getMenus;