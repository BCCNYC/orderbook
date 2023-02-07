import "dotenv/config";
import express from "express";
import redis from "./redis.js";
import assetsRouter from "./routers/assets/assets-router.js";
import marketsRouter from "./routers/markets/markets-router.js";
import ordersRouter from "./routers/orders/orders-router.js";

const server = express();

// Middleware
server.use(express.json());

// Routers
server.use("/assets", assetsRouter);
server.use("/markets", marketsRouter);
server.use("/orders", ordersRouter);

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
