
import axios from "axios";

// export const axiosInstance = axios.create({
//     baseURL: `${import.meta.env.VITE_API_URL}/api/v1`,
//     withCredentials: true,
// });

export const axiosInstance = axios.create({
    baseURL: "http://localhost:3000/api/v1",
    withCredentials: true,
});