import axios from "axios";

const baseUrl = process.env.VUE_APP_BASE_URL;
axios.defaults.baseURL = baseUrl;

const apiInstance = axios.create();

export default apiInstance;