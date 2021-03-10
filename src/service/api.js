import axios from 'axios';

const api = axios.create({
  baseURL: 'https://demostracao-deploy.herokuapp.com/',
});

export default api;


