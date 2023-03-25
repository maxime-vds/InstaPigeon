import { useState } from "react"
export interface IAuthContext {
  authed: any
  login(): void
  logout(): void
}
// create interface for state

export const initialContext: IAuthContext = {
  authed: null,
  login: async () => null,
  logout: async () => null,
}
// set initial values

export const useAuthStore = () => {
  const [authed, setLoginUser] = useState<any>(true)

  return {
    authed,
    login() {
      setLoginUser(true)
      // sessionStorage.setItem("auth", "true")
    },

    logout() {
      setLoginUser(false)
    },
  }
}
// export hook with state
