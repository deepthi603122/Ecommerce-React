


// Step2--------------------  CREATE STORE

import { configureStore } from "@reduxjs/toolkit";

import todoSlice from "./todoSlice"
import cartSlice from "./cartSlice"

let store = configureStore({

    reducer: {

         todo: todoSlice.reducer,
         cart: cartSlice.reducer
    }
})

export default store




