import express from "express";
import redis from "../../redis.js";
import {Market} from '../../interfaces.js'
const router = express.Router();

// add middleWare to check if an order crosses the book. (Matching Engine)
// - make sure that the current buy is being made that is greater than the lowest sell, then it's a fair trade. It never enters the book because crosses the book
// - works the other way around with sells

// fetches all markets
router.get("/", (req, rest, next) => {
  redis.smembers("markets", (error, result) => {
    if (error) {
      next({ status: 404, message: "could not feth markets" });
    } else {
      rest.json(result.map((market) => JSON.parse(market)));
    }
  });
});

// fetches all orders from all markets
router.get("/orders", async (req, res, next) => {
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

// fetch all orders from x market
router.get("/:pair/orders", async)


// fetch the top of the book


export default router;
