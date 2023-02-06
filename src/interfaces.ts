interface Asset {
    symbol: string;
    name: string;
    price: number;
    marketCap: number;
    volume24h: number;
    circulatingSupply: number;
    maxSupply?: number;
    change24h: number;
    rank: number;
    imageUrl?: string;
  }

  interface Market {
    baseAsset: Asset;
    quoteAsset: Asset;
    lastPrice: number;
    lowestAsk: number;
    highestBid: number;
    percentChange: number;
    baseVolume: number;
    quoteVolume: number;
  }

  interface Order {
    market: Market;
    side: 'buy' | 'sell';
    price: number;
    volume: number;
    total: number;
    date: string;
  }