'use server';

import axios from 'axios';
import { cookies } from 'next/headers';

export const apiServerClient = axios.create({
  baseURL: `${process.env.NEXT_PUBLIC_BASE_API_URL}/api/v1`,
  withCredentials: true,
});

apiServerClient.interceptors.request.use(async (config) => {
  const cookieStore = await cookies();
  const tokenCookie = cookieStore.get('token');
  if (tokenCookie) {
    // eslint-disable-next-line no-param-reassign
    config.headers.cookie = `${tokenCookie.name}=${tokenCookie.value}`;
  }

  return config;
});
