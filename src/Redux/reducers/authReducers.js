import { createSlice } from "@reduxjs/toolkit";
import Cookie from "js-cookie";

const initialState = {
   authorization: Cookie.get("authCookie") ? JSON.parse(Cookie.get("authCookie")).authorization : false,
   userId: Cookie.get("authCookie") ? JSON.parse(Cookie.get("authCookie")).userId : "",
};

const authSlice = createSlice({
   name: "auth",
   initialState,
   reducers: {
      login: (state, action) => {
         state.authorization = true;
         state.userId = action.payload;
         Cookie.set("authCookie", JSON.stringify({ authorization: true, userId: action.payload }), {
            expires: 1,  
            sameSite: "Strict",
            secure: true
         });
      },
      logout: (state) => {
         state.authorization = false;
         state.userId = "";
         Cookie.set("authCookie", JSON.stringify({ authorization: false, userId: "" }), {
            expires: 1,
            sameSite: "Strict",
            secure: true
         });
      }
   }
});

export const { login, logout } = authSlice.actions;

export default authSlice.reducer;
