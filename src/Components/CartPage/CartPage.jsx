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

function CartPage() {
  const [cartItems, setCartItems] = useState([]);

  const addItemsToCart = async (item) => {
    setCartItems(cartItems.concat(item));
    await axios.post("http://localhost:5000/api/cart", { cartItem: item }, {withCredentials: true});
  };

  const removeCartItem = async (itemId) => {
    const updatedCart = cartItems.filter((item) => item.id !== itemId);
    setCartItems(updatedCart);
    await axios.delete(`http://localhost:5000/api/cart/:${itemId}`, {withCredentials: true});
  };

  useEffect(() => {
    document.title = "Amazon.com Shopping Cart";
    const fetchCartItems = async () => {
      const response = await axios.get("https://localhost:3000/api/cart", {withCredentials: true});
      console.log(response.data.message);
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
            isSignedIn={false}
            cartItems={cartItems}
            removeCartItem={removeCartItem}
          />

          <CartPageRightContainer
            isSignedIn={false}
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
