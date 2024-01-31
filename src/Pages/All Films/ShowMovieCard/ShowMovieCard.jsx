import "./ShowMovieCard.scss";

export default function ShowMovieCart({ movies }) {
  const imgBaseURL = "https://image.tmdb.org/t/p/w500";

  return (
    <div className="ShowMovieCard">
      {movies.slice(0, 8).map((movie) => (
        <div className="ShowMovieCard_wrap" key={movie.id}>
          <img
            className="ShowMovieCard_img"
            src={`${imgBaseURL}${movie.poster_path}`}
            alt={movie.title}
          />
          <div className="ShowMovieCard_info">
            <h2 className="ShowMovieCard_title">{movie.title}</h2>
            <p className="ShowMovieCard_average">{movie.vote_average}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
