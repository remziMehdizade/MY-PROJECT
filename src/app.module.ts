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
import { PhotoModule } from './restapi/photo/photo.module';
import { ProfileModule } from './restapi/profile/profile.module';
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
        autoLoadEntities: true,//entities: [User,Userinfo],
        synchronize: true,
      }),
    }),
    UserModule,
    UserinfoModule,
    RoleModule,
    PhotoModule,
    ProfileModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
