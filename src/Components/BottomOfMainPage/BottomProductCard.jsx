import "./CSS/BottomProductCard.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

import React from "react";

function BottomProductCard(props) {
  return (
    <div
      className="bottomProductCard"
      style={{ scrollSnapAlign: "start", width: "165px", flex:'0 0 165px' }}
    >
      <a href="#" className="productImgLink">
        <img src={props.productPlaceHolderImg}></img>
      </a>

      <a href="#" className="productNameLink">
        <span>{props.productPlaceHolderName}</span>
      </a>

      {props.authorName && (
        <a href="#" className="productAuthorName">
          <span>&gt;{props.authorName}</span>
        </a>
      )}

      {props.totalProductRating && (
        <a href="#" className="totalProductRating">
          <div className="ratingStars">
            <span className="fa fa-star"></span>
            <span className="fa fa-star"></span>
            <span className="fa fa-star"></span>
            <span className="fa fa-star"></span>
            <span className="fa fa-star"></span>
          </div>
          <span>{props.totalProductRating}</span>
        </a>
      )}

      <a href="#" className="productPrice">
        <span style={{ fontSize: "11px" }}>&#36;</span>
        <span style={{ fontSize: "17px" }}>
          {props.productPrice}
          <br />
        </span>
      </a>

      {props.shippingPrice && (
        <a href="#" className="productShippingPrice">
          <span style={{fontSize:'12px'}}>&#36;{props.shippingPrice} shipping</span>
        </a>
      )}
    </div>
  );
}

export default BottomProductCard;
