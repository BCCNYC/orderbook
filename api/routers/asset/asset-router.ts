import express from "express";
import redis from "../../redis.js";

const router = express.Router();

router.get("/", (req, res, next) => {
  redis.smembers("asssets", (error, result) => {
    if (error) {
      next({ status: 404, message: "could not fetch assets" });
    } else {
      res.json(result.map((asset) => JSON.parse(asset)));
    }
  });
});

export default router;
