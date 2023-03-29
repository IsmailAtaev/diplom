import { configureStore } from "@reduxjs/toolkit";
import tourReducer from "./tourStore/tourSlice";
import userReducer from "./user/userStore";

export default configureStore({
  reducer: {
    tour: tourReducer,
    user: userReducer,
  },
});
