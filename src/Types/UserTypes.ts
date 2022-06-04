export type UserType = {
  /** name of user*/
  name: string;
  /** unique email of user*/
  email: string;
};

export type UserSchemaType = UserType & {
  /** password of user*/
  password: string;
};

export type AuthState = {
  user: UserType | null;
  isError: boolean;
  isSuccess: boolean;
  isLoading: boolean;
  message: string | unknown | any;
};
