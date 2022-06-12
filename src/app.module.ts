import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeOrm';
import { UserController } from './user/user.controller';
import { UserModule } from './user/user.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'users_db',
      port: 3306,
      username: 'root',
      password: 'root',
      database: 'users',
      autoLoadEntities: true,
      synchronize: true,
    }),
    UserModule,
  ],
  controllers: [UserController],
  providers: [],
})
export class AppModule {}
