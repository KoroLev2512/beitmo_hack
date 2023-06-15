import express from "express";
import { PostController } from "../controllers/index.js";

const router = express.Router();


router.get("/tags", PostController.getLastTags);

export default router;
