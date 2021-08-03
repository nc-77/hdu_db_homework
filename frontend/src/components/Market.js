import React from "react";
import "./Market.css";
import MarketTitlebarGridList from "./MarketTitlebarGridList";
import MarketSearchBar from "./MarketSearchBar";
import ShoppingCart from "./ShoppingCart";

export default function Market({
  marketInfo,
  isMarketRender,
  MarketHandleChange,
  MarketHandleSubmit,
  searchParams,
  handleCart,
  cartInfo,
  showCart,
  orderInfo,
  OrderHandleChange,
  OrderHandleSubmit,
}) {
  return (
    <div id="market">
      {isMarketRender && (
        <>
          <MarketTitlebarGridList
            info={marketInfo}
            handleChange={handleCart}
            ButtonIcon={`AddShoppingCartIcon`}
          />
          <div className="market-search-params">
            <MarketSearchBar
              MarketHandleChange={MarketHandleChange}
              MarketHandleSubmit={MarketHandleSubmit}
              searchParams={searchParams}
            />
            {showCart && (
              <ShoppingCart
                cartInfo={cartInfo}
                orderInfo={orderInfo}
                OrderHandleChange={OrderHandleChange}
                OrderHandleSubmit={OrderHandleSubmit}
              />
            )}
          </div>
        </>
      )}
    </div>
  );
}
