import NewsModel from "../models/News.js";

export const getAll = async (req, res) => {
	try {
		const news = await NewsModel.find().limit(20).populate("user").exec();
		res.json(news);
	} catch (err) {
		console.log(err);
		res.status(500).json({
			message: "Не удалось получить новости",
		});
	}
};

export const getOne = async (req, res) => {
	try {
		const newsId = req.params.id;

		NewsModel.findByIdAndUpdate({
			_id: newsId,
		}, {
			$inc: { viewsCount: 1 },
		},
		{
			returnDocument: "after",
		},
		(err, doc) => {
			if (err) {
				console.log(err);
				return res.status(500).json({
					message: "Не удалось получить новость",
				});
			}

			if (!doc) {
				return res.status(404).json({
					message: "Новость не найдена",
				});
			}

			res.json(doc);
		}
		).populate("user");
	} catch (err) {
		console.log(err);
		res.status(500).json({
			message: "Не удалось получить новость",
		});
	}
};

export const createNews = async (req, res) => {
	try {
		const doc = new NewsModel({
			name: req.body.name,
			text: req.body.text,
			tags: req.body.tags,
			user: req.userId,
		});

		const news = await doc.save();

		res.json(news);
	} catch (err) {
		console.log(err);
		res.status(500).json({
			message: "Не удалось создать новость",
		});
	}
};
