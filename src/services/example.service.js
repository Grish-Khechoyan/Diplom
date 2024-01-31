import appAxios from "./axios.service";

export const getFilms = async (page, limit) => {
  try {
    const response = await appAxios.get(`/discover/movie`, {
      params: {
        api_key: "88d539e4615b22d8b094b9c0e143595d",
        page: page,
        limit: limit,
      },
    });
    const data = response.data;
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};

export const search = async (searchValue) => {
  try {
    const getSearch = await appAxios.get("/search/movie", {
      params: {
        api_key: "88d539e4615b22d8b094b9c0e143595d",
        query: searchValue,
      },
    });
    const dataSerach = getSearch.data;
    return dataSerach.results;
  } catch (error) {
    console.log("Error fetching data:", error);
  }
};

export const fetchTvData = async () => {
  try {
    const getTv = await appAxios("/discover/tv", {
      params: {
        api_key: "88d539e4615b22d8b094b9c0e143595d",
      },
    });
    const getTvdata = getTv.data;
    return getTvdata.results;
  } catch (error) {
    console.log("Error fetching data:", error);
  }
};
