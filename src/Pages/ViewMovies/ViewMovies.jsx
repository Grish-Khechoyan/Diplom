import { useEffect, useState } from "react";
import ReactPlayer from "react-player";
import { viewMovie, viewMovieVideoKey } from "../../services/example.service";
import { useParams } from "react-router-dom";
import StarRatings from "react-star-ratings";

export default function ViewMovies() {
  const [viewMovies, setViewMovies] = useState(null);
  const [viewMoviesVideoKey, setViewMoviesVideoKey] = useState([]);

  const { id } = useParams();

  useEffect(() => {
    const fetchDataMovie = async () => {
      try {
        const viewMovieData = await viewMovie(id);
        setViewMovies(viewMovieData);
        const viewMovieVideoKeyData = await viewMovieVideoKey(id);
        setViewMoviesVideoKey(viewMovieVideoKeyData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchDataMovie();
  }, [id]);

  return (
    <div>
      {viewMoviesVideoKey &&
        viewMoviesVideoKey.results &&
        viewMoviesVideoKey.results.length > 0 && (
          <ReactPlayer
            light={true}
            loop={true}
            muted={true}
            key={viewMoviesVideoKey.results[0].id}
            controls={true}
            playing={true}
            url={`https://www.youtube.com/watch?v=${viewMoviesVideoKey.results[0].key}`}
          />
        )}
      {viewMovies && (
        <div>
          <div>
            <span>{viewMovies.original_title}</span>
            <StarRatings
              numberOfStars={5}
              rating={viewMovies.vote_average / 2}
              starDimension="16px"
              starSpacing="0px"
              starRatedColor="yellow"
              starHoverColor="yellow"
            />
          </div>
          <p>
            <span>{viewMovies.release_date}</span>
            <span>{viewMovies.original_language.toUpperCase()}</span>
            &nbsp;
            <span>{viewMovies.genres.map((genr) => genr.name).join(" ")}</span>
          </p>
          <div>
            <h3>Popularity</h3>
            <span>{viewMovies.popularity}</span>
          </div>
          <div>
            <h3>Duration</h3>
            <span>{viewMovies.runtime}</span>
          </div>
          <div>
            <h3>Description</h3>
            <span>{viewMovies.overview}</span>
          </div>
        </div>
      )}
    </div>
  );
}
