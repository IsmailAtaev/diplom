import { configureStore } from "@reduxjs/toolkit";
import tourReducer from "./tourStore/tourSlice";
import userReducer from "./user/userStore";
import customerReducer from "./customerStore/customerSlice";

export default configureStore({
  reducer: {
    tour: tourReducer,
    user: userReducer,
    customer: customerReducer,
  },
});
