import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './restapi/user/user.module';
import { UserinfoModule } from './restapi/userinfo/userinfo.module';
import { RoleModule } from './restapi/role/role.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { User } from './restapi/user/entities/user.entity';
import { Userinfo } from './restapi/userinfo/entities/userinfo.entity';
@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRootAsync({
      useFactory: () => ({
        type: 'mysql',
        host: 'localhost',
        port: 13306,
        username: 'root',
        password: '12345678',
        database: 'my-project',
        entities: [User,Userinfo],
        synchronize: true,
      }),
    }),
    UserModule,
    UserinfoModule,
    RoleModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
