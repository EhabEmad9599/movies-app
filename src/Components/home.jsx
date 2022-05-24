import React from "react";
import { Link } from "react-router-dom";
// import { Link } from "react-router-dom";

function Home({ trendingMovies, movieDetails }) {
  return (
    <>
      <div className="container pt-5">
        <div className="row">
          <div className="col-md-12">
            <div className="intro ps-2 border-start border-5 border-danger">
              <h4>New &amp; Upcoming Movies</h4>
              <p>Most warched movies by days</p>
            </div>
          </div>
          {trendingMovies.map((movie) => (
            <Link
              to={`/movieInfo/${movie.id}`}
              style={{ textDecoration: "none" }}
              onClick={() => movieDetails(movie)}
              key={movie.id}
              className="col-lg-2 col-md-4 col-sm-12"
            >
              <section to={`/movieInfo/${movie.id}`} className="movie">
                <img
                  className="w-100 pt-4"
                  src={`https://image.tmdb.org/t/p/w500` + movie.poster_path}
                  alt={movie.title}
                />
                <h6 className="mt-3">
                  {movie.title}
                  {movie.name}
                </h6>
              </section>
              <span className="badge bg-dark">{movie.vote_average}</span>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}

export default Home;
