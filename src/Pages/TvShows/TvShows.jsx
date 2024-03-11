import { useEffect, useState } from "react";
import { fetchTvData } from "../../services/example.service";
import InfiniteScroll from "react-infinite-scroll-component";
import ViewMovies from "../ViewMovies/ViewMovies";
import ShowMovieCard from "../ShowMovieCard/ShowMovieCard";

import "./TvShows.scss";

export default function TvShows() {
  const [tvData, setTvData] = useState([]);
  const [loadingInitial, setLoadingInitial] = useState(true);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { results: dataTv, total_pages } = await fetchTvData(page);
        setTvData((prevData) => [...prevData, ...dataTv]);
        setTotalPages(total_pages);
        setLoadingInitial(false);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [page]);

  const fetchMoreData = () => {
    setPage((prevPage) => prevPage + 1);
  };

  return (
    <div className="news">
      {loadingInitial ? (
        <p>Loading...</p>
      ) : (
        <InfiniteScroll
          dataLength={tvData.length}
          next={fetchMoreData}
          hasMore={page < totalPages}
          loader={<h4>Loading...</h4>}
          style={{
            height: "calc(100vh)",
            overflowY: "auto",
          }}>
          <ViewMovies  />
          <ShowMovieCard movies={tvData} />
          {/* <button onClick={() => setPage((prevPage) => prevPage + 1)}>
            Load More
          </button> */}
        </InfiniteScroll>
      )}
    </div>
  );
}
