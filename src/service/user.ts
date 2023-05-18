import { get } from './api';

const findByUserName = async (name: string) =>
  get({ type: 'user', service: `/users/${name}` });

const findAll = async (queryString: any) => get({ type: 'user', service: `/users`, queryString });

const findAllRepositoriesByUserName = async (name: string) => get({ type: 'user', service: `/users${name}/repos` });

export const userService = {
  findByUserName,
  findAll,
  findAllRepositoriesByUserName,
};