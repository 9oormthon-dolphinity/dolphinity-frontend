import axios from "axios";

const API_URL = "http://localhost:5000/api";

const apiAxios = axios.create({
  baseURL: API_URL,
});

export { apiAxios };
