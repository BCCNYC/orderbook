import * as dotenv from "dotenv";
dotenv.config();
import express from "express";

import assetRouter from "./routers/asset/asset-router.js";
import marketRouter from "./routers/market/market-router.js";

const server = express();
const port = process.env.PORT;
// Middleware
server.use(express.json());

// Routers
server.use("/asset", assetRouter);
server.use("/market", marketRouter);

// Sanity Check
server.get("/", (req, res) => {
  res.status(201).json({ message: "initial request succesful" });
});

// Global Error Handler
server.use((err, req, res, next) => {
  res.status(err.status || 500).json({
    message: err.message,
    stack: err.stack,
  });
});

server.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
