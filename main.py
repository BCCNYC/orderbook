'''
Create Order BOOK
'''
# separate data base ofr market, order asset

# use rut api to allow user to create orders on a market
# Set up market, order, asset

# create 3 separate databases for Asset, Market, Order
# Using Redis, and is under one cluster


# Asset Object
class Asset:
    def __init__(self, symbol=None, name=None, price=None, marketCap=None, volume24h=None, rank=None, imageUrl=None):
        self.__symbol = symbol
        self.__name = name
        self.__price = price
        self.__marketCap = marketCap
        self.__volume24h = volume24h
        self.__rank = rank
        self.__imageUrl = imageUrl

    def get_symbol(self): return self.__symbol
    def get_name(self): return self.__name
    def get_price(self): return self.__price
    def get_marketCap(self): return self.__marketCap
    def get_volume24h(self): return self.__volume24h
    def get_rank(self): return self.__rank
    def get_imageUrl(self): return self.__imageUrl

    def set_(self, symbol): self.__symbol = symbol
    def set_(self, name): self.__name = name
    def set_(self, price): self.__price = price
    def set_(self, marketCap): self.__marketCap = marketCap
    def set_(self, volume24h): self.__volume24h = volume24h
    def set_(self, rank): self.__rank = rank
    def set_(self, imageUrl): self.imageUrl = imageUrl

    def __str__(self):
        pass


# Market Object
class Market:
    def __init__(self, baseAsset=Asset(), quoteAsset=Asset(), lastPrice=None, high24Hr=None, low24Hr=None):
        self.__baseAsset = baseAsset
        self.__quoteAsset = quoteAsset
        self.__lastPrice = lastPrice
        self.__high24Hr = high24Hr
        self.__low24Hr = low24Hr

    def get_baseAsset(self): return self.__baseAsset
    def get_quoteAsset(self): return self.__quoteAsset
    def get_lastPrice(self): return self.__lastPrice
    def get_high24Hr(self): return self.__high24Hr
    def get_low24Hr(self): return self.__low24Hr

    def set_baseAsset(self, baseAsset): self.__baseAsset = baseAsset
    def set_quoteAsset(self, quoteAsset):self.__quoteAsset = quoteAsset
    def set_lastPrice(self, lastPrice):self.__lastPrice = lastPrice
    def set_high24Hr(self, high24Hr):self.__high24Hr = high24Hr
    def set_low24Hr(self, low24Hr): self.__low24Hr = low24Hr

    def __str__(self):
        pass


# Order Object
class Order:
    def __init__(self, market=Market(), side=None, price=None, volume=None, total=None, data=None):
        self.__market = market
        if (side.strip().lower() == "sell"):
            self.__side = 1
        if (side.strip().lower() == "buy"):
            self.__side = 0
        self.__side = side
        self.__price = price
        self.__volume = volume
        self.__total = total
        self.__data = data

    def get_market(self): return self.__market
    def get_side(self): return self.__side
    def get_price(self): return self.__price
    def get_volume(self): return self.__volume
    def get_total(self): return self.__total
    def get_data(self): return self.__data

    def set_market(self, market): self.__market = market
    def set_side(self, side): self.__side = side
    def set_price(self, price): self.__price = price
    def set_volume(self, volume): self.__volume = volume
    def set_total(self, total): self.__total = total
    def set_data(self, data): self.__data = data

    def __str__(self):
        pass


def main():
    print("OrderBook")
    market = Market()



main()


'''
Create own Order Book'

'''



