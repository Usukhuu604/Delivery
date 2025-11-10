import axios from "axios";

export const axiosDeliveryInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BACKEND_URI || "http://localhost:8000/",
  headers: {
    "Content-Type": "application/json",
  },
});
