import  { useEffect, useState } from "react";
import { getFilms} from "../../services/example.service";
import ShowMovieCart from "./ShowMovieCard/ShowMovieCard";
import Pagination from "../Pagination/Pagination";

export default function AllFilms() {
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);
  const [loadingInitial, setLoadingInitial] = useState(true);
  const [loadingPagination, setLoadingPagination] = useState(false);
  const [totalPages, setTotalPages] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoadingPagination(true);
        const movieData = await getFilms(page, 8);
        setMovies(movieData.results);
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

  const handlePageChange = (selectedPage) => {
    setPage(selectedPage.selected + 1);
  };

  return (
    <div>
      {loadingInitial ? (
        <p>Loading...</p>
      ) : (
        <ShowMovieCart movies={ movies} />
      )}
      {loadingPagination ? (
        <p>Loading pagination...</p>
      ) : (
        <Pagination
          page={page}
          totalPages={totalPages}
          handlePageChange={handlePageChange}
        />
      )}
    </div>
  );
}
