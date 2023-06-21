import express from "express";
import { NewsController } from "../controllers/index.js";
import {checkAuth} from "../utils/index.js";
const router = express.Router();

router.get("/news", NewsController.getAll);
router.get("/news/:id", NewsController.getOne);
router.post("/news", checkAuth, NewsController.createNews);

export default router;
