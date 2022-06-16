import { InitialStateType } from "./GlobalTypes";

export type UserType = {
  /** name of user*/
  name?: string;
  /** unique email of user*/
  email: string;
};

export type UserSchemaType = UserType & {
  /** password of user*/
  password: string;
};

export type AuthState = InitialStateType & {
  user: UserType | null;
};
