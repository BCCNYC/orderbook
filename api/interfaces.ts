export interface Asset {
  id: number;
  symbol: string;
  name: string;
  price: number;
  marketCap: number;
  volume24h: number;
  circulatingSupply: number;
  maxSupply: number;
  change24h: number;
  imageUrl?: string;
}

export interface Market {
  id: number;
  baseAssetId: number;
  quoteAssetId: number;
  lastPrice: number;
  lowestAsk: number;
  highestBid: number;
  percentChange: number;
  baseVolume: number;
  quoteVolume: number;
}

export interface Order {
  id: number;
  marketId: number;
  side: "buy" | "sell";
  price: number;
  volume: number;
  total: number;
  date: string;
}
