// const client = redis.createClient();
// const router = express.Router();

// router.post("/", (req, res) => {
//   const {
//     symbol,
//     name,
//     price,
//     marketCap,
//     volume24h,
//     circulatingSupply,
//     maxSupply,
//     change24h,
//     rank,
//     imageUrl,
//   } = req.body;

//   const asset: Asset = {
//     symbol,
//     name,
//     price,
//     marketCap,
//     volume24h,
//     circulatingSupply,
//     maxSupply,
//     change24h,
//     rank,
//     imageUrl,
//   };

//   client.hmset(`asset:${symbol}`, asset, (err) => {
//     if (err) {
//       return res.status(500).send(err.message);
//     }
//     return res.status(201).send(`Asset ${symbol} created.`);
//   });
// });

// export default router;
