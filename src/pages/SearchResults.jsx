import React, { useEffect, useState } from "react";
import Loading from "../components/Loading";
import ErrorMessage from "../components/ErrorMessage";
import MovieList from "../components/MovieList";
import { useSearchParams } from "react-router";
import Pagination from "../components/Pagination";

const ApiUrl = "https://api.themoviedb.org/3";
const apiKey = "adeae1eb0a394e22f6f5fde907c673c4";
const page = 1;
const language = "tr-TR";

const SearchResults = () => {
  const [movies, setMovies] = useState([]);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get("q");
  const page = searchParams.get("page") || 1;
  const [totalPages, setTotalPages] = useState(0);

  useEffect(() => {
    async function getMovies() {
      setLoading(true);
      try {
        const response = await fetch(
          ` ${ApiUrl}/search/movie?api_key=${apiKey}&query=${query}&page=${page}&language=${language}`
        );

        if (!response.ok) {
          throw new Error("Hata oluştu");
        }
        const data = await response.json();

        if (data.results) {
          setMovies(data.results);
          setTotalPages(data.total_pages);
        }
        setError("");
      } catch (error) {
        setError(error.message);
      }

      setLoading(false);
    }
    getMovies();
  }, [searchParams]);

  if (loading) {
    return <Loading />;
  }
  if (error) {
    return <ErrorMessage message={error} />;
  }
  return (
    <>
      <MovieList movies={movies} title={`Arama Sonuçları: ${query}`} />
      <Pagination
        page={page}
        setSearchParams={setSearchParams}
        query={query}
        totalPages={totalPages}
      />
    </>
  );
};

export default SearchResults;
