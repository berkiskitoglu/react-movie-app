import Movie from "./Movie";

export default function MovieList({ movies, title }) {
  return (
    <div className="container py-3">
      <h1 className="mb-3 h4">{title}</h1>
      {movies.length == 0 ? (
        <div>Film Bulunamadı</div>
      ) : (
        <div
          id="movie-list"
          className="row row-cols-3 row-cols-md-4 row-cols-lg-6 g-2"
        >
          {movies.map((movie_item, index) => {
            return <Movie Key={index} movieObj={movie_item} />;
          })}
        </div>
      )}
    </div>
  );
}
