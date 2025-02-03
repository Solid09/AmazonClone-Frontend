import { createSlice } from "@reduxjs/toolkit";

const initialState = {
   authorization:false,
   userId:"",
}

const authSlice =  createSlice({
   name:"auth",
   initialState,
   reducers:{
      login:(state,action)=>{
         state.authorization = true;
         state.userId = action.payload;
      },
      logout:(state)=>{
         state.authorization = false;
         state.userId = "";
      }
   }
});

export const {login,logout} = authSlice.actions;

export default authSlice.reducer;