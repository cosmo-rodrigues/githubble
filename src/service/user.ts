import { get } from './api';

const findByUserName = async (login: string) =>
  get({ type: 'user', service: `/users/${login}` });

const findAll = async (queryString: any) => get({ type: 'user', service: `/users`, queryString });

const findAllRepositoriesByUserName = async (login: string) => get({ type: 'user', service: `/users/${login}/repos` });

export const userService = {
  findByUserName,
  findAll,
  findAllRepositoriesByUserName,
};