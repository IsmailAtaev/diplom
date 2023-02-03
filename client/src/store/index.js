import {configureStore} from "@reduxjs/toolkit";
import tourReducer from "./tourStore/tourSlice"

export default configureStore({
    reducer: {
        tour: tourReducer,

    }
});