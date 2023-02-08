import { Redis } from "ioredis";
import { assets, markets } from "./dummyData.js";
const redis = new Redis(process.env.REDIS_URL);

// seeding redis
if (
  !!(await redis.smembers("markests")).length &&
  !!(await redis.smembers("assets")).length
) {
  assets.forEach(async (asset) => {
    await redis.sadd("assets", JSON.stringify(asset));
  });
  markets.forEach(async (market) => {
    await redis.sadd("markets", JSON.stringify(market));
  });
}

export default redis;
