import { createSlice } from "@reduxjs/toolkit";
import { Tweets } from "../../pages/tweetform/types";

const initialState = {
    tweets: []
} as {
    tweets : Tweets[];
};

export const tweetsSlice = createSlice({
    name: "tweets",
    initialState,
    reducers:{
        set: (state: {tweets: Tweets[]}, action:{payload: Tweets[]}) =>{
            state.tweets = action.payload;
        }
    }
})

export const { set } = tweetsSlice.actions;

export default tweetsSlice.reducer;