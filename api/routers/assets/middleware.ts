import redis from "../../redis.js";
import { Asset } from "../../interfaces.js";

export const deserializeAssets = (req, res, next) => {
  redis.smembers("assets", (error, result) => {
    if (error) {
      next({ status: 404, message: "could not fetch assets" });
    } else {
      req.assets = result.map((market) => JSON.parse(market)) as Asset[];
      next();
    }
  });
};
