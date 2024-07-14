import axios from "axios";

axios.defaults.baseURL = "https://we-love-vinyls-b-74b4f31a8a78.herokuapp.com/";
axios.defaults.headers.post["Content-Type"] = "multipart/form-data";
axios.defaults.withCredentials = true;

export const axiosReq = axios.create();
export const axiosRes = axios.create();
