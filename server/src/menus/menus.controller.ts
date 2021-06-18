import { Controller, HttpCode, Get, Query } from '@nestjs/common';
import { MenusService } from './menus.service';

@Controller('menus')
export class MenusController {
  constructor(private readonly MenusService: MenusService) {}

  @Get()
  @HttpCode(200)
  menus(@Query('roleType') roleType) {
    return this.MenusService.menus(roleType);
  }
}
