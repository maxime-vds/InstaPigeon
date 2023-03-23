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
// ?? don't understand

export const useAuthStore = () => {
    const [loginUser, setLoginUser] = useState<any>(null)

    return {
        loginUser,
        setLoginUser
    }
}
// export hook with state