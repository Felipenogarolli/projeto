import axios from 'axios';

export const conn = axios.create({
    baseURL: "http://localhost:3001",
    headers: {'Content-Type': 'application/json'}

});

conn.interceptors.request.use(function(config) {

    const token = localStorage.token;

    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    } else {
        delete config.headers.Authorization;
    }
    return config;
});

export default conn;