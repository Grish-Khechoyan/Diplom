import { useEffect, useMemo, useState } from "react";
import ReactPlayer from "react-player";
import {
  viewMovie,
  viewMovieVideoKey,
  viewTv,
  viewTvVideoKey,
} from "../../services/example.service";
import { useLocation, useParams } from "react-router-dom";
import StarRatings from "react-star-ratings";

export default function ViewMovies() {
  const [viewMovies, setView] = useState(null);
  const [viewVideoKey, setViewVideoKey] = useState([]);
  const { pathname } = useLocation();

  const { id } = useParams();

  const movieType = useMemo(() => pathname.split("/")[1], [pathname]);

  useEffect(() => {
    const fetchDataMovie = async () => {
      try {
        if (movieType === "tv-shows") {
          const viewData = await viewTv(id);
          setView(viewData);
          const viewTvVideoKeyData = await viewTvVideoKey(id);
          setViewVideoKey(viewTvVideoKeyData);
        } else {
          const viewData = await viewMovie(id);
          setView(viewData);
          const viewMovieVideoKeyData = await viewMovieVideoKey(id);
          setViewVideoKey(viewMovieVideoKeyData);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchDataMovie();
  }, [id, movieType]);

  return (
    <div>
      {viewVideoKey &&
        viewVideoKey.results &&
        viewVideoKey.results.length > 0 && (
          <ReactPlayer
            light={true}
            loop={true}
            muted={true}
            key={viewVideoKey.results[0].id}
            controls={true}
            playing={true}
            url={`https://www.youtube.com/watch?v=${viewVideoKey.results[0].key}`}
          />
        )}
      {viewMovies && (
        <div>
          <div
            style={{
              display: "flex",
            }}>
            <div>
              <div
                style={{
                  display: "flex",
                }}>
                <h4>{viewMovies.title || viewMovies.name}</h4>
                <span
                  style={{
                    marginLeft: "10px",
                  }}>
                  <StarRatings
                    numberOfStars={5}
                    rating={viewMovies.vote_average / 2}
                    starDimension="19px"
                    starSpacing="0px"
                    starRatedColor="yellow"
                    starHoverColor="yellow"
                  />
                </span>
              </div>
              <span>
                <span>{viewMovies.release_date}</span>&nbsp;
                {viewMovies.genres.map((genr) => genr.name).join(" ")}
              </span>
            </div>
            <div
              style={{
                borderLeft: "1px solid #ccc",
                marginLeft: 20,
                paddingLeft: 20,
              }}>
              <h4>Popularity</h4>
              <p>{viewMovies.popularity}</p>
            </div>
          </div>
          <p>
            <span>{viewMovies.original_language.toUpperCase()}</span>
          </p>
          <div>
            {viewMovies.runtime && (
              <div>
                <h3>Duration</h3>
                <span>{viewMovies.runtime}</span>
              </div>
            )}
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
