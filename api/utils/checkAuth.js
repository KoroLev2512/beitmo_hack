import jwt from "jsonwebtoken";

const parseCookies = (request) => {
	const list = {};
	const cookieHeader = request.headers?.cookie;
	if (!cookieHeader) return list;

	cookieHeader.split(";").forEach(function(cookie) {
		let [ name, ...rest] = cookie.split("=");
		name = name?.trim();
		if (!name) return;
		const value = rest.join("=").trim();
		if (!value) return;
		list[name] = decodeURIComponent(value);
	});

	return list;
};

export default (req, res, next) => {
	const cookies = parseCookies(req);
	const token = cookies.refreshToken;
	console.log(cookies);
	// (req.headers.authorization || "").replace(/Bearer\s?/, "");

	if (token) {
		try {
			const decoded = jwt.verify(token, "secret");

			req.userId = decoded._id;
			next();
		} catch (e) {
			return res.status(403).json({
				message: "Нет доступа",
			});
		}
	} else {
		return res.status(403).json({
			message: "Нет доступа",
		});
	}
};
