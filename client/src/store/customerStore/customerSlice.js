import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { $host } from "../../http";

export const buyTour = createAsyncThunk(
  "customers/buyTour",
  async (customerInfo, { rejectWithValue, dispatch }) => {
    //const {data} = await buyTour(customerInfo);
  }
);

const customerSlice = createSlice({
  name: "customers",
  initialState: { customers: [], mainClient: {} },
  reducers: {
    addCustomer(state, action) {
      state.customers.push({
        firstName: action.payload.firstName,
        lastName: action.payload.lastName,
        gender: action.payload.gender,
        birthDate: action.payload.birthDate,
        citizenship: action.payload.citizenship,
        passportSeriesAndNumber: action.payload.passportSeriesAndNumber,
        dateOfPassport: action.payload.dateOfPassport,
        validityPeriod: action.payload.validityPeriod,
      });
    },

    addMainClient(state, action) {  
      console.log(action.payload);
      // const elem = action.payload;
      // console.log(elem);
      state.mainClient = action.payload.mainClient;//Object.assign({}, elem);
    },
  },
  extraReducers: {
    [buyTour.fulfilled]: () => console.log(),
    [buyTour.pending]: () => console.log(""),
    [buyTour.rejected]: () => console.log(""),
  },
});

export const { addCustomer, addMainClient } = customerSlice.actions;

export default customerSlice.reducer;
