import express from "express";
import {loginValidation, registerValidation} from "../validations.js";
import {checkAuth, handleValidationErrors} from "../utils/index.js";
import { UserController } from "../controllers/index.js";

const router = express.Router();

router.post("/auth/login", loginValidation, handleValidationErrors, UserController.login);
router.post("/auth/registration", registerValidation, handleValidationErrors, UserController.register);
router.get("/auth/me", checkAuth, UserController.getMe);
router.get("/auth/logout", UserController.logout);
router.get("/auth/refresh", UserController.refresh);

export default router;
