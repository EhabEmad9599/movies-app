import { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "./navbar";
import Home from "./home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MovieInfo from "./movieInfo";
import PageNotFound from "./pageNotFound";

function App() {
  const [movies, setMovies] = useState([]);
  const [movieInfo, setMovieInfo] = useState({});

  const getTrending = async () => {
    let response = await axios.get(
      `https://api.themoviedb.org/3/trending/movie/week?api_key=f1aca93e54807386df3f6972a5c33b50`
    );
    setMovies(response.data.results);
  };

  useEffect(() => {
    getTrending();
  }, []);

  //Lifting State Up data from home component to get movie and pass it to movie info component
  const movieDetails = (info) => {
    setMovieInfo(info);
  };
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home movieDetails={movieDetails} trendingMovies={movies} />}/>
          <Route path="/MovieInfo/:id" element={<MovieInfo movieInfo={movieInfo} />}/>
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
