import { useState } from "react";

export interface IAuthContext {
  loginUser: boolean;
  login(): Promise<void | null>;
  logout(): Promise<void | null>;
}
// create interface for state

export const initialContext: IAuthContext = {
  loginUser: false || true,
  login: async () => null,
  logout: async () => null,
};
// set initial values

export const useAuthStore = () => {
  const [loginUser, setLoginUser] = useState<any>(false);

  return {
    loginUser,
    login() {
      return new Promise<void>((res) => {
        setLoginUser(true);
        res();
      });
    },
    logout() {
      return new Promise<void>((res) => {
        setLoginUser(false);
        res();
      });
    },
  };
};
// export hook with state
