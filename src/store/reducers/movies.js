import { createSlice } from "@reduxjs/toolkit";
import { fetchMovies } from "../utils/thunks";

export const moviesSlice = createSlice({
  name: 'movies',
  initialState: {
    currentMovie: null, // Holds a single movie object
    movieArray: [], // Holds the array of movies
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchMovies.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchMovies.fulfilled, (state, action) => {
        state.movieArray = [action.payload]; // Store the array of movies
        state.currentMovie = action.payload[0] || null; // Set the single movie object (e.g., first movie)
        state.loading = false;
      })
      .addCase(fetchMovies.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  }
});

export default moviesSlice.reducer;