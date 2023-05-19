import axios from 'axios';

// URL DA API
// https://api.themoviedb.org/3/movie/550?api_key=d9509f4eb393e9aeacda6e21cd5e2f95
// URL BASE: https://api.themoviedb.org/3/

const api = axios.create({
    baseURL: 'https://api.themoviedb.org/3/'
});

export default api;