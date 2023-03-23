import { NavLink, Outlet} from "react-router-dom"
import {useEffect, useState} from "react"

export default function RootLayout() {

   

    return(
        
        <div className="Navbar">
                <header>

                    <nav> 
                        <NavLink to={'/'}>Home</NavLink>
                        <NavLink to={'Login'}>Login</NavLink>
                        <NavLink to={'Register'}>Register</NavLink>
                    </nav>

            </header>
            <main>
                
                <Outlet/>
            </main>
        </div>
    )
}