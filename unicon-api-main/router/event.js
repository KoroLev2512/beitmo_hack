import express from "express";
import { EventController } from "../controllers/index.js";
import {checkAuth} from "../utils/index.js";


const router = express.Router();

router.get("/events", EventController.getAll);
router.get("/events/:id", EventController.getOne);
// TODO add validation
router.post("/events", checkAuth, EventController.create);
router.patch("/events/:id", checkAuth, EventController.update);
router.delete("/events/:id", checkAuth, EventController.remove);

export default router;
