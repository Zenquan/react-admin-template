# 账号数据
```
现在采用mock数据, 都是模拟数据

管理员
账号：admin
密码：admin

运营
账号：zenquan
密码：zenquan
```
## 后端接口
- login
 ```js
  {
    ret: '0',
    msg: '成功',
    data: {
      permissions: [
        'login',
        ...
      ],
      role: '系统管理员',
      roleType: 1,   // 1 管理员 2 运营人员 0 游客，
      uid: 1,
      userName: '系统管理员',
      avatar: ''
    }
  }
 ```
- menus

```js
// roleType = 1
{
  ret: '0',
  msg: '成功',
  menus: [
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
    }
  ]
}
```
 ```