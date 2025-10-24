import React, { useContext, useEffect, useState } from "react";
import { Link, NavLink, useParams } from "react-router";
import Loading from "../components/Loading";
import ErrorMessage from "../components/ErrorMessage";
import SimilarMovies from "./SimilarMovies";
import Actors from "../components/Actors";
import { UserContext } from "../contexts/UserContext";

const language = "tr-TR";

const MovieDetails = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const { addToWatchList, watchList, removeFromWatchList } =
    useContext(UserContext);
  const isAdded = watchList?.find((i) => i.id == movie?.id);
  useEffect(() => {
    async function getMovie() {
      try {
        const response = await fetch(
          `${ApiUrl}/movie/${id}?api_key=${apiKey}&language=${language}&append_to_response=credits`
        );

        if (!response.ok) {
          throw new Error("Hata oluştu");
        }
        const data = await response.json();

        setMovie(data);

        setError("");
      } catch (error) {
        setError(error.message);
      }

      setLoading(false);
    }
    getMovie();
  }, [id]);

  if (loading) {
    return <Loading />;
  }
  if (error) {
    return <ErrorMessage message={error} />;
  }
  return (
    <>
      <div
        className="text-white position-relative"
        style={{
          backgroundImage: `url(https://image.tmdb.org/t/p/original/${movie.backdrop_path})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          minHeight: "100vh",
        }}
      >
        <div className="img-overlay">
          <div className="container d-flex align-items-center justify-content-center min-vh-100">
            <div className="row">
              <div className="col-md-3 d-none d-lg-block">
                <img
                  src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
                  alt={movie.title}
                  className="img-fluid rounded shaadow img-thumnail"
                />
              </div>
              <div className="col-md-9">
                <h1 className="display-4">{movie.title}</h1>
                <p>
                  {movie.release_date} <i className="bi bi-dot text-white"></i>
                  <span className="text-white">
                    {movie.genres.map((genre) => genre.name).join(", ")}
                  </span>
                  <i className="bi bi-dot text-white"></i>
                  {movie.runtime} dk
                </p>
                <p>
                  <span className="badge bg-warning">
                    {Math.round(movie.vote_average * 10)}%
                  </span>

                  <span className="badge bg-danger fs-6 ms-2 pointer">
                    {isAdded ? (
                      <i
                        className="bi bi-heart-fill"
                        onClick={() => removeFromWatchList(movie)}
                      ></i>
                    ) : (
                      <i
                        className="bi bi-heart"
                        onClick={() => addToWatchList(movie)}
                      ></i>
                    )}
                  </span>
                </p>

                {movie.overview && (
                  <p className="lead">
                    <strong>Özet : </strong>
                    {movie.overview}
                  </p>
                )}
                <div className="d-flex flex-column flex-md-row justify-content-between align-items-start">
                  <p className="d-flex flex-column text-center">
                    <span>Yapımcı: </span>
                    <span>{movie.production_companies[0].name}</span>
                  </p>
                  <p className="d-flex flex-column text-center">
                    <span>Yönetmen:</span>
                    <span>{movie.credits.crew[0]?.name}</span>
                  </p>
                  <p className="d-flex flex-column text-center">
                    <span>Senarist: </span>
                    <span>{movie.credits.crew[1]?.name}</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Actors actors={movie.credits.cast} />
      <SimilarMovies movieId={id} />
    </>

    // <div className="my-3">
    //   <div className="card">
    //     <div className="card-header d-flex justify-content-between align-items-center">
    //       <h2 className="title h5 mb-0">Movie Details</h2>
    //       <button className="btn btn-danger btn-sm" onClick={() => onClose()}>
    //         Kapat
    //       </button>
    //     </div>
    //     <div className="card-body">
    //       <div className="row">
    //         <img
    //           src={"https://image.tmdb.org/t/p/original/" + movie.backdrop_path}
    //           alt=""
    //           className="img-fluid"
    //         />
    //         <h3>{movie.title}</h3>
    //         <p>{movie.overview}</p>
    //         <p>Release Date: {movie.release_date}</p>
    //         <p>Rating: {movie.vote_average}</p>
    //         {movie && (
    //           <>
    //             <p>Süre: {movie.runtime}</p>
    //             <p>Ülke: {movie.production_countries[0].name}</p>
    //             <p>Yapımcı: {movie.production_companies[0].name}</p>
    //             <p>Yönetmen: {movie.credits.crew[0].name}</p>
    //             <p>Senarist: {movie.credits.crew[1].name}</p>
    //             <p>Türler:</p>
    //             <ul className="list-unstyled d-flex flex-wrap">
    //               {movie.genres.map((genre) => (
    //                 <li key={genre.id} className="badge bg-primary me-2 mb-2">
    //                   {genre.name}
    //                 </li>
    //               ))}
    //             </ul>
    //             <div className="card card-body">
    //               <p>Oyuncular:</p>
    //               <div className="row">
    //                 {movie.credits.cast.slice(0, 12).map((actor) => (
    //                   <div className="col-md-2" key={actor.id}>
    //                     <img
    //                       src={
    //                         "https://image.tmdb.org/t/p/original/" +
    //                         actor.profile_path
    //                       }
    //                       alt={actor.name}
    //                       className="img-fluid"
    //                     />
    //                     <p>{actor.name}</p>
    //                   </div>
    //                 ))}
    //               </div>
    //             </div>
    //           </>
    //         )}
    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
};

export default MovieDetails;
