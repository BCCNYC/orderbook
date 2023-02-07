import "dotenv/config";
import express from "express";
import redis from "./redis.js";
import assetRouter from "./routers/asset/asset-router.js";
import marketRouter from "./routers/market/market-router.js";

const server = express();

// Middleware
server.use(express.json());

// Routers
server.use("/asset", assetRouter);
server.use("/market", marketRouter);

// Sanity Check
server.get("/", (req, res) => {
  res.status(201).json({ message: "initial request succesful" });
});
console.log(await redis.ping());

// Global Error Handler
server.use((err, req, res, next) => {
  res.status(err.status || 500).json({
    message: err.message,
    stack: err.stack,
  });
});

server.listen(process.env.PORT, () => {
  console.log(`Server listening on port ${process.env.PORT}`);
});
