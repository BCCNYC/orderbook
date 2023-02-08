import { Asset, Market, Order } from "./interfaces.js";

export const assets = [
  {
    change24h: -91.6,
    circulatingSupply: (19.27 * 10) ^ 6,
    marketCap: (441.05 * 10) ^ 9,
    name: "Bitcoin",
    price: 22959.45,
    ticker: "BTC",
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
    ticker: "SHA",
    imageUrl: "cool ass LINK",
    volume24h: 22.39,
    maxSupply: (3 * 10) ^ 3,
  },
] as Asset[];

export const markets = [
  {
    pair: "BTC-USDC",
    baseAsset: "BTC",
    quoteAsset: "USDC",
    baseVolume: 21039847289037482934,
    highestBid: 321847238947,
    lastPrice: 11,
    lowestAsk: 2,
    percentChange: 2,
    quoteVolume: 210942140,
    orders: [
      {
        id: 0,
        side: "buy",
        price: 89,
        volume: 22,
        total: 11,
        date: `${Date.now()}`,
      },
      {
        id: 1,
        side: "sell",
        price: 243455,
        volume: 5,
        total: 23,
        date: `${Date.now()}`,
      },
    ],
  },
] as Market[];
