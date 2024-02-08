import { useEffect, useState } from "react";
import { getFilms } from "../../services/example.service";
import ShowMovieCart from "./ShowMovieCard/ShowMovieCard";
import InfiniteScroll from "react-infinite-scroll-component";

import "./Movies.scss";

export default function Movies() {
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);
  const [loadingInitial, setLoadingInitial] = useState(true);
  const [totalPages, setTotalPages] = useState(0);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const { results: movieData, total_pages } = await getFilms(page);
        setMovies((prevMovies) => [...prevMovies, ...movieData]);
        setTotalPages(total_pages);
        setLoadingInitial(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setLoadingInitial(false);
      }
    };
    fetchData();
  }, [page]);

  const fetchMoreData = () => {
    setPage((prevPage) => prevPage + 1);
  };

  return (
    <div className="movies-container">
      {loadingInitial ? (
        <p>Loading...</p>
      ) : (
        <InfiniteScroll
          dataLength={movies.length}
          next={fetchMoreData}
          hasMore={page < totalPages}
          loader={<h4>Loading....</h4>}
          style={{
            height: "calc(100vh - 77px)",
            overflowY: "auto",
          }}>
          <ShowMovieCart movies={movies} genres />

          {/* {searchMovie && searchMovie.length === 0 && ( */}
          {/* )} */}
          {/* {searchMovie && searchMovie.length > 0 && (
            <ShowMovieCart movies={searchMovie} />
          )} */}
        </InfiniteScroll>
      )}
    </div>
  );
}
