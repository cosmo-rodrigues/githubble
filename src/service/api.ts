import axios from 'axios';
import { IConfig } from '../dtos';

interface Paths {
  [key: string]: string | undefined;
}

export const api = (type = 'user') => {
  const paths: Paths = {
    user: import.meta.env.VITE_APP_BASE_URL_API,
  };

  const API = axios.create({
    baseURL: paths[type],
    headers: {},
  });

  const baseURL = paths[type];

  if (!baseURL) {
    throw new Error(`Invalid type: ${type}`);
  }

  API.interceptors.response.use(undefined, (err) => {
    const {
      config,
      response: { status },
    } = err;
    return Promise.reject({
      status: status,
      config: config,
      response: err.response,
    });
  });

  API.interceptors.request.use(
    (config) => {
      if (config.url!.indexOf('users/login') !== -1) return config;

      const token = import.meta.env.VITE_APP_GITHUB_TOKEN;
      if (token) config.headers!['Authorization'] = token.replaceAll('"', '');

      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );

  return API;
};

export const get = async (config: IConfig) => {
  const { type, service, queryString } = config;
  if (queryString) {
    return await api(type).get(`${service}/${queryString}`);
  }
  console.log('Data: adasd');
  const data = await api(type).get(`${service}`);
  console.log('Data: ', data);

  return await api(type).get(`${service}`);
};

export const put = async (config: IConfig) => {
  const { type, service, data } = config;
  return await api(type).put(service, data);
};

export const post = async (config: IConfig) => {
  const { type, service, data } = config;
  return await api(type).post(service, data);
};

export const remove = async (config: IConfig) => {
  const { type, service } = config;
  return await api(type).delete(service);
};
