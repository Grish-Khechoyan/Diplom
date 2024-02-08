import { useEffect, useState } from "react";
import { getFilms } from "../../../services/example.service";

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
    <div>
      {movies.slice(0, 5).map((movie) => (
        <div key={movie.id}>
          <img src={imgBaseURL + movie.backdrop_path} alt={movie.title} />
        </div>
      ))}
    </div>
  );
}
