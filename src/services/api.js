import axios from "axios";

const api = axios.create({
  baseURL: process.env.API || "https://randinho.vanni.app/wp-json/",
});

export default api;
