import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {registrationApi} from "../../http/index";

export const registration = createAsyncThunk(
  "user/registration",
  async (_, { rejectWithValue, dispatch }) => {
   console.log("qqq","wwww");
    //const { data } = await registrationApi("aaaa", "ddddd");
    dispatch(setUser("qwerty"));
  }
);

const userSlice = createSlice({
  name: "user",
  initialState: { user: {}, isAuth: false },

  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    },

    setAuth: (state, action) => {
      state.isAuth = action.payload.isAuth;
    },
  },

  extraReducers: {
    [registration.fulfilled]: () => console.log("fulfilled"),
    [registration.pending]: () => console.log("pending"),
    [registration.rejected]: () => console.log("rejected"),
  },
});

export const { setUser, setAuth } = userSlice.actions;

export default userSlice.reducer;

// registration: (state, action) => {
//     const response = await registrationApi(action.payload.email, action.payload.password );
//     console.log(response);
//     localStorage.setItem('token', response.data.accessToken);
//     setAuth(true);
//     setUser(response.data.user);
// },
