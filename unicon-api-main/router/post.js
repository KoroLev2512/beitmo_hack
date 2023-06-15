import express from "express";
import {checkAuth, handleValidationErrors} from "../utils/index.js";
import {postCreateValidation} from "../validations.js";
import { PostController } from "../controllers/index.js";

const router = express.Router();

router.get("/posts", PostController.getAll);
router.get("/posts/:id", PostController.getOne);
router.post("/posts", checkAuth, postCreateValidation, handleValidationErrors, PostController.create);
router.patch("/posts/:id", checkAuth, postCreateValidation, handleValidationErrors, PostController.update);
router.delete("/posts/:id", checkAuth, PostController.remove);

export default router;
