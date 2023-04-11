import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { bookingTour, getValidateCardId } from "../../http";

export const buyTour = createAsyncThunk(
  "customers/buyTour",
  async (customerInfo, { rejectWithValue, dispatch }) => {
    const { data } = await bookingTour({ clientInfoBooking: customerInfo });
  }
);

export const getValidateCard = createAsyncThunk(
  "customers/getValidateCard",
  async (email, { rejectWithValue, dispatch }) => {
    const { data } = await getValidateCardId({ email: email });
  }
);

const customerSlice = createSlice({
  name: "customers",
  initialState: { customers: [], mainClient: {}, tour: {} },
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
      state.mainClient = action.payload.mainClient;
    },

    addTour(state, action) {
      state.tour = action.payload.tour;
    },
  },
  extraReducers: {
    [buyTour.fulfilled]: () => console.log(),
    [buyTour.pending]: () => console.log(""),
    [buyTour.rejected]: () => console.log(""),
  },
});

export const { addCustomer, addMainClient, addTour } = customerSlice.actions;

export default customerSlice.reducer;
