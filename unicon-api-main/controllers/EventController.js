import EventModel from "../models/Event.js";

export const getAll = async (req, res) => {
	try {
		const events = await EventModel.find().populate("user").exec();
		console.log(events);
		res.json(events);
	} catch (err) {
		console.log(err);
		res.status(500).json({
			message: "Не удалось получить события",
		});
	}
};

export const getOne = (req, res) => {
	try {
		const eventId = req.params.id;

		EventModel.findOneAndUpdate({
			_id: eventId,
		}, {
			$inc: { viewsCount: 1 },
		}, {
			returnDocument: "after",
		}, (err, doc) => {
			if (err) {
				console.log(err);
				return res.status(500).json({
					message: "Не удалось получить событие",
				});
			}

			if (!doc) {
				return res.status(404).json({
					message: "Событие не найдено",
				});
			}
			res.json(doc);
		}).populate("user");
	} catch (err) {
		console.log(err);
		res.status(500).json({
			message: "Не удалось получить событие",
		});
	}
};

export const create = async (req, res) => {
	try {
		const doc = new EventModel({
			name: req.body.name,
			text: req.body.text,
			tags: req.body.tags,
			user: req.userId,
			date: req.body.date,
			imageUrls: req.body.imageUrls,
			members: req.body.members,
			withRegistration: req.body.withRegistration,
		});

		const event = await doc.save();

		res.json(event);
	} catch (err) {
		console.log(err);
		res.status(500).json({
			message: "Не удалось создать событие"
		});
	}
};

export const update = async (req, res) => {
	try {
		const eventId = req.params.id;

		await EventModel.updateOne(
			{
				_id: eventId,
			},
			{
				name: req.body.name,
				text: req.body.text,
				tags: req.body.tags,
				user: req.userId,
				date: req.data.date,
				imageUrls: req.data.imageUrls,
				members: req.data.members,
				withRegistration: req.body.withRegistration,
			},
		);

		res.json({
			success: true
		});
	} catch (err) {
		console.log(err);
		res.status(500).json({
			message: "Не удалось обновить событие"
		});
	}
};

export const remove = (req, res) => {
	try {
		const eventId = req.params.id;

		EventModel.findOneAndDelete({
			_id: eventId,
		}, (err, doc) => {
			if (err) {
				console.log(err);
				return res.status(500).json({
					message: "Не удалось удалить событие",
				});
			}

			if (!doc) {
				return res.status(404).json({
					message: "Событие не найдено",
				});
			}

			res.json({
				success: true,
			});
		});
	} catch (err) {
		console.log(err);
		res.status(500).json({
			message: "Не удалось получить события",
		});
	}
};
