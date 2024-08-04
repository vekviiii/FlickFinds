import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchMovies } from "../../store/utils/thunks";

const Home = () => {
  const dispatch = useDispatch();
  const movieArray = useSelector((state) => state.movies.movieArray);

  // Ensure movieArray is always an array
  // const movies = Array.isArray(movieArray) ? movieArray : [];

  return (
    <>
      <div className="container" style={{ height: "75vh" }}>
        <div
          className="d-flex justify-content-center align-items-end"
          style={{ height: "60%" }}
        >
          <button id="submit" onClick={() => dispatch(fetchMovies())}>
          </button>
        </div>
        <div className="my-4 text-center">
          {movieArray.length > 0 ? (
            <div>
              <h3>Top Movie:</h3>
              <ul>
                {movieArray.map((movie) => (
                  <li key={movie.id}>
                    <h4>{movie.movie_name}</h4>
                    <p>Genre: {movie.genre}</p>
                    <p>Release Date: {movie.release_date}</p>
                    <p>Rating: {movie.rating}</p>
                    <p>Description: {movie.description}</p>
                    <p>Director: {movie.director}</p>
                  </li>
                ))}
              </ul>
            </div>
          ) : (
            <p>No movie available</p>
          )}
        </div>
      </div>
    </>
  );
};

export default Home;