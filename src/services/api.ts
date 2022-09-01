import axios from "axios";

const api = axios.create({
    baseURL: "https://streaming-v1deo.herokuapp.com/",
    timeout: 5000,
});

export default api;