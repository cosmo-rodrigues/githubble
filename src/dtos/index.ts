export interface IUserInfo {
  id: number;
  name: string;
  login: string;
  email: string;
  followers: number;
  following: number;
  location: string;
  avatar_url: string;
  gravatar_id?: string;
}

export interface IConfig {
  type: string;
  service: string;
  data?: IUserInfo;
  queryString?: string;
}

export interface IRepository {
  id: number;
  name: string;
  url: string;
}