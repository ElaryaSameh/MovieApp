import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import instance from "../../axiosInstance/instance";


 export const moviesAction = createAsyncThunk("movies/getAll", async () => {
    const res = await instance.get("/movie/popular?api_key=c94b800b13b9b455a5d91c9b54e821a3");
    return res.data;
    

})        
 export const moviesSlice = createSlice({
    name: "movies",
    initialState: { movies: [] },

    extraReducers: (builder) => {
        builder.addCase(moviesAction.fulfilled, (state, action) => {
            state.movies = action.payload.results;
        });

        builder.addCase(moviesAction.rejected, (state, action) => {
            console.error("Error fetching movies:", action.error.message);
        });
        builder.addCase(moviesAction.pending, () => {
            console.log("");
        });
    },
})
export default moviesSlice.reducer;