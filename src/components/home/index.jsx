import React, { useState } from "react";

const Home = () => {
  const [movie, setMovie] = useState("");

  const DisplayMovie = () => {
    setMovie("hello!");
  };

  return (
    <>
      <div className="container" style={{ height: "75vh" }}>
        <div
          className="d-flex justify-content-center align-items-end"
          style={{ height: "60%" }}
        >
          <button id="submit" onClick={DisplayMovie}></button>
        </div>
        <div className="my-4 text-center">
          <label>{movie}</label>
        </div>
      </div>
    </>
  );
};

export default Home;
