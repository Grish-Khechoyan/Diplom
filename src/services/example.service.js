import appAxios from "./axios.service";
/******************** All Film ********************/
export const getFilms = async (page, limit) => {
  try {
    const response = await appAxios.get(`discover/movie`, {
      params: {
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
/**************Popular movie*********************/

export const popularMovie = async () => {
  try {
    const popularfetch = await appAxios.get("movie/popular");
    return popularfetch.data;
  } catch (error) {
    console.log("Error fetching popular movie:", error);
  }
};
/******************** Genre ********************/

export const genres = async () => {
  try {
    const genresfetch = await appAxios.get("genre/movie/list");
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
        query: searchValue,
      },
    });
    const dataSerach = getSearch.data;
    return dataSerach.results;
  } catch (error) {
    console.log("Error fetching data:", error);
  }
};

/******************** View Movie ********************/

export const viewMovie = async (id) => {
  try {
    const fetchDataSingle = await appAxios.get(`movie/${id}`);
    return fetchDataSingle.data;
  } catch (error) {
    console.log("Error fetching data:", error);
  }
};

export const viewMovieReviews = async (id) => {
  try {
    const fetchReviewsData = await appAxios.get(`movie/${id}/reviews`);
    fetchReviewsData.data;
  } catch (error) {
    console.log("Error fetching data:", error);
  }
};

/****** */
export const viewMovieVideoKey = async (id) => {
  try {
    const fetchDataSingle = await appAxios.get(`movie/${id}/videos`);
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
    const fetchDataSingle = await appAxios.get(`tv/${id}`);
    return fetchDataSingle.data;
  } catch (error) {
    console.log("Error fetching data:", error);
  }
};

export const viewTvVideoKey = async (id) => {
  try {
    const fetchDataSingle = await appAxios.get(`tv/${id}/videos`);
    return fetchDataSingle.data;
  } catch (error) {
    console.log("Error fetching data:", error);
  }
};

export const moviesRated = async () => {
  try {
    const fetchDataSingle = await appAxios.get(`/movie/top_rated`);
    return fetchDataSingle.data;
  } catch (error) {
    console.log("Error fetching data:", error);
  }
};

console.log(moviesRated);

// web scrap

//api.themoviedb.org/3/person/changes?api_key=88d539e4615b22d8b094b9c0e143595d
// https://api.themoviedb.org/3/movie/969492/reviews?api_key=88d539e4615b22d8b094b9c0e143595d
//https://api.themoviedb.org/3/certification/movie/list?api_key=88d539e4615b22d8b094b9c0e143595d tariq
//https://api.themoviedb.org/3/person/969492/movie_credits?api_key=88d539e4615b22d8b094b9c0e143595d hertakan kino mej hamatexel orderi het
//https://api.themoviedb.org/3/trending/person/week?api_key=88d539e4615b22d8b094b9c0e143595d derasannerin kinonner
//https://api.themoviedb.org/3/tv/13945?api_key=88d539e4615b22d8b094b9c0e143595d tv episode
