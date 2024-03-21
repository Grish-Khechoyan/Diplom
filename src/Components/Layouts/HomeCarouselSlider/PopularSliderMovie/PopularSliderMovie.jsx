import { useEffect, useState } from "react";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import { SiGoogleplay } from "react-icons/si";
import StarRatings from "react-star-ratings";

import { popularMovie } from "../../../../services/example.service";

export default function PopularSliderMovie() {
  const [popularMovies, setPopularMovies] = useState([]);
  const imgBaseURL = "https://image.tmdb.org/t/p/w500";

  useEffect(() => {
    const fetchPopularMovies = async () => {
      try {
        const popularMoviesData = await popularMovie();
        setPopularMovies(popularMoviesData);
      } catch (error) {
        console.error("Error fetching popular movies data:", error);
      }
    };

    fetchPopularMovies();
  }, []);

  const settings = {
    dots: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    infinite: true,
  };

  return (
    <div className="PopularSliderMovie">
      <Slider {...settings}>
        {popularMovies &&
          popularMovies.map &&
          popularMovies.map((movie) => (
            <div className="ShowMovieCard_wrap" key={movie.id}>
              <Link className="playButton" to={`/movies/${movie.id}`}>
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
              </div>
            </div>
          ))}
      </Slider>
    </div>
  );
}
