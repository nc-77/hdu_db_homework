import axios from "axios";
import React, { useState } from "react";
import CardItem from "../features/CardItem";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
} from "reactstrap";
import "./Market.css";
import useDropdown from "./useDropdown";

export default function Market({
  MarketInfo,
  isMarketRender,
  MarketHandleChange,
  MarketHandleSubmit,
  searchParams,
}) {
  console.log(MarketInfo);
  //const [breed, BreedDropdown, updateBreed] = useDropdown("Breed", "", breeds);
  console.log(searchParams);

  return (
    <div className="search-params">
      {isMarketRender && (
        <>
          <form onSubmit={MarketHandleSubmit} className="form" noValidate>
            <label className="form-label">物品名称</label>
            <input
              className="form-input-loginPage"
              type="text"
              id="name"
              placeholder="名称"
              value={searchParams.name || ""}
              onChange={MarketHandleChange}
            />
            {/* <div className="form-inputs">
              <label className="form-label">选择身份</label>
              <select
                className="form-input-loginPage"
                id="identity"
                onChange={MarketHandleChange}
              >
                <option value="buyer">买家</option>
                <option value="seller">卖家</option>
              </select>
            </div> */}
            <button className="form-input-btn" type="submit">
              搜索
            </button>
          </form>
          <div className="search">
            {MarketInfo.map((item) => {
              return (
                <>
                  <div className="image-container">
                    <img src="http://placecorgi.com/300/300" alt={item.id} />
                  </div>
                  <div className="info">
                    <h1>{item.name}</h1>
                    <h2>{`${item.id} — ${item.des} — ${item.class}`}</h2>
                  </div>
                </>
              );
            })}
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
