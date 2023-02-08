import { Redis } from "ioredis";
import { assets, markets } from "./dummyData.js";
const redis = new Redis(process.env.REDIS_URL);

// seeding redis
if ((await redis.smembers("markets")).length === 0) {
  markets.forEach(async (market) => {
    await redis.sadd("markets", JSON.stringify(market));
  });
}

if ((await redis.smembers("assets")).length === 0) {
  assets.forEach(async (asset) => {
    await redis.sadd("assets", JSON.stringify(asset));
  });
}

export default redis;
