import {configureStore} from "@reduxjs/toolkit";
import themeReducer from "../slice/ThemeSlice";

export const store = configureStore({
    reducer: {
        theme: themeReducer
    }
})