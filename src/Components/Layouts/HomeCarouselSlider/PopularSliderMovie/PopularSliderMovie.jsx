import { useEffect, useState } from "react";
import Slider from "react-slick";
import { popularMovie } from "../../../../services/example.service";

export default function PopularSliderMovie() {
  const [popularMovies, setPopularMovies] = useState([]);
  const imgBaseURL = "https://image.tmdb.org/t/p/w500";

  useEffect(() => {
    const fetchPopularMovies = async () => {
      try {
        const popularMoviesData = await popularMovie();
        // Log popularMoviesData to inspect the fetched data
        console.log("Popular Movies Data:", popularMoviesData);

        // Check if popularMoviesData.results is an array before setting the state
        if (Array.isArray(popularMoviesData.results)) {
          setPopularMovies(popularMoviesData.results);
        } else {
          console.error(
            "Popular movies data is not in the expected format:",
            popularMoviesData
          );
        }
      } catch (error) {
        console.error("Error fetching popular movies data:", error);
      }
    };

    fetchPopularMovies();
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
  };

  return (
    <div className="PopularSliderMovie">
      <Slider {...settings} >
        {popularMovies.map((movie) => (
          <div key={movie.id}>
            <img src={`${imgBaseURL}${movie.poster_path}`} alt={movie.title} />
          </div>
        ))}
      </Slider>
    </div>
  );
}
