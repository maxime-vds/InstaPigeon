import { createContext } from "react";
import { useAuthStore, IAuthContext, initialContext } from "./authStore";


interface IProviderProps {
    children: React.ReactNode
}
// create interface for children



export const AuthContext = createContext<IAuthContext>(
   initialContext
)
// ??

export const AuthProvider = ({children}:IProviderProps) => (
    <AuthContext.Provider value={useAuthStore()}>
    {children}
</AuthContext.Provider>
)

//create provider?? don't 100% understand
    




 
