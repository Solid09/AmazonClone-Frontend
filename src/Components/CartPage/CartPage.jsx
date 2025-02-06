import React, { useEffect, useState } from "react";
import axios from "axios";
import "@fortawesome/fontawesome-free/css/all.min.css";

import BackGroundTheme from "../BackGroundTheme/BackGroundTheme";
import Header from "../Header/Header.jsx";
import Footer from "../Footer/Footer.jsx";
import BottomOfCartPage from "../BottomOfMainPage/BottomOfMainPage.jsx";

import "./CSS/CartPage.css";

import CartContainer from "./subComponents/CartContainer.jsx";
import CartPageRightContainer from "./subComponents/CartPageRightContainer.jsx";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function CartPage() {
  const [cartItems, setCartItems] = useState([]);
  const authState = useSelector((state) => state.auth);
  const navigate = useNavigate();

  const addItemsToCart = async (item) => {
    const response = await axios.post("https://localhost:3000/api/cart/", { cartItem: item }, {withCredentials: true});
    setCartItems(cartItems.concat(response.data.cartItem));
  };

  const removeCartItem = async (itemId) => {
    await axios.delete(`https://localhost:3000/api/cart/${itemId}`, {withCredentials: true});
    const updatedCartItems = cartItems.filter((item) => item._id !== itemId);
    setCartItems(updatedCartItems);
  };

  useEffect(() => {
    document.title = "Amazon.com Shopping Cart";
    if(!authState.authorization){
      navigate("/signin-email");
    }
    const fetchCartItems = async () => {
      const response = await axios.get("https://localhost:3000/api/cart", {withCredentials: true});
      setCartItems(response.data.cart);
    };
    fetchCartItems();
  }, []);

  return (
    <div className="cartPageContainer">
      <Header />
      <BackGroundTheme />
      <div style={{ display: "flex", justifyContent: "center" }}>
        <div className="cartPage">
          <CartContainer
            isSignedIn={authState.authorization}
            cartItems={cartItems}
            removeCartItem={removeCartItem}
          />

          <CartPageRightContainer
            isSignedIn={authState.authorization}
            cartItems={cartItems}
            addItemsToCart={addItemsToCart}
          />
        </div>
      </div>

      <BottomOfCartPage />
      <Footer />
    </div>
  );
}

export default CartPage;
