import SearchInput from "../../Components/Layouts/SearchInput/SearchInput";
import { useEffect, useState } from "react";
import { search } from "../../services/example.service";

import "./Home.scss";
import HomeCarousel from "../../Components/Layouts/HomeCarousel/HomeCarousel";

export default function Home() {
  const [searchKey, setSearchKey] = useState("");
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchData = setTimeout(async () => {
      try {
        const searchData = await search(searchKey);
        setData(searchData);
      } catch (error) {
        console.log("Error fetching data:", error);
      }
    }, 1000);
    return () => clearTimeout(fetchData);
  }, [searchKey]);
  return (
    <div>
      <SearchInput
        value={searchKey}
        onTextChange={(text) => setSearchKey(text)}
      />
      <HomeCarousel />
    </div>
  );
}
// amen tar tar greluc taza datan beri qci datayi mej
// bayc
// zapros ani 1 vrkyan heto grel prtsneluc
// const handleSearchMovie = async (e) => {
//   e.preventDefault();
//   try {
//     const searchData = await search(searchValue);
//     setSearchMovie(searchData);
//   } catch (error) {
//     console.log("Error fetching data:", error);
//   }
// };
