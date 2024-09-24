import axios from "axios"


export const axiosInstance = axios.create({
    // baseURL: import.meta.mode === "development" ? "http://localhost:4000/api" : "",
    baseURL:  "http://localhost:4000/api" ,
    withCredentials: true,
    headers: {
        'Content-Type': 'application/json', // If using JSON
        // 'Content-Type': 'multipart/form-data' // If using formData
      },
})  