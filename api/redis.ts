import { Redis } from "ioredis";
import { assets, markets, orders } from "./dummyData.js";
const redis = new Redis(process.env.REDIS_URL);

// seeding redis
assets.forEach(async (asset) => {
  await redis.sadd("assets", JSON.stringify(asset));
});

markets.forEach(async (market) => {
  await redis.sadd("markets", JSON.stringify(market));
});

orders.forEach(async (order) => {
  await redis.sadd("orders", JSON.stringify(order));
});

export default redis;
