import { useState } from "react";
import { Link } from "react-router-dom";

import "./CartContainer.css";
import placeHolderImg from "../Assets/productsPlaceHolderImg.jpg";
import signedOutImage from "../Assets/cartPageSignedOutImg.svg";

import MenuDivider from "../../UserAuthentication/AuthPageMenuDivider";

function CartContainer(props) {
  const [secondBoxIsFirstOptionSelected, setSecondBoxIsFirstOptionSelected] =
    useState(false);

  const verticalMenuDivider = () => {
    return <div style={{ height: "50%", width: "1px", backgroundColor: "rgba(0, 0, 0, .15)", margin:'0 15px' }}></div>;
  };

  const roundOffProductAmountBought = (amountBought) =>{
    if(amountBought < 1000){
      return amountBought;
    }
    else{
      return Math.floor(amountBought/1000)+"K+";
    }
  }

  return (
    <div className="cartContainer">
      <div className={props.isSignedIn ? "cartBox" : "cartBoxSignedOut"}>
        {props.isSignedIn ? (
          <>
            {props.cartItems.length > 0 ? (
              <>
                <h2 className="cartItems-header">Shopping Cart</h2>
                <button className="cartItems-deselectAllBtn">
                  Deselect all items
                </button>
                <br />
                <span className="cartItems-priceText">Price</span>

                <div className="itemsContainer">
                  {props.cartItems.map((item) => {
                    return (
                      <>
                        <MenuDivider />
                        <div
                          style={{
                            display: "flex",
                            margin: "24px 0 20px 12px",
                            gap: "10px",
                          }}
                        >
                          <div className="itemsContainer-leftSide">
                            <div className="itemsContainer-leftSide-checkboxContainer">
                              <input
                                type="checkbox"
                                className="itemsContainer-leftSide-checkbox"
                                defaultChecked={true}
                              />
                            </div>
                            <img
                              src={placeHolderImg}
                              style={{ width: "180px", height: "180px" }}
                            ></img>
                          </div>
                          <div className="items-infoDiv">
                            <span className="items-infoDiv-productName">
                              {item.name}
                            </span>

                            <span className="items-infoDiv-amountBought">
                              {roundOffProductAmountBought(item.amountBought)} bought in past month
                            </span>

                            <span className="items-infoDiv-stockText">
                              {item.isInStock ? "In Stock" : "Out of Stock"}
                            </span>

                            <div className="items-infoDiv-productIsAGift">
                              <input type="checkbox" style={{ margin: "0" }} />
                              <span>This is a gift</span>
                              <a href="#" className="items-infoDiv-productIsAGift-learnMoreLink">Learn more</a>
                            </div>
                            <div className="items-infoDiv-actionsDiv">
                              <button className="items-infoDiv-actionsDiv-qtyBtn">
                                Qty: 1
                              </button>
                              {verticalMenuDivider()}
                              <button className="items-infoDiv-actionsDiv-optionBtns" onClick={()=>props.removeCartItem(item.id)}>Delete</button>

                              {verticalMenuDivider()}
                              <button className="items-infoDiv-actionsDiv-optionBtns">Save for later</button>

                              {verticalMenuDivider()}
                              <button className="items-infoDiv-actionsDiv-optionBtns">Compare with similar items</button>

                              {verticalMenuDivider()}
                              <button className="items-infoDiv-actionsDiv-optionBtns">Share</button>
                            </div>
                          </div>

                          <div className="items-priceContainer">
                            <span>{item.price}</span>
                          </div>
                        </div>
                      </>
                    );
                  })}
                </div>

                <MenuDivider />

                <span className="cartItems-subtotalText">
                  Subtotal ({props.cartItems.length} item): $14.97
                </span>
              </>
            ) : (
              <>
                <h2
                  style={{
                    margin: "0 0 5px 0",
                    padding: "0",
                    fontSize: "28px",
                    fontWeight: "200",
                  }}
                >
                  Your Amazon Cart is empty.
                </h2>
                <span style={{ margin: "0", padding: "0", fontSize: "14px" }}>
                  Your Shopping Cart lives to serve. Give it purpose — fill it
                  with groceries, clothing, household supplies, electronics, and
                  more.
                  <br />
                  Continue shopping on the{" "}
                  <a href="#" className="cartPage-link">
                    Amazon.com homepage
                  </a>
                  , learn about{" "}
                  <a href="#" className="cartPage-link">
                    today's deals
                  </a>
                  , or visit your{" "}
                  <a href="#" className="cartPage-link">
                    Wish List.
                  </a>
                </span>
              </>
            )}
          </>
        ) : (
          <>
            <img src={signedOutImage} className="cartBoxSignedOut-img" />
            <div className="cartBoxSignedOut-rightPart">
              <h2 className="cartBoxSignedOut-header">
                Your Amazon Cart is empty
              </h2>
              <a href="#" className="cartBoxSignedOut-todaySDeals">
                Shop today's deals
              </a>
              <div className="cartBoxSignedOut-authLinksContainer">
                <Link to="/signin-email" className="cartBoxSignedOut-signInLink">
                  Sign in to your account
                </Link>
                <Link to="/signup" className="cartBoxSignedOut-signUpLink">
                  Sign up now
                </Link>
              </div>
            </div>
          </>
        )}
      </div>

      <div className="SecondBox">
        {props.isSignedIn && (
          <>
            <h2
              style={{
                margin: "0 0 14px 0",
                padding: "0",
                fontSize: "24px",
                fontWeight: "bold",
              }}
            >
              Your Items
            </h2>
            <button
              className={
                secondBoxIsFirstOptionSelected
                  ? "SecondBox-firstBtnSelected"
                  : "SecondBox-firstBtn"
              }
              style={{ margin: "0 5px 0 18px" }}
              onClick={() => {
                setSecondBoxIsFirstOptionSelected(true);
              }}
            >
              No items saved for later
            </button>
            <button
              className={
                secondBoxIsFirstOptionSelected
                  ? "SecondBox-secondBtn"
                  : "SecondBox-secondBtnSelected"
              }
              onClick={() => {
                setSecondBoxIsFirstOptionSelected(false);
              }}
            >
              Buy it again
            </button>

            <MenuDivider />

            {secondBoxIsFirstOptionSelected ? (
              <div
                className="SecondBox-savedLaterItemsList"
                style={{ marginBottom: "40px" }}
              ></div>
            ) : (
              <div className="SecondBox-buyAgainItemsList">
                <span style={{ fontSize: "14px" }}>No items to Buy again.</span>
              </div>
            )}
          </>
        )}
      </div>

      <span style={{ fontSize: "12px" }}>
        The price and availability of items at Amazon.com are subject to change.
        The Cart is a temporary place to store a list of your items and reflects
        each item's most recent price.{" "}
        <a href="#" className="cartPage-link" style={{ fontSize: "12px" }}>
          Learn more
        </a>{" "}
        <br />
        Do you have a gift card or promotional code? We'll ask you to enter your
        claim code when it's time to pay.
      </span>
    </div>
  );
}

export default CartContainer;
