import jwt from "jsonwebtoken";
import TokenSchema from "../models/Token.js";

const generateTokens = (payload) => {
	const accessToken = jwt.sign(payload,
		// TODO rewrite secret
		"secret",
		{
			expiresIn: "30m",
		}
	);
	const refreshToken = jwt.sign(payload,
		// TODO rewrite secret
		"secret",
		{
			expiresIn: "30d",
		}
	);
	return {
		refreshToken,
		accessToken
	};
};

const saveToken = async (userId, refreshToken) => {
	const tokenData = await TokenSchema.findOne({user: userId});
	if (tokenData) {
		tokenData.refreshToken = refreshToken;
		return tokenData.save();
	}
	return await TokenSchema.create({user: userId, refreshToken});
};

const removeToken = async (refreshToken) => {
	return TokenSchema.deleteOne({refreshToken});
};

const validateAccessToken = (token) => {
	try {
		// TODO rewrite secret
		return jwt.verify(token, "secret");
	} catch (err) {
		return null;
	}
};

const validateRefreshToken = (token) => {
	try {
		// TODO rewrite secret
		return jwt.verify(token, "secret");
	} catch (err) {
		return null;
	}
};

const findToken = async (refreshToken) => {
	return TokenSchema.findOne({refreshToken});
};

export default {
	saveToken,
	generateTokens,
	removeToken,
	validateAccessToken,
	validateRefreshToken,
	findToken,
};
