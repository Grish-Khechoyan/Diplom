import { useEffect, useState } from "react";
import { getFilms, search } from "../../services/example.service";
import InfiniteScroll from "react-infinite-scroll-component";
import ShowMovieCart from "../ShowMovieCard/ShowMovieCard";

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

  // useEffect(() => {
  //   const {results} = await search()
  //   setMovies(results)
  // }, [searchKey]);

  const fetchMoreData = () => {
    // if (page < totalPages) {
    //   setPage((prevPage) => prevPage + 1);
    // }
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
          loader={<h4>Loading...</h4>}
          style={{
            height: "calc(100vh)",
            overflowY: "auto",
          }}>
          <ShowMovieCart movies={movies} />
          <button onClick={() => setPage((prevPage) => prevPage + 1)}>
            Load More
          </button>
        </InfiniteScroll>
      )}
    </div>
  );
}
