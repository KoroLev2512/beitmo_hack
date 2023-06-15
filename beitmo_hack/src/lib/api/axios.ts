import axios from "axios";

const instance = axios.create({
	baseURL: process.env.API_URL || "http://localhost:80/api", // Замените на ваш базовый URL
	headers: {
		"Content-Type": "application/json", // Установите заголовок по умолчанию, если требуется
	},
});

export default instance;
