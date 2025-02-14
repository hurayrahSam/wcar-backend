import { Field, InputType, Int } from "@nestjs/graphql";
import { IsIn, IsNotEmpty, IsOptional, Min } from "class-validator";
import { NoticeCategory, NoticeGroup, NoticeStatus } from "../../enums/notice.enum";
import { ObjectId } from "mongoose";
import { availableArticleSorts } from "../../config";
import { Direction } from "../../enums/common.enum";



@InputType()
export class NoticeInput {
    @IsNotEmpty()
    @Field(() => NoticeCategory)
    noticeCategory: NoticeCategory;

    @IsNotEmpty()
    @Field(() => NoticeStatus)
    noticeStatus: NoticeStatus;

    @IsNotEmpty()
    @Field(() => NoticeGroup)
    noticeGroup: NoticeGroup;

    @IsNotEmpty()
    @Field(() => String)
    noticeTitle: string;

    @IsNotEmpty()
    @Field(() => String)
    noticeContent: string;

    memberId?: ObjectId;
}

@InputType()
class NISearch {
    @IsOptional()
    @Field(() => NoticeCategory, { nullable: true })
    noticeCategory?: NoticeCategory;

    @IsOptional()
    @Field(() => NoticeStatus, { nullable: true })
    noticeStatus?: NoticeStatus;

    @IsOptional()
    @Field(() => NoticeGroup, { nullable: true })
    noticeGroup?: NoticeGroup;
}

@InputType()
export class NoticesInquiry {
    @IsNotEmpty()
    @Min(1)
    @Field(() => Int)
    page: number;

    @IsNotEmpty()
    @Min(1)
    @Field(() => Int)
    limit: number;

    @IsOptional()
    @IsIn(availableArticleSorts)
    @Field(() => String, { nullable: true })
    sort?: string;

    @IsOptional()
    @Field(() => Direction, { nullable: true })
    direction?: Direction;

    @IsNotEmpty()
    @Field(() => NISearch)
    search: NISearch;
}