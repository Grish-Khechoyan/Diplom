import appAxios from "./axios.service";

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
    const getTv = await appAxios("discover/tv", {
      params: {
        api_key: "88d539e4615b22d8b094b9c0e143595d",
      },
    });
    return getTv.data;
  } catch (error) {
    console.log("Error fetching data:", error);
  }
};
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

// https://api.themoviedb.org/3/movie/572802?api_key=88d539e4615b22d8b094b9c0e143595d&append_to_response=videos,images
