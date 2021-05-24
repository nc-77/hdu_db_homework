import axios from "axios";
import React, { useState } from "react";
import CardItem from "../features/CardItem";
import "./Market.css";
import useDropdown from "./useDropdown";
import MarketTitlebarGridList from "./MarketTitlebarGridList";
import MarketSearchBar from "./MarketSearchBar";

export default function Market({
  MarketInfo,
  isMarketRender,
  MarketHandleChange,
  MarketHandleSubmit,
  searchParams,
  setShowModal,
}) {
  console.log(MarketInfo);
  //const [breed, BreedDropdown, updateBreed] = useDropdown("Breed", "", breeds);
  console.log(searchParams);

  return (
    <div id="market">
      {isMarketRender && (
        <>
          <MarketTitlebarGridList MarketInfo={MarketInfo} />
          {/*  */}
          <MarketSearchBar
            MarketHandleChange={MarketHandleChange}
            MarketHandleSubmit={MarketHandleSubmit}
            searchParams={searchParams}
          />
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
