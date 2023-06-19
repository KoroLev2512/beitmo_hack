import cookie from "cookie";

export default function parseCookies(req: {headers: {cookie: string}}) {
	if (typeof window !== "undefined") {
		return cookie.parse(req ? req.headers.cookie || "" : document.cookie);
	} else {
		return {};
	}
}
