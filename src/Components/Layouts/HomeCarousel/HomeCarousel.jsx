import Carousel from "react-bootstrap/Carousel";
import { useEffect, useState } from "react";
import { getFilms } from "../../../services/example.service";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import StarRatings from "react-star-ratings";
import { Link } from "react-router-dom";
import "./HomeCarousel.scss";

export default function HomeCarousel() {
  const imgBaseURL = "https://image.tmdb.org/t/p/w500";
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const movieData = await getFilms();
        if (Array.isArray(movieData.results)) {
          setMovies(movieData.results);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  return (
    <Carousel data-bs-theme="pearl" className="home_carousel">
      {movies
        .filter((dateMov) => dateMov.release_date >= "2024-02-01")
        .slice(0, 4)
        .map((movie) => (
          <Carousel.Item key={movie.id} className="home_carousel_item ">
            <div className="home_carousel_item_bcg">
              <img
                src={`${imgBaseURL}${movie.backdrop_path}`}
                alt={movie.title}
              />
            </div>
            <Carousel.Caption className="home_carousel_caption">
              <img
                src={`${imgBaseURL}${movie.poster_path}`}
                alt={movie.title}
              />
              <div className="home_carousel_caption_info">
                <span>{movie.title}</span>
                <StarRatings
                  numberOfStars={5}
                  rating={movie.vote_average / 2}
                  starDimension="22px"
                  starSpacing="0px"
                  starRatedColor="yellow"
                  starHoverColor="yellow"
                />
                <p>{movie.overview}</p>
                <Link to={`/${movie.id}`}>View</Link>
              </div>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
    </Carousel>
  );
}
