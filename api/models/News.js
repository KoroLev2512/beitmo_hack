import mongoose from "mongoose";

const NewsSchema = new mongoose.Schema({
	name: {
		type: String,
		required: true,
	},
	text: {
		type: String,
		required: true,
	},
	tags: {
		type: Array,
		default: [],
	},
	likes: {
		type: Number,
		default: 0,
	},
	user: {
		type: mongoose.Schema.Types.ObjectId,
		ref: "User",
		required: true,
	},
	imageUrl: String,
}, {
	timestamps: true,
});

export default mongoose.model("News", NewsSchema);
