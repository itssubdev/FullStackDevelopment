import {configureStore} from "@reduxjs/toolkit";
import themeReducer from "../slice/ThemeSlice";
import cartReducer from "../slice/CartSlice";
export const store = configureStore({
    reducer: {
        cart: cartReducer,
        theme: themeReducer
    }
})