import { Asset, Market, Order } from "./interfaces.js";

export const assets = [
  {
    id: 0,
    change24h: -91.6,
    circulatingSupply: (19.27 * 10) ^ 6,
    marketCap: (441.05 * 10) ^ 9,
    name: "Bitcoin",
    price: 22959.45,
    symbol: "BTC",
    imageUrl: "cool ass ulrl",
    volume24h: 293794.39,
    maxSupply: (21 * 10) ^ 6,
  },
  {
    id: 1,
    change24h: -214,
    circulatingSupply: (19.27 * 10) ^ 6,
    marketCap: (234.05 * 10) ^ 9,
    name: "SHARIQ COIN",
    price: 431.45,
    symbol: "SHA",
    imageUrl: "cool ass LINK",
    volume24h: 22.39,
    maxSupply: (3 * 10) ^ 3,
  },
] as Asset[];

export const markets = [
  {
    id: 0,
    baseAssetId: 0,
    quoteAssetId: 1,
    baseVolume: 21039847289037482934,
    highestBid: 321847238947,
    lastPrice: 11,
    lowestAsk: 2,
    percentChange: 2,
    quoteVolume: 210942140,
  },
] as Market[];

export const orders = [
  {
    id: 0,
    marketId: 0,
    side: "buy",
    price: 243455,
    volume: 22,
    total: 29933333,
    date: `${Date.now()}`,
  },
  {
    id: 1,
    marketId: 0,
    side: "sell",
    price: 243455,
    volume: 5,
    total: 29933333,
    date: `${Date.now()}`,
  },
] as Order[];
