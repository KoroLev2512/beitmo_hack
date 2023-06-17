import UserModel from "../models/User.js";
import bcrypt from "bcrypt";
import TokenService from "./token.js";

const registration = async (req) => {
	const candidate = await UserModel.findOne({ email: req.body.email });
	if (candidate) {
		throw new Error("Пользователь с таким Email уже существует");
	}
	const password = req.body.password;
	const salt = await bcrypt.genSalt(10);
	const hash = await bcrypt.hash(password, salt);

	const user = await UserModel.create({
		email: req.body.email,
		fullName: req.body.fullName,
		avatarUrl: req.body.avatarUrl,
		password: hash
	});


	const tokens = TokenService.generateTokens({ email: user.email, _id: user._id });
	await TokenService.saveToken(user._id, tokens.refreshToken);

	return { ...tokens, user };
};

const login = async (email, password) => {
	const user = await UserModel.findOne({ email });
	if (!user) {
		throw new Error("Пользователь не найден");
	}
	const isPasswordValid = await bcrypt.compare(password, user.password);
	if (!isPasswordValid) {
		throw new Error("Неверный пароль");
	}

	const tokens = TokenService.generateTokens({ email: user.email, _id: user._id });
	await TokenService.saveToken(user._id, tokens.refreshToken);

	return { ...tokens, user };
};

const logout = async (refreshToken) => {
	return TokenService.removeToken(refreshToken);
};

const refresh = async (refreshToken) => {
	if (!refreshToken) {
		throw new Error("Ошибка сервера");
	}
	const userData = TokenService.validateRefreshToken(refreshToken);
	const tokenFromDB = await TokenService.findToken(refreshToken);
	if (!userData || !tokenFromDB) {
		throw new Error("Неавторизованный пользователь");
	}
	const user = await UserModel.findById(userData._id);
	const tokens = TokenService.generateTokens({ email: user.email, _id: user._id });
	await TokenService.saveToken(user._id, tokens.refreshToken);

	return { ...tokens, user };
};

export default {
	registration,
	login,
	logout,
	refresh,
};
