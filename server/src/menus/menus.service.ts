import { Injectable } from '@nestjs/common';
import { getMenus } from '../../../mock'

@Injectable()
export class MenusService {
  menus(roleType) {
    return getMenus(roleType)
  }
}
