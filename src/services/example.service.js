import appAxios from "./axios.service";
/******************** All Film ********************/
export const getFilms = async (page, limit) => {
  try {
    const response = await appAxios.get(`discover/movie`, {
      params: {
        api_key: "88d539e4615b22d8b094b9c0e143595d",
        page: page,
        limit: limit,
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching data:", error);
    return [];
  }
};
console.log(getFilms);
/******************** Genre ********************/

export const genres = async () => {
  try {
    const genresfetch = await appAxios.get("genre/movie/list", {
      params: {
        api_key: "88d539e4615b22d8b094b9c0e143595d",
      },
    });
    return genresfetch.data.results;
  } catch (error) {
    console.error("Error fetching geners:", error);
  }
};

/******************** Search ********************/

export const search = async (searchValue) => {
  try {
    const getSearch = await appAxios.get("/search/movie", {
      params: {
        api_key: "88d539e4615b22d8b094b9c0e143595d",
        query: searchValue,
      },
    });
    const dataSerach = getSearch.data;
    console.log(dataSerach);
    return dataSerach.results;
  } catch (error) {
    console.log("Error fetching data:", error);
  }
};

/******************** View Movie ********************/

export const viewMovie = async (id) => {
  try {
    const fetchDataSingle = await appAxios.get(`movie/${id}`, {
      params: {
        api_key: "88d539e4615b22d8b094b9c0e143595d",
        videoUrl: "&append_to_response=videos",
      },
    });
    return fetchDataSingle.data;
  } catch (error) {
    console.log("Error fetching data:", error);
  }
};

export const viewMovieVideoKey = async (id) => {
  try {
    const fetchDataSingle = await appAxios.get(`movie/${id}/videos`, {
      params: {
        api_key: "88d539e4615b22d8b094b9c0e143595d",
        videoUrl: "&append_to_response=videos",
      },
    });
    return fetchDataSingle.data;
  } catch (error) {
    console.log("Error fetching data:", error);
  }
};

/********************* Tv *************************/

export const fetchTvData = async (page) => {
  try {
    const getTv = await appAxios("discover/tv", {
      params: {
        api_key: "88d539e4615b22d8b094b9c0e143595d",
        page: page,
      },
    });
    return getTv.data;
  } catch (error) {
    console.log("Error fetching data:", error);
  }
};

export const viewTv = async (id) => {
  try {
    const fetchDataSingle = await appAxios.get(`tv/${id}`, {
      params: {
        api_key: "88d539e4615b22d8b094b9c0e143595d",
        videoUrl: "&append_to_response=videos",
      },
    });
    return fetchDataSingle.data;
  } catch (error) {
    console.log("Error fetching data:", error);
  }
};

export const viewTvVideoKey = async (id) => {
  try {
    const fetchDataSingle = await appAxios.get(`tv/${id}/videos`, {
      params: {
        api_key: "88d539e4615b22d8b094b9c0e143595d",
        videoUrl: "&append_to_response=videos",
      },
    });
    return fetchDataSingle.data;
  } catch (error) {
    console.log("Error fetching data:", error);
  }
};

export const moviesRated = async (id) => {
  try {
    const fetchDataSingle = await appAxios.get(`account/${id}/rated/movies`, {
      params: {
        api_key: "88d539e4615b22d8b094b9c0e143595d",
        videoUrl: "&append_to_response=videos",
      },
    });
    return fetchDataSingle.data;
  } catch (error) {
    console.log("Error fetching data:", error);
  }
};

console.log(moviesRated);

// web scrap
