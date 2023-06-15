import express from "express";

const router = express.Router();

router.get("/news", (req, res) => res.json({ message: "тут еще не готово"}));

export default router;
