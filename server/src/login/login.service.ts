import { Injectable } from '@nestjs/common';

@Injectable()
export class LoginService {
  login(userName, passWord, remember) {
    if (userName === 'admin' && passWord === 'admin') {
      return {
        ret: '0',
        msg: '成功',
        data: {
          permissions: ['login'],
          role: '系统管理员',
          roleType: 1, // 1 管理员 2 运营人员 0 游客，
          uid: 1,
          userName: '系统管理员',
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
}
