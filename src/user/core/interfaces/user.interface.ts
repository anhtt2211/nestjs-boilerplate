import { UserEntity } from "../entities";

export interface UserData {
  username: string;
  email: string;
  token?: string;
  bio: string;
  image?: string;
}

export interface UserRO {
  user: UserData;
}

export interface CurrentUser {
  id: number;
  username: string;
  email: string;
  exp: number;
  iat: number;
}

export interface IUser {
  id?: number;
  username?: string;
  email?: string;
  bio?: string;
  image?: string;
  password?: string;
}

export interface IPayloadUserRmq {
  user: UserEntity;
}
export interface IPayloadUserCreated extends IPayloadUserRmq {}
export interface IPayloadUserUpdated extends IPayloadUserRmq {}
