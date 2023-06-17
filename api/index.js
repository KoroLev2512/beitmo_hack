import express from "express";
import mongoose from "mongoose";
import multer from "multer";
import cors from "cors";
import dotenv from "dotenv";
import { checkAuth,  } from "./utils/index.js";
import router from "./router/index.js";
import cookieParser from "cookie-parser";


// TODO write middleware with errors handler
dotenv.config();

// eslint-disable-next-line no-undef
const PORT = process.env.PORT || 4444;
// eslint-disable-next-line no-undef
const DB_URL = process.env.DB_URL;
mongoose
	.connect(DB_URL )
	.then(() => console.log("DB ok"))
	.catch((err) => console.log("DB error", err));

const app = express();

app.use(express.json());
app.use(cookieParser());
app.use(cors({
	credentials: true,
	origin: "http://localhost:8080"
}));

const storage = multer.diskStorage({
	destination: (_, __, cb) => {
		cb(null, "uploads");
	},
	filename: (_, file, cb) => {
		cb(null, file.originalname);
	},
});

const upload = multer({ storage });


const apiRouter = express.Router();

apiRouter.use("/uploads", express.static("uploads"));

apiRouter.post("/upload", checkAuth, upload.single("image"), (req, res) => {
	res.json({
		url: `/uploads/${req.file.originalname}`,
	});
});

// Define a route for the /api path
apiRouter.get("/", (req, res) => {
	res.send("API Home Page");
});
apiRouter.use(router);

apiRouter.get("/reload", (req, res) => {
	res.send("Server restarting...");
	// eslint-disable-next-line no-undef
	process.exit(0);
});

// Mount the router at the /api path
app.use("/api", apiRouter);

app.listen(PORT, (err) => {
	if (err) {
		return console.log(err);
	}

	console.log("Server OK", PORT);
});
