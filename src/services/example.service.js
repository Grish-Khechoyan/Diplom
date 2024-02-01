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

    const movieData = response.data;

    const uniqueMovies = [];
    const uniqueIds = new Set();

    movieData.results.forEach((movie) => {
      if (!uniqueIds.has(movie.id)) {
        uniqueIds.add(movie.id);
        uniqueMovies.push(movie);
      }
    });

    return uniqueMovies;
  } catch (error) {
    console.error("Error fetching data:", error);
    return [];
  }
};

// export const getFilms = async (page, limit) => {
//   try {
//     const response = await appAxios.get(`/discover/movie`, {
//       params: {
//         api_key: "88d539e4615b22d8b094b9c0e143595d",
//         page: page,
//         limit: limit,
//       },
//     });
//     const data = response.data;
//     return data.results;
//   } catch (error) {
//     console.error("Error fetching data:", error);
//   }
// };

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
