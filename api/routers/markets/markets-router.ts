import express from "express";
import redis from "../../redis.js";
import {Market} from '../../interfaces.js'
const router = express.Router();

// fetches

router.get("/", (req, rest, next) => {
  redis.smembers("markets", (error, result) => {
    if (error) {
      next({ status: 404, message: "could not feth markets" });
    } else {
      rest.json(result.map((market) => JSON.parse(market)));
    }
  });
});

// fetches orders

router.get("/orders", (req, res, next) => {
  redis.smembers("markets", (error, result) => {
    if (error) {
      next({ status: 404, message: "could not get order" });
    } else {
      res.json(result.map((market) => {
        const deserializedMarket = JSON.parse(market) as Market; 
        const orders = deserializedMarket.orders;
        return orders
      }));
    }
  });
});

export default router;
