import axios from "axios";

const api = axios.create({
    baseURL: "http://107.178.219.190:8080/",
  });


export default api;

