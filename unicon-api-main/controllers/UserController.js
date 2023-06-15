import UserModel from "../models/User.js";
import UserService from "../service/user.js";

export const register = async (req, res, next) => {
	try {
		const userData = await UserService.registration(req);
		res.cookie("refreshToken", userData.refreshToken, {maxAge: 30 * 24 * 60 * 60 * 1000, httpOnly: true});
		return res.json(userData);
	} catch (err) {
		next(err);
		res.status(500).json({
			message: "Не удалось зарегистрироваться",
		});
	}
};

export const login = async (req, res) => {
	try {
		const { email, password } = req.body;
		const userData = await UserService.login(email, password);
		res.cookie("refreshToken", userData.refreshToken, {maxAge: 30 * 24 * 60 * 60 * 1000, httpOnly: true});
		return res.json(userData);
	} catch (err) {
		console.log(err);
		res.status(500).json({
			message: "Не удалось авторизоваться",
		});
	}
};

export const getMe = async (req, res) => {
	try {
		const user = await UserModel.findById(req.userId);

		if (!user) {
			return res.status(404).json({
				message: "Пользователь не найден",
			});
		}

		const {...userData} = user._doc;

		res.json(userData);
	} catch (err) {
		console.log(err);
		res.status(500).json({
			message: "Нет доступа",
		});
	}
};

export const refresh = async (req, res) => {
	try {
		const {refreshToken} = req.cookies;
		const userData = await UserService.refresh(refreshToken);
		res.cookie("refreshToken", userData.refreshToken, {maxAge: 30 * 24 * 60 * 60 * 1000, httpOnly: true});
		return res.json(userData);
	} catch (err) {
		console.log(err);
	}
};

export const logout = async (req, res) => {
	try {
		const { refreshToken } = req.cookies;
		const token = UserService.logout(refreshToken);
		res.clearCookie("refreshToken");
		return res.json(token);
	} catch (err) {
		console.log(err);
	}
};
