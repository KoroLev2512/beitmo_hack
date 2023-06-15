import express from "express";
import {checkAuth, handleValidationErrors} from "../utils/index.js";
import {commentCreateValidation} from "../validations.js";
import { CommentController } from "../controllers/index.js";

const router = express.Router();

router.get("/comments", CommentController.getLastComments);
router.get("/comments/:id", CommentController.getComments);
router.post("/comments", checkAuth, commentCreateValidation, handleValidationErrors, CommentController.create);
router.delete("/comments/:id", checkAuth, CommentController.remove);

export default router;
