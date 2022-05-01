import React from "react";

const MovieInfo = ({ movieInfo }) => {
  return (
    <>
      {/* <!-- Start content --> */}

      <article className="about mt-5">
        <div className="container">
          <div className="row">
            <section className="col-md-4 col-sm-12">
              <div style={{ width: "70%" }} className="photo">
                <img
                  className="img-fluid"
                  src={
                    `https://image.tmdb.org/t/p/w500` + movieInfo.poster_path
                  }
                  alt={movieInfo.poster_path}
                />
              </div>
            </section>

            <section className="d-flex justify-content-center align-items-center col-md-7 col-sm-12">
              <section className="movie-info">
                <h1>
                  {movieInfo.name} {movieInfo.title}
                </h1>
                <p className="mt-2">{movieInfo.overview}</p>
              </section>
            </section>
          </div>
        </div>
      </article>
      {/* <!-- End content --> */}
      {/* <!-- start movie details --> */}
      <article className="movie-details mt-4">
        <div className="container">
          <div className="row">
            <section className="col-sm-12">
              <h2>Details</h2>

              <p>
                Language: <span>{movieInfo.original_language}</span>
              </p>
              <p>
                Release Date: <span>{movieInfo.release_date}</span>
              </p>
            </section>
          </div>
        </div>
      </article>
      {/* <!-- End movie details --> */}
    </>
  );
};

export default MovieInfo;
