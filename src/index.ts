import express from "express";
const server = express();
const port = 3000;

import assetRouter from './asset/asset-router.js';
import marketRouter from './market/market-router.js';

server.use('/asset', assetRouter);
server.use('/market', marketRouter);

server.get("/", (req, res) => {
  res.send("I AM WORKING YESS");
});

server.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
