import { Module } from '@nestjs/common';
import { LoginModule } from './login/login.module';
import { MenusModule } from './menus/menus.module';

@Module({
  imports: [LoginModule, MenusModule],
})
export class AppModule {}
