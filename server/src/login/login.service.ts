import { Injectable } from '@nestjs/common';
import { getUsers } from '../../../mock'

@Injectable()
export class LoginService {
  login(userName, passWord, remember) {
    return getUsers(userName, passWord, remember)
  }
}
