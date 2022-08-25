import axios from "axios";

const API_URL = "http://3.34.206.247:5000/api/";

const apiAxios = axios.create({
  baseURL: API_URL,
});

export { apiAxios };
