import redis from "../../redis.js";
import { Market } from "../../interfaces.js";

export const deserializeMarket = (req, res, next) => {
  redis.smembers("markets", (error, result) => {
    if (error) {
      next({ status: 404, message: "could not fetch markets" });
    } else {
      req.markets = result.map((market) => JSON.parse(market)) as Market[];
      next();
    }
  });
};
