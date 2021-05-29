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

/* <div className="cards">
      {isMarketRender && (
        <div className="cards-container">
          <div className="cards-wrapper">
            <ul className="cards-items">
              {/* {MarketInfo.map((item) => {
                return (
                  <CardItem
                    src=""
                    key={item.id}
                    text={item.des}
                    label={item.class}
                  />
                );
              })}

              <CardItem
                src="images/img-9.jpg"
                text="Explore the hidden waterfall deep inside the Amazon Jungle"
                label="Adventure"
              />
              <CardItem
                src="images/img-2.jpg"
                text="Travel through the Islands of Bali in a Private Cruise"
                label="Luxury"
              />
              <CardItem
                src="images/img-2.jpg"
                text="Travel through the Islands of Bali in a Private Cruise"
                label="Luxury"
              />
            </ul>
          </div>
        </div>
      )}
    </div> */

/*

    <form onSubmit={MarketHandleSubmit}>
            <label htmlFor="location">
              类别
              <input
                id="location"
                value={location}
                placeholder="Location"
                onChange={(e) => updateLocation(e.target.value)}
              />
            </label>
            <AnimalDropdown />
            <BreedDropdown />
            <label htmlFor="location">
              Theme
              <select
                value={theme}
                onChange={(e) => setTheme(e.target.value)}
                onBlur={(e) => setTheme(e.target.value)}
              >
                <option value="peru">Peru</option>
                <option value="darkblue">Dark Blue</option>
                <option value="chartreuse">Chartreuse</option>
                <option value="mediumorchid">Medium Orchid</option>
              </select>
            </label>
            <button style={{ backgroundColor: theme }}>Submit</button>
          </form>
          <Results pets={pets} />

    */
