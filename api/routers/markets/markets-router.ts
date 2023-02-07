import express from "express";
import redis from "../../redis.js";

const router = express.Router();

router.get("/", (req, rest, next) => {
  redis.smembers("markets", (error, result) => {
    if (error) {
      next({ status: 404, message: "could not feth markets" });
    } else {
      rest.json(result.map((market) => JSON.parse(market)));
    }
  });
});

export default router;
