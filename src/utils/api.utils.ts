import axios from 'axios';

export const apiClient = axios.create({
  baseURL: `${process.env.NEXT_PUBLIC_BASE_API_URL}/api/v1`,
  withCredentials: true,
});
