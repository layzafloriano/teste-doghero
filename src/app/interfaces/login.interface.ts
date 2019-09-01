import { IUser } from './user.interface';

export interface ILoginInput {
  email: string;
  password: string;
}

export interface ILoginOutput {
  token: string;
  user: IUser;
}
