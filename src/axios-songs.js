import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://crossorigin.me/https://itunes.apple.com/'
});

export default instance;
