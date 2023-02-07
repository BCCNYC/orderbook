import express from "express";
import redis from "../../redis.js";

const router = express.Router();

router.get("/", (req, res) => {
  redis.smembers("markets", (error, result) => {
    if (error) {
      res.json({ status: 404, message: "could not grab market" });
    } else {
      res.json(result.map((market) => JSON.parse(market)));
    }
  });
});

export default router;
