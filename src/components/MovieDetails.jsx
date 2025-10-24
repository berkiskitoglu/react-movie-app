import { useEffect, useState } from "react";
import Loading from "./Loading";

const apiKey = "adeae1eb0a394e22f6f5fde907c673c4";
const page = 1;
const query = "batman";
const language = "tr-TR";

export default function MovieDetails({ movieObj, onClose }) {
  const [loadedMovie, setLoadedMovie] = useState(null);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    async function getMovieDetails() {
      setLoading(true);
      try {
        // id ye göre detay çekilecek
        const response = await fetch(
          `https://api.themoviedb.org/3/movie/${movieObj.id}?api_key=${apiKey}&language=${language}`
        );

        if (!response.ok) {
          throw new Error("Hata oluştu");
        }
        const data = await response.json();

        if (data) {
          setLoadedMovie(data);
          console.log(data);
        }
      } catch (error) {
        console(error);
      }
      setLoading(false);
    }
    getMovieDetails();
  }, [movieObj.id]);
  return (
    // Buraya card yapısıyla hazırlanmış detay bileşeni gelecek
    <div className="movie-details my-3">
      <div className="card">
        <div className="card-header d-flex justify-content-between align-items-center">
          <h2 className="title h5 mb-0">Movie Detials</h2>
          <button className="btn btn-close" onClick={() => onClose()}></button>
        </div>
        <div className="card-body">
          <div className="row">
            <div className="col-md-3">
              <img
                src={
                  "https://image.tmdb.org/t/p/original/" + movieObj.poster_path
                }
                alt={movieObj.title}
                className="img-fluid mb-3"
              />
            </div>
            <div className="col-md-9">
              <h3>{movieObj.title}</h3>
              <p>
                <strong>Özet:</strong> {movieObj.overview}
              </p>
              <p>
                <strong>Yayınlanma Tarihi:</strong> {movieObj.release_date}
              </p>
              <p>
                <strong>Puan:</strong> {movieObj.vote_average}
              </p>
              <p>{movieObj.overview}</p>
              {loading && <Loading />}
              {loadedMovie && (
                <>
                  <p>Süre : {loadedMovie.runtime}</p>
                  <p>Ülke : {loadedMovie.production_countries[0].name}</p>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
