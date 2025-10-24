import WatchListMovie from "./WatchListMovie";
export default function WatchList({ movies, title, removeFromWatchList }) {
  return (
    <>
      {
        <div className="container py-3">
          <h1 className="mb-3 h4">{title}</h1>
          {movies.length == 0 ? (
            <div>Film Bulunamadı</div>
          ) : (
            <div
              id="movie-list"
              className="row row-cols-2 row-cols-md-3 row-cols-lg-6 g-1 g-lg-3"
            >
              {movies.map((movie_item, index) => {
                return (
                  <WatchListMovie
                    Key={index}
                    movieObj={movie_item}
                    removeFromWatchList={removeFromWatchList}
                  />
                );
              })}
            </div>
          )}
        </div>
      }
    </>
  );
}
