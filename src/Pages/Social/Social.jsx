import { useEffect, useState } from "react";
import { fetchTvData } from "../../services/example.service";

export default function Social() {
  const [tvData, setTvData] = useState([]);

  useEffect(() => {
    const fetchTv = async () => {
      try {
        const dataTv = await fetchTvData();
        console.log(dataTv.results);
        setTvData(dataTv.results);
      } catch (error) {
        console.error("Error fetching TV data:", error);
      }
    };

    fetchTv();
  }, []);

  return (
    <div>
      {tvData ? (
        tvData.map((tvShow) => <div key={tvShow.id}>{tvShow.name}</div>)
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
}
