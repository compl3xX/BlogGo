import axios from 'axios'


const api = axios.create({
    baseURL: 'http://localhost:4000',
    // You can add other configuration options here
});

export default api