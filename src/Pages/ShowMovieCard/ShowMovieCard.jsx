import StarRatings from "react-star-ratings";
import { Link } from "react-router-dom";

import "./ShowMovieCard.scss";

export default function ShowMovieCard({ movies }) {
  const imgBaseURL = "https://image.tmdb.org/t/p/w500";

  return (
    <div className="ShowMovieCard">
      {movies.map((movie) => (
        <div className="ShowMovieCard_wrap" key={movie.id}>
          <img
            className="ShowMovieCard_img"
            src={`${imgBaseURL}${movie.poster_path}`}
            alt={movie.title}
          />
          <div className="ShowMovieCard_info">
            <h2 className="ShowMovieCard_title">
              {movie.original_title || movie.original_name}
            </h2>
            <p className="ShowMovieCard_average">
              <StarRatings
                numberOfStars={5}
                rating={movie.vote_average / 2}
                starDimension="16px"
                starSpacing="0px"
                starRatedColor="yellow"
                starHoverColor="yellow"
              />
            </p>
            <Link to={`${movie.id}`}>View</Link>

            <p className="ShowMovieCard_language">{movie.original_language}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
