import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { registrationApi, loginApi } from "../../http/index";

export const registration = createAsyncThunk(
  "user/registration",
  async (userData, { rejectWithValue, dispatch }) => {
    console.log("qqq: ", userData);
    const { email, password, role, nickName } = userData;
    const { data } = await registrationApi(email, password, role, nickName);
    console.log("data: ", data);
    dispatch(setUser(data));
  }
);

export const login = createAsyncThunk(
  "user/login",
  async (userData, { rejectWithValue, dispatch }) => {
    const { email, password, nickName } = userData;
    const { data } = await loginApi(email, password, nickName);
    dispatch(setUser(data));
  }
);

const userSlice = createSlice({
  name: "user",
  initialState: {
    user: {
      email: "",
      id: "",
      isActivated: "",
      role: "",
      nickName: "",
    },
  },

  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    },
  },

  extraReducers: {
    [registration.fulfilled]: () => console.log("fulfilled"),
    [registration.pending]: () => console.log("pending"),
    [registration.rejected]: () => console.log("rejected"),
  },
});

export const { setUser } = userSlice.actions;

export default userSlice.reducer;
