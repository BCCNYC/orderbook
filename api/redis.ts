import { Redis } from "ioredis";
import { assets } from "./dummyData.js";
const redis = new Redis(process.env.REDIS_URL);

// seeding redis
assets.forEach(async (asset) => {
  await redis.sadd("assets", JSON.stringify(asset));
});

export default redis;
