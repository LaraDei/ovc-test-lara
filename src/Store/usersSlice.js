import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import Axios from "axios";

export const getUsers = createAsyncThunk("users/getUsers", async () => {
  const respose = await Axios.get("https://jsonplaceholder.typicode.com/users");
  return respose.data;
});

export const usersSlice = createSlice({
  name: "users",
  initialState: {
    users: [],
    isLoading: false,
    hasError: false,
  },
  reducers: {},
  extraReducers: {
    [getUsers.pending]: (state, action) => {
      state.isLoading = true;
      state.hasError = false;
    },
    [getUsers.fulfilled]: (state, action) => {
      state.users = action.payload;
      state.isLoading = false;
      state.hasError = false;
    },
    [getUsers.rejected]: (state, action) => {
      state.isLoading = false;
      state.hasError = true;
    },
  },
});

export default usersSlice.reducer;
