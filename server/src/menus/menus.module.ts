import { Module } from '@nestjs/common';
import { MenusController } from './menus.controller';
import { MenusService } from './menus.service';

@Module({
  imports: [],
  controllers: [MenusController],
  providers: [MenusService],
})
export class MenusModule {}
