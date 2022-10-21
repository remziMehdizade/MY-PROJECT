import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [    ConfigModule.forRoot({ isGlobal: true }),
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
    ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
