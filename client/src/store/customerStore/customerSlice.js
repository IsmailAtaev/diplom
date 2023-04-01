import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const customerSlice = createSlice({
  name: "customers",
  initialState: { customers: [], mainClient: {} },
  reducers: {},
});


export default customerSlice.reducer;
