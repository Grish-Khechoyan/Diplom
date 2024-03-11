import axios from "axios";

const appAxios = axios.create({
  baseURL: `https://api.themoviedb.org/3/`,
  params: {
    api_key: `88d539e4615b22d8b094b9c0e143595d`,
  },
});

export default appAxios;

//https://api.themoviedb.org/3/person/changes?api_key=88d539e4615b22d8b094b9c0e143595d
