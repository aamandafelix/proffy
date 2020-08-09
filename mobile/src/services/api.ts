import axios from 'axios';
import Config from '../config';

const api = axios.create({
  baseURL: `${Config.API_ADDRESS}:3333`,
});

export default api;
