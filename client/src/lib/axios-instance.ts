import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: process.env.TMBD_BASE_URL,
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${process.env.API_TOKEN}`,
  },
});
