import CommentModel from "../models/Comment.js";

export const getLastComments = async (req, res) => {
	try {
		const comments = await CommentModel.find().limit(5).populate("user").exec();
		res.json(comments);
	} catch (err) {
		console.log(err);
		res.status(500).json({
			message: "Не удалось получить комментарии",
		});
	}
};

export const getComments = async (req, res) => {
	try {
		const postId = req.params.id;
		const comments = await CommentModel.find({
			postId: postId,
		}).populate("user");
		res.json(comments);
	} catch (err) {
		console.log(err);
		res.status(500).json({
			message: "Не удалось получить комментарии",
		});
	}
};

export const create = async (req, res) => {
	try {
		const doc = new CommentModel({
			message: req.body.message,
			user: req.userId,
			postId: req.body.postId,
		});

		const comment = await doc.save();

		res.json(comment);
	} catch (err) {
		console.log(err);
		res.status(500).json({
			message: "Не удалось создать комментарий",
		});
	}
};

export const remove = (req, res) => {
	try {
		const commentId = req.params.id;

		CommentModel.findOneAndDelete({
			_id: commentId,
		}, (err, doc) => {
			if (err) {
				console.log(err);
				return res.status(500).json({
					message: "Не удалось удалить комментарий",
				});
			}

			if (!doc) {
				return res.status(404).json({
					message: "Комментарий не найден",
				});
			}

			res.json({
				success: true,
			});
		});
	} catch (err) {
		console.log(err);
		res.status(500).json({
			message: "Не удалось получить комментарии",
		});
	}
};
