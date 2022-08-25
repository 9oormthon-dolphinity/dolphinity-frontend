import axios from "axios";

const API_URL = "https://dolphinity-server.run.goorm.io/api";

const apiAxios = axios.create({
  baseURL: API_URL,
});

export { apiAxios };
