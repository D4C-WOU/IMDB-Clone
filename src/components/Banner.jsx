import React, { useEffect, useState } from "react";
import axios from "axios";
import "../index.css";

function Banner() {
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    async function fetchBannerMovie() {
      try {
        const res = await axios.get(
          `https://api.themoviedb.org/3/movie/top_rated?api_key=${import.meta.env.VITE_TMDB_KEY
}&language=en-US&page=1`
        );


        const results = res.data.results.filter(m => m.backdrop_path);

        const randomMovie =
          results[Math.floor(Math.random() * results.length)];
        setMovie(randomMovie);
      } catch (err) {
        console.error("Error fetching banner movie:", err.response || err.message || err);
      }
    }

    fetchBannerMovie();
  }, []);

  if (!movie) return null; 

  return (
    <div
      className="h-[50vh] md:h-[100vh] bg-cover bg-center flex items-end"
      style={{
        backgroundImage: `url(https://image.tmdb.org/t/p/original/${movie.backdrop_path})`,
      }}
    >
      <div className="text-white text-xl text-center w-full bg-gray-900/60 p-4">
        {movie.title}
      </div>
    </div>
  );
}

export default Banner;
