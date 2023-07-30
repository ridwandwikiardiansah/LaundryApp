import axios from 'axios';
import AsyncStorage from "@react-native-async-storage/async-storage";

export const API = axios.create({
    baseURL: "https://belaundry-api.sebaris.link/platform/",
});

API.interceptors.request.use(
    async config => {
        const token = await AsyncStorage.getItem('token')
        if (token) {
            console.log(token)
            config.headers.Authorization = token
        }
        return config
    },
    error => {
        return Promise.reject(error)
    }
);
