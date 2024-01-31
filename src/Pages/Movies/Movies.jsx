import Pagination from "../Pagination/Pagination";
import "./Movies.scss";
import { useEffect, useState } from "react";
import { getFilms } from "../../services/example.service";
import ShowMovieCart from "./ShowMovieCard/ShowMovieCard";
import InfiniteScroll from "react-infinite-scroll-component";

export default function Movies() {
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);
  const [loadingInitial, setLoadingInitial] = useState(true);
  const [loadingPagination, setLoadingPagination] = useState(false);
  const [totalPages, setTotalPages] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoadingPagination(true);
        const movieData = await getFilms(page, 10);
        setMovies((prevMovies) => [...prevMovies, ...movieData.results]);
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
      setPage(page + 1);
    }
  };

  // const handlePageChange = (selectedPage) => {
  //   setPage(selectedPage.selected + 1);
  // };

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
          <ShowMovieCart  movies={movies} />
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
