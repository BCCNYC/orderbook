export interface Asset {
  ticker: string;
  name: string;
  price: number;
  marketCap: number;
  volume24h: number;
  circulatingSupply: number;
  maxSupply: number;
  change24h: number;
  imageUrl?: string;
}

export interface Order {
  id: number;
  side: "buy" | "sell";
  price: number;
  volume: number;
  total: number;
  date: string;
}

export interface Market {
  pair: string;
  baseAsset: string;
  quoteAsset: string;
  lastPrice: number;
  lowestAsk: number;
  highestBid: number;
  percentChange: number;
  baseVolume: number;
  quoteVolume: number;
  orders?: Order[];
}

