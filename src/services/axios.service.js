import axios from "axios";

//create axios instance for requests with base url, bearer token and etc.
const appAxios = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
});

export default appAxios;
