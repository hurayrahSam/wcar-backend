import { Module } from '@nestjs/common';
import { FollowResolver } from './follow.resolver';
import { FollowService } from './follow.service';
import { MongooseModule } from '@nestjs/mongoose';
import FollowSchema from '../../schemas/Follow.model';
import { AuthModule } from '../auth/auth.module';
import { MemberModule } from '../member/member.module';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: 'Follow',
        schema: FollowSchema,
      }
    ]),
    AuthModule,
    MemberModule,
  ],
  providers: [FollowService, FollowResolver]
})
export class FollowModule { }
