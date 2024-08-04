import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const URL_SERV = "http://localhost:3000";

export const fetchMovies = createAsyncThunk("movies/fetchMovies", async () => {
  
  const randomId = Math.floor(Math.random() * 1000) + 1;

  try {
    const response = await axios.get(`${URL_SERV}/movies/${randomId}`);
    return response.data;
  } catch (error) {
    throw error;
  }
});