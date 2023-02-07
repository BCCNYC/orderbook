import { Asset } from "./interfaces.js";

export const assets = [
  {
    change24h: -91.6,
    circulatingSupply: (19.27 * 10) ^ 6,
    marketCap: (441.05 * 10) ^ 9,
    name: "Bitcoin",
    price: 22959.45,
    rank: 1,
    symbol: "BTC",
    imageUrl: "cool ass ulrl",
    volume24h: 293794.39,
    maxSupply: (21 * 10) ^ 6,
  },
  {
    change24h: -214,
    circulatingSupply: (19.27 * 10) ^ 6,
    marketCap: (234.05 * 10) ^ 9,
    name: "SHARIQ COIN",
    price: 431.45,
    rank: 3,
    symbol: "SHA",
    imageUrl: "cool ass LINK",
    volume24h: 22.39,
    maxSupply: (3 * 10) ^ 3,
  },
] as Asset[];
