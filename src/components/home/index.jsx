import React from "react";

const Home = () => {
  return (
    <>
      <div className="container d-flex justify-content-center my-5">
        <input id="movie" placeholder="Enter movie name" type="text" />
      </div>
      <div className="container d-flex justify-content-center my-5">
        <button id="submit">Submit</button>
      </div>
    </>
  );
};

export default Home;
