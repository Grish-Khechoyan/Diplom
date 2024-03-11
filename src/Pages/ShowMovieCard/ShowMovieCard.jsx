import StarRatings from "react-star-ratings";
import { Link } from "react-router-dom";
import { SiGoogleplay } from "react-icons/si";
import "./ShowMovieCard.scss";
import SearchInput from "../../Components/Layouts/SearchInput/SearchInput";

const imgBaseURL = "https://image.tmdb.org/t/p/w500";

export default function ShowMovieCard({ movies }) {
  return (
    <div className="ShowMovieCard">
      <SearchInput />
      {movies.map((movie) => (
        <div className="ShowMovieCard_wrap" key={movie.id}>
          <Link className="playButton" to={`${movie.id}`}>
            <SiGoogleplay />
          </Link>
          <img
            className="ShowMovieCard_img"
            src={`${imgBaseURL}${movie.poster_path}`}
            alt={movie.title}
          />
          <div className="ShowMovieCard_info">
            <h2 className="ShowMovieCard_title">
              {movie.original_title || movie.original_name}
            </h2>
            <div className="ShowMovieCard_average">
              <StarRatings
                numberOfStars={5}
                rating={movie.vote_average / 2}
                starDimension="16px"
                starSpacing="0px"
                starRatedColor="yellow"
                starHoverColor="yellow"
              />
            </div>
            {/* <p className="ShowMovieCard_language">{movie.original_language}</p> */}
          </div>
        </div>
      ))}
    </div>
  );
}
