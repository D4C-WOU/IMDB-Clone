import React, { useState } from "react";
import Navbar from "./components/Navbar";
import "./App.css";
import Movies from "./components/Movies";
import Watchlist from "./components/Watchlist";
import Banner from "./components/Banner";
import { useEffect } from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  let [watchList, setWatchList] = useState([]);

  let handleAddtoWatchList = (movieObj) => {
    let newWatchList = [...watchList, movieObj];
    localStorage.setItem("moviesApp", JSON.stringify(newWatchList));
    setWatchList(newWatchList);
    console.log(newWatchList);
  };

  let handleRemovefromWatchList = (movieObj) => {
    let filteredWatchList = watchList.filter((movie) => {
      return movie.id != movieObj.id;
    });

    localStorage.setItem("moviesApp", JSON.stringify(filteredWatchList));
    setWatchList(filteredWatchList);
    console.log(filteredWatchList);
  };

  useEffect(() => {
    let moviesFromLocalStorage = localStorage.getItem("moviesApp");
    if (!moviesFromLocalStorage) {
      return;
    }

    setWatchList(JSON.parse(moviesFromLocalStorage));
  }, []);

  return (
    <>
      <BrowserRouter>
        <Navbar />

        <Routes>
          <Route
            path="/"
            element={
              <>
                <Banner />
                <Movies
                  watchList={watchList}
                  handleRemovefromWatchList={handleRemovefromWatchList}
                  handleAddtoWatchList={handleAddtoWatchList}
                />
              </>
            }
          />

          <Route
            path="/watchlist"
            element={
              <Watchlist
                watchList={watchList}
                setWatchList={setWatchList}
                handleRemovefromWatchList={handleRemovefromWatchList}
              />
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

// https://api.themoviedb.org/3/movie/top_rated?api_key=3a16a916657f3382ab440db1a0d8dd79&language=en-US&page=1
