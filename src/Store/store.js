import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./usersSlice";
import postsReducer from "./postsSlice";

const rootReducer = { users: userReducer, posts: postsReducer };
export const store = configureStore({
  reducer: rootReducer,
});


