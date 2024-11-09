import axios from 'axios';

export const apiClient = axios.create({
  baseURL: `${process.env.BASE_API_URL}/api`,
});
