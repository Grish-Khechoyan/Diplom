import SliderProductionCompanies from "./SliderProductionCompanies/SliderProductionCompanies";
import { useEffect, useMemo, useState } from "react";
import ReactPlayer from "react-player";
import {
  moviesReviews,
  tvReviews,
  viewMovie,
  viewMovieVideoKey,
  viewTv,
  viewTvVideoKey,
} from "../../services/example.service";
import { useLocation, useParams } from "react-router-dom";
import StarRatings from "react-star-ratings";
import ViewReview from "./ViewReview/ViewReview";

import "./ViewMovies.scss";

export default function ViewMovies() {
  const [view, setView] = useState(null);
  const [viewVideoKey, setViewVideoKey] = useState([]);
  const [review, setReview] = useState([]);
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
          const viewTvReviews = await tvReviews(id);
          setReview(viewTvReviews);
        } else {
          const viewData = await viewMovie(id);
          setView(viewData);
          const viewMovieVideoKeyData = await viewMovieVideoKey(id);
          setViewVideoKey(viewMovieVideoKeyData);
          const viewMoviesReviews = await moviesReviews(id);
          setReview(viewMoviesReviews);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchDataMovie();
  }, [id, movieType]);

  return (
    <div className="ViewMovies">
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
            className="ReactPlayer"
            style={{ minWidth: "900px", minHeight: "400px" }}
            url={`https://www.youtube.com/watch?v=${viewVideoKey.results[0].key}`}
          />
        )}
      {view &&
        view.map((item) => (
          <div className="ViewMovies_info" key={item.id}>
            <div className="ViewMovies_info_content">
              <div className="ViewMovies_info_content_wrap ">
                <div className="ViewMovies_info_title">
                  <h4>{item.title || item.name}</h4>
                  <span>
                    <StarRatings
                      numberOfStars={5}
                      rating={item.vote_average / 2}
                      starDimension="19px"
                      starSpacing="0px"
                      starRatedColor="yellow"
                      starHoverColor="yellow"
                    />
                  </span>
                </div>
                <span>{item.release_date} </span>
                <span>{item.genres.map((genr) => genr.name).join(" ~ ")}</span>
              </div>
              <div className="ViewMovies_info_date_genr">
                <h4>Popularity</h4>
                <p>{item.popularity}</p>
              </div>
              <div className="ViewMovies_info_duration">
                {item.runtime && (
                  <div>
                    <h4>Duration</h4>
                    <span>{item.runtime} m</span>
                  </div>
                )}
              </div>
              <div className="ViewMovies_info_language">
                <h4>Language</h4>
                <span>{item.original_language.toUpperCase()}</span>
              </div>
            </div>
            <div>
              <h3>Description</h3>
              <span>{item.overview}</span>
            </div>
          </div>
        ))}
      <div style={{ marginTop: "10px" }}>
        <h2>Production Companies</h2>
        {view &&
          view.production_companies.map((item) => (
            <div
              style={{ marginTop: "10px", display: "flex" }}
              key={item.id}
              className="home_carousel_item">
              <div style={{}} className="home_carousel_caption">
                <img
                  src={`${imgBaseURL}${item.logo_path}`}
                  alt={item.name}
                  style={{
                    width: "50px",
                    height: "50px",
                    objectFit: "contain",
                  }}
                />
                <div className="home_carousel_caption_info">
                  <span>{item.name}</span>
                </div>
              </div>
            </div>
          ))}
      </div>
      {/* <SliderProductionCompanies
        productionCompanies={view ? view.production_companies : []}
      /> */}
      <ViewReview review={review} />
    </div>
  );
}
