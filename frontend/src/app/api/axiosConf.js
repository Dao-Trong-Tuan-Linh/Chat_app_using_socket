import axios from "axios";
import { getAuthUser } from "../util/localstorage";

const axiosClient = axios.create({
    baseURL:'http://localhost:8000/api/v1',
    headers: {
        'Content-Type':'application/json',
    },
});

axiosClient.interceptors.request.use(async (config) => {
    let headerAuth = '';
    if(getAuthUser() !== null) {
        const {token} = getAuthUser() ?? ''
    }
        config.headers.Authorization = `Bearer ${headerAuth}`;
        
    return config;
});

export default axiosClient;