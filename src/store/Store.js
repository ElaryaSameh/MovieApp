import { configureStore } from "@reduxjs/toolkit";
import favoriteReducer from "./Slices/favoriteSlice";
import moviesReducer from "./Slices/movies"; // Assuming you have a moviesSlice reducer

const store = configureStore({
  reducer: {
    favorites: favoriteReducer, 
    movies : moviesReducer, 
  },
});

export default store;
