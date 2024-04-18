import axios from "axios";
import { getToken } from "../util/localstorage";

const axiosClient = axios.create({
    baseURL:'http://localhost:8000/api/v1',
    headers: {
        'Content-Type':'application/json',
    },
});

axiosClient.interceptors.request.use(async (config) => {
    let headerAuth = '';
    const token = JSON.parse(getToken())
    if(token) {
        headerAuth = token
    }
        config.headers.Authorization = `Bearer ${headerAuth}`;
        
    return config;
});

export default axiosClient;