import { configureStore } from "@reduxjs/toolkit";
import tweetsReducer from "../redux/tweet/index";

const store = configureStore({
  reducer: {
    tweets: tweetsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
