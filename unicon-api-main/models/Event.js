import mongoose from "mongoose";

const EventSchema = new mongoose.Schema({
	name: {
		type: String,
		required: true,
	},
	text: {
		type: String,
		required: true,
		unique: true,
	},
	tags: {
		type: Array,
		default: [],
	},
	user: {
		type: mongoose.Schema.Types.ObjectId,
		ref: "User",
		required: true
	},
	date: {
		start: {
			type: Date,
			required: true,
		},
		end: {
			type: Date,
			required: true,
		},
	},
	viewsCount: {
		type: Number,
		default: 0,
	},
	imageUrls: {
		type: Array,
		required: true
	},
	members: {
		type: Array,
		default: [],
	},
	withRegistration: {
		type: Boolean,
		default: false,
	},
},{
	timestamps: true,
});

export default mongoose.model("Event", EventSchema);
