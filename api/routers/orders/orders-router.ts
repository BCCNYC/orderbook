import express from "express";
import redis from "../../redis.js";

const router = express.Router();

router.get("/", (req, res, next) => {
  redis.smembers("orders", (error, result) => {
    if (error) {
      next({ status: 404, message: "could not get order" });
    } else {
      res.json(result.map((order) => JSON.parse(order)));
    }
  });
});

export default router;
