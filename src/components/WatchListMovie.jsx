export default function WatchListMovie({ movieObj, removeFromWatchList }) {
  return (
    <div className="col">
      {
        <div className="card movie position-relative">
          <img
            src={"https://image.tmdb.org/t/p/original/" + movieObj.poster_path}
            alt=""
            className="card-img-top"
          />{" "}
          <div>
            <button
              className="btn btn-link f-5 text-danger col position-absolute top-0 start-0"
              onClick={() => removeFromWatchList(movieObj)}
            >
              <i className="bi bi-dash-circle"></i>
            </button>
          </div>
        </div>
      }
    </div>
  );
}
