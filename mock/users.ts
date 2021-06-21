const getUsers = (userName: string, passWord: string, remember: boolean) => {
  if (userName === 'admin' && passWord === 'admin') {
    return {
      ret: '0',
      msg: '成功',
      data: {
        permissions: ['login', 'table', 'chart', 'components'],
        role: '系统管理员',
        roleType: 1, // 1 管理员 2 运营人员 0 游客，
        uid: 1,
        userName: '系统管理员',
        avatar:
          'https://cdn.jsdelivr.net/gh/zenquan/diagrams@master/img/头像.jpeg',
        remember,
      },
    };
  } else if (userName === 'zenquan' && passWord === 'zenquan') {
    return {
      ret: '0',
      msg: '成功',
      data: {
        permissions: ['login', 'table'],
        role: '运营人员',
        roleType: 2, // 1 管理员 2 运营人员 0 游客，
        uid: 2,
        userName: '运营人员',
        avatar:
          'https://cdn.jsdelivr.net/gh/zenquan/diagrams@master/img/头像.jpeg',
        remember,
      },
    };
  } else {
    return {
      ret: '',
      msg: '失败',
    };
  }
}

export default getUsers;