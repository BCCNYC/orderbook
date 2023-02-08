import express from "express";
import redis from "../../redis.js";
import { Market } from "../../interfaces.js";
const router = express.Router();
import { Request } from "express";

// req doesn't get the types imported from middleware applied so I am manually doing it
interface RequestType extends Request {
  markets: Market[];
}

// fetches all markets
router.get("/", (req: RequestType, res, next) => {
  redis.smembers("markets", (error, result) => {
    res.json(req.markets);
  });
});

// fetches market by pair
router.get(
  "/:pair",
  (req: RequestType & { params: { pair: string } }, res, next) => {
    req.markets.forEach((market) => {
      if (market.pair == req.params.pair) {
        res.json(market);
      } else {
        res.json([]);
      }
    });
  }
);

export default router;
