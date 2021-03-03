import axios from 'axios';
import { getToken }  from "../services/auth";

const api = axios.create({
  //baseURL: 'http://34.107.126.31:3001',
 baseURL: 'http://localhost:3001',
  headers: {
    'Content-Type': 'application/json',
  },
})

api.interceptors.request.use(function (config){
  const token = getToken()
    config.headers.Authorization = token ? `Bearer ${token}` : '';
      return config;
});

export default api;