import { useEffect, useState } from "react";
import { fetchTvData } from "../../services/example.service";

export default function News() {
  const [tvData, setTvData] = useState([]);
  useEffect(
    () => async () => {
      try {
        const fetchTv = await fetchTvData();
        console.log(fetchTv);
        setTvData(fetchTv);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    },
    []
  );

  console.log(tvData);
  return (
    <div>
      {tvData.map((i) => {
        <p>{i.page}</p>;
      })}
    </div>
  );
}
