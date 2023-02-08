import express from "express";
import redis from "../../redis.js";
import { Market } from "../../interfaces.js";
const router = express.Router();
import { Request } from "express";
import { validateNewMarket, uniqueMarket } from "./middleware.js";

interface RequestType extends Request {
  markets: Market[];
}

// fetches all markets
router.get("/", (req: RequestType, res, next) => {
  res.json(req.markets);
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

// post a market into the api
router.post("/", validateNewMarket, uniqueMarket, (req: RequestType, res, next) => {
  redis.sadd("markets", JSON.stringify({...req.body, orders:[]}), (error, result) => {
    if (error) {
      next({ error });
    } else {
      res.json(req.body);
    }
  });
});

// PUT: update a market given the PAIR

// delete a market given the PAIR

// POST an ORDER into a market

// DELETE an order from a market

export default router;
