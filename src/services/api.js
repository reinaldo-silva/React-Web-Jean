import axios from "axios";

const api = axios.create({
  baseURL: "https://localhost:44348",
});

export default api;
