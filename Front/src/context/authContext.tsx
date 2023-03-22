import { createContext } from "react";
import { useAuthStore, IAuthContext, initialContext } from "./authStore";


interface IProviderProps {
    children: React.ReactNode

}

export const AuthContext = createContext<IAuthContext>(
   initialContext
)

export const AuthProvider = ({children}:IProviderProps) => (
    <AuthContext.Provider value={useAuthStore()}>
    {children}
</AuthContext.Provider>
)
    




 
