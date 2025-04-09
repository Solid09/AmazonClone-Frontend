import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { Provider } from "react-redux";
import store from './Redux/store.js';
import axios from "axios";

axios.defaults.baseURL = "https://amazonclone-backend-1b2978a6efa7.herokuapp.com/";
// axios.defaults.baseURL = "http://localhost:5000/";

createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <StrictMode>
      <App />
    </StrictMode>
  </Provider>
);
