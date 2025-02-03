import { useState } from "react";

import "./CartPageRightContainer.css";
import prime_logo from "../Assets/amazon_prime_logo.svg";
import product_placeholder_img from "../Assets/productsPlaceHolderImg.jpg";

function CartPageRightContainer(props) {
  const addProductToCart = () => {  //for now placeholder data. else just access the data from the db of the clicked product and pass
    const item = {
      id: props.cartItems.length + 1,
      name: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vitae at voluptas repudiandae aperiam, cumque",
      amountBought: 1000,
      isInStock: true,
      price: "$9.99",
    };
    props.addItemsToCart(item);
  };

  return (
    <div className="rightSideBar">
      {props.cartItems.length > 0 && props.isSignedIn && (
        <div className="rightSideBar-cartDetails">
          <span style={{ fontSize: "18px" }}>
            Subtotal {"("}
            {props.cartItems.length} item{")"}: <b>$14.97</b>
          </span>
          <div>
            <input
              type="checkbox"
              style={{ margin: "0 5px 0 0", padding: "0" }}
            />
            <span>This order contains a gift</span>
          </div>
          <a
            href="#"
            className="rightSideBar_cartDetails-proceedToCheckoutLink"
          >
            Proceed to checkout
          </a>
        </div>
      )}

      {props.isSignedIn && (
        <div className="rightSideBar-primeAdBar">
          <img src={prime_logo} style={{ width: "50px", height: "32px" }} />
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "8px",
              justifyContent: "flex-start",
            }}
          >
            <span
              style={{
                fontSize: "14px",
                fontWeight: "600",
                lineHeight: "20px",
              }}
            >
              Free fast delivery. No order minimum. Exclusive savings. Start
              your 30-day free trial of Prime.
              <br />
            </span>
            <button className="rightSideBar_primeAdBar-joinPrimeBtn">
              Join Prime
            </button>
          </div>
        </div>
      )}

      <div className="rightSideBar-productSuggestions">
        <h1
          style={{
            fontSize: "18px",
            margin: " 0 0 12px",
            padding: "0 0 4px",
          }}
        >
          {props.isSignedIn
            ? "Customers Who Bought Items in Your Recent History Also Bought"
            : "New international customers purchased"}
        </h1>
        <ul
          style={{
            margin: "0",
            padding: "0",
            listStyleType: "none",
            display: "flex",
            flexDirection: "column",
            gap: "20px",
          }}
        >
          {Array(8)
            .fill()
            .map((_, index) => (
              <li key={index}>
                <div style={{ display: "flex", gap: "5px" }}>
                  <a href="#">
                    <img
                      src={product_placeholder_img}
                      alt="placeholder image"
                      width={"100px"}
                      height={"100px"}
                    />
                  </a>

                  <div>
                    <a
                      href="#"
                      className="rightSideBar_productSuggestions-productNameLink"
                    >
                      Lorem ipsum dolor sit, amet consectetur
                      <br />
                    </a>
                    <a href="#" style={{ textDecoration: "none" }}>
                      <span className="rightSideBar_productSuggestions-reviewsText">
                        {Array(5)
                          .fill()
                          .map((_, index) => (
                            <span
                              key={index}
                              className="fa fa-star"
                              style={{ color: "orange" }}
                            ></span>
                          ))}{" "}
                        999
                        <br />
                      </span>
                    </a>
                    <span style={{ color: "#B12704", fontSize: "14px" }}>
                      $9.99
                      <br />
                    </span>
                    <button
                      className="rightSideBar_productSuggestions-ulAddToCartBtn"
                      onClick={()=>addProductToCart()}
                    >
                      Add to cart
                    </button>
                  </div>
                </div>
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
}

export default CartPageRightContainer;
