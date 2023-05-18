export interface IUserInfo {
  id: number;
  login: string;
  email: string;
  avatar_url: string;
  gravatar_id?: string;
}

export interface IConfig {
  type: string;
  service: string;
  data?: IUserInfo;
  queryString?: string;
}