import { useEffect, useState } from "react";
import { moviesRated } from "../../services/example.service";
import InfiniteScroll from "react-infinite-scroll-component";
import ShowMovieCard from "../ShowMovieCard/ShowMovieCard";

export default function Rating() {
  const [movieRated, setMovieRated] = useState([]);
  const [page, setPage] = useState(1);
  const [loadingInitial, setLoadingInitial] = useState(true);
  const [totalPages, setTotalPages] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { results: movieRatedData, total_pages } = await moviesRated(
          page
        );
        setMovieRated((prevMoviesRated) => [
          ...prevMoviesRated,
          ...movieRatedData,
        ]);
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
    // Check if there are more pages to fetch
    if (page < totalPages) {
      // Increment the page number to fetch the next page
      setPage((prevPage) => prevPage + 1);
    }
  };

  return (
    <div className="movies-container">
      {loadingInitial ? (
        <p>Loading...</p>
      ) : (
        <InfiniteScroll
          dataLength={movieRated.length}
          next={fetchMoreData}
          hasMore={page < totalPages}
          loader={<h4>Loading...</h4>}
          style={{
            height: "calc(100vh)",
            overflowY: "auto",
          }}>
          <ShowMovieCard movies={movieRated} />
        </InfiniteScroll>
      )}
    </div>
  );
}
