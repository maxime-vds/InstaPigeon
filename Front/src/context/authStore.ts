import { useState } from "react"


export interface IAuthContext {
    loginUser: null,
    setLoginUser: (loginUser: null) => void
}
// create interface for state


export const initialContext = {
    loginUser: null,
    setLoginUser: () => null 
}
// set initial values

export const useAuthStore = () => {
    const [loginUser, setLoginUser] = useState<any>(null)

    return {
        loginUser,
        setLoginUser
    }
}
// export hook with state