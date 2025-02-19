import { Schema } from 'mongoose';
import { NotificationGroup, NotificationStatus, NotificationType } from '../libs/enums/notification.enum';

const NotificationSchema = new Schema(
	{
		notificationType: {
			type: String,
			enum: NotificationType,
			required: true,
		},

		notificationStatus: {
			type: String,
			enum: NotificationStatus,
			default: NotificationStatus.WAIT,
		},

		notificationGroup: {
			type: String,
			enum: NotificationGroup,
			required: true,
		},

		authorId: {
			type: Schema.Types.ObjectId,
			required: true,
			ref: 'Member',
		},

		receiverId: {
			type: Schema.Types.ObjectId,
			required: true,
			ref: 'Member',
		},

		carId: {
			type: Schema.Types.ObjectId,
			ref: 'Car',
		},

		articleId: {
			type: Schema.Types.ObjectId,
			ref: 'Article',
		},

		commentId: {
			type: Schema.Types.ObjectId,
			ref: 'Comment',
		},
	},
	{ timestamps: true, collection: 'notifications' },
);

export default NotificationSchema;
