import redis from "../../redis.js";
import { Market } from "../../interfaces.js";
import { Request } from "express";

export const deserializeMarkets = (req, res, next) => {
  redis.smembers("markets", (error, result) => {
    if (error) {
      next({ status: 404, message: "could not fetch markets" });
    } else {
      req.markets = result.map((market) => JSON.parse(market)) as Market[];
      next();
    }
  });
};

export const uniqueMarket = (
  req: Request & { markets: Market[]; body: Market },
  res,
  next
) => {
  req.markets.forEach((market) => {
    if (market.pair === req.body.pair) {
      next({ status: 400, message: "duplicate body" });
    } else {
      next();
    }
  });
};

export const validateNewMarket = (req, res, next) => {
  const {
    baseAsset,
    baseVolume,
    highestBid,
    lastPrice,
    lowestAsk,
    pair,
    percentChange,
    quoteAsset,
    quoteVolume,
  } = req.body as Market;
  if (
    !baseAsset ||
    !baseVolume ||
    !highestBid ||
    !lastPrice ||
    !lowestAsk ||
    !pair ||
    !percentChange ||
    !quoteAsset ||
    !quoteVolume
  ) {
    next({ status: 500, message: "invalid body" });
  } else {
    // if req.body.pair has assets that does not exist within our databse
    redis.smembers("assets", (error, result) => {
      if (error) {
        next({ error });
      } else {
        const inputAssets = pair.split("-"); // BTC-USDC --> [BTC, USDC]

        inputAssets.forEach((input: string) => {
          result.forEach((asset) => {
            if (JSON.parse(asset).ticker === input) {
              next({ status: 500, message: "invalid body" });
            }
          });
        });
        next();
      }
    });
  }
};
