import { useState } from "react"


export interface IAuthContext {
    loginUser: any,
    setLoginUser: (loginUser: any) => void
}

export const initialContext = {
    loginUser: null,
    setLoginUser: () => null 
}

export const useAuthStore = () => {
    const [loginUser, setLoginUser] = useState<any>(null)

    return {
        loginUser,
        setLoginUser
    }
}
