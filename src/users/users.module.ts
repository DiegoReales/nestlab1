import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entities/user.entity';

const entities = TypeOrmModule.forFeature([User]);

@Module({
  imports: [entities],
  controllers: [UsersController],
  providers: [UsersService],
})
export class UsersModule {}
