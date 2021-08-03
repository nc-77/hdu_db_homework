import React from "react";
import "./CardItem.css";

function CardItem(props) {
  return (
    <>
      <li className="cards-item cards-item-link" onClick={props.action}>
        <figure className="cards-item-pic-wrap" data-category={props.label}>
          <img src={props.src} alt="Travel Image" className="cards-item-img" />
        </figure>
        <div className="cards-item-info">
          <h5 className="cards-item-text">{props.text}</h5>
        </div>
      </li>
    </>
  );
}

export default CardItem;
