export interface IUserInfo {
  id: number;
  name: string;
  email: string;
}

export interface IConfig {
  type: string;
  service: string;
  data?: IUserInfo;
  queryString?: string;
}