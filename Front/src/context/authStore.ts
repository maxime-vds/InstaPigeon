import { useState } from "react"
export interface IAuthContext {
  authed: any
  login(): void
  logout(): void
}
// create interface for state

export const initialContext: IAuthContext = {
  authed: undefined || true || false,
  login: async () => null,
  logout: async () => null,
}
// set initial values

export const useAuthStore = () => {
  //can't seem to change the state here 
  const [authed, setLoginUser] = useState<any>()

  function login() {
    setLoginUser(true)
    // sessionStorage.setItem("auth", "true")
  }
  function logout() {
    setLoginUser(false)
  }

  return {
    authed,
    login,
    logout,
  }
}
// export hook with state
