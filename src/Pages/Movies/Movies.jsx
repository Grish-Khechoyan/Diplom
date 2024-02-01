import Pagination from "../Pagination/Pagination";
import "./Movies.scss";
import { useEffect, useState } from "react";
import { getFilms } from "../../services/example.service";
import ShowMovieCart from "./ShowMovieCard/ShowMovieCard";
import InfiniteScroll from "react-infinite-scroll-component";

export default function Movies({ searchMovie }) {
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);
  const [loadingInitial, setLoadingInitial] = useState(true);
  const [loadingPagination, setLoadingPagination] = useState(false);
  const [totalPages, setTotalPages] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoadingPagination(true);
        const movieData = await getFilms(page);
        setMovies((prevMovies) => [...prevMovies, ...movieData]);
        setTotalPages(movieData.total_pages);
        setLoadingInitial(false);
        setLoadingPagination(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setLoadingInitial(false);
        setLoadingPagination(false);
      }
    };
    fetchData();
  }, [page]);

  const fetchMoreData = () => {
    if (page < totalPages) {
      setPage((prevPage) => prevPage + 1);
      setLoadingPagination(true); // Set loading state while fetching more data
    }
  };

  return (
    <div>
      {loadingInitial ? (
        <p>Loading...</p>
      ) : (
        <InfiniteScroll
          dataLength={movies.length}
          next={fetchMoreData}
          hasMore={page < totalPages}
          loader={<h4>Loading....</h4>}
        >
          {searchMovie && searchMovie.length === 0 && <ShowMovieCart movies={movies} />}
          {searchMovie && searchMovie.length > 0 && <ShowMovieCart movies={searchMovie} />}
        </InfiniteScroll>
      )}
      {/* {loadingPagination ? (
        <p>Loading pagination...</p>
      ) : (
        <Pagination
          page={page}
          totalPages={totalPages}
          handlePageChange={handlePageChange}
        />
      )} */}
    </div>
  );
}
