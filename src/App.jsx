import { BrowserRouter, Routes, Route } from "react-router-dom";

import HomePage from "./Components/MainPage/HomePage.jsx";
import SignInPageEmailForm from "./Components/UserAuthentication/SignInPage/SignInPageEmailForm.jsx";
import SignInPagePassForm from "./Components/UserAuthentication/SignInPage/SignInPagePassForm.jsx";
import SignUpPage from "./Components/UserAuthentication/SignUpPage/SignUpPage.jsx";
import CartPage from "./Components/CartPage/CartPage.jsx";
import PageNotFoundPage from "./Components/PageNotFoundPage/PageNotFoundPage.jsx";

import useFetchProductData from "./Hooks/useFetchProductData.jsx";

import "./App.css";
import { useState } from "react";


function App() {
  const { productData } = useFetchProductData(); //getting data from custom hook
  const [userSignInEmail, setUserSignInEmail] = useState();

  const handleSignInEmail = (value) => {
    setUserSignInEmail(value);
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route
          path="/signin-email"
          element={
            <SignInPageEmailForm handleSignInEmail={handleSignInEmail} />
          }
        />
        <Route
          path="/signin-pass"
          element={<SignInPagePassForm userEmail={userSignInEmail} />}
        />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="*" element={<PageNotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
