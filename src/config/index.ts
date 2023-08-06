import axios from "axios";

const url = import.meta.env.MODE === "development" ? "http://localhost:5000" : "https://peperume-clone";

export const instance = axios.create({
    baseURL: `${url}/api/v1/`
});