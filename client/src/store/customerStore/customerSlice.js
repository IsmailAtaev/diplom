import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const customerSlice = createSlice({
  name: "customers",
  initialState: { customers: [], mainClient: {} },
  reducers: {
    addCustomer(state, action) {
      console.log("slice ", state);
      console.log("slice ", action);

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
  },
});

export const { addCustomer } = customerSlice.actions;

export default customerSlice.reducer;
