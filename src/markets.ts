import express from 'express';
import redis from 'redis';
import { Market } from 'interfaces';

const client = redis.createClient();
const router = express.Router();

router.post('/', (req, res) => {
  const { baseAsset, quoteAsset, lastPrice, lowestAsk, highestBid, percentChange, baseVolume, quoteVolume } = req.body;

  const market: Market = {
    baseAsset,
    quoteAsset,
    lastPrice,
    lowestAsk,
    highestBid,
    percentChange,
    baseVolume,
    quoteVolume
  };

  client.hmset(`market:${baseAsset.symbol}:${quoteAsset.symbol}`, market, (err) => {
    if (err) {
      return res.status(500).send(err.message);
    }
    return res.status(201).send(`Market ${baseAsset.symbol}/${quoteAsset.symbol} created.`);
  });
});

export default router;