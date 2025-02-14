import { Field, ObjectType } from "@nestjs/graphql";
import { ObjectId } from "mongoose";
import { NoticeCategory, NoticeGroup, NoticeStatus } from "../../enums/notice.enum";
import { TotalCounter } from "../member/member";



@ObjectType()
export class Notice {
    @Field(() => String)
    _id: ObjectId;

    @Field(() => NoticeCategory)
    noticeCategory: NoticeCategory;

    @Field(() => NoticeStatus)
    noticeStatus: NoticeStatus;

    @Field(() => NoticeGroup)
    noticeGroup: NoticeGroup;

    @Field(() => String)
    noticeTitle: string;

    @Field(() => String)
    noticeContent: string;

    @Field(() => String)
    memberId: ObjectId;

    @Field(() => Date)
    createdAt: Date;

    @Field(() => Date)
    updatedAt: Date;
}

@ObjectType()
export class Notices {
    @Field(() => [Notice])
    list: Notice[];

    @Field(() => [TotalCounter], { nullable: true })
    metaCounter: TotalCounter[];
}