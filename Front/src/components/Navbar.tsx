import { NavLink, Outlet} from "react-router-dom"
import {useEffect, useState} from "react"

export default function RootLayout() {


        useEffect(() => {
            console.log(window.location.href)
        },[])


    const Paths = ["/", "Login", "Register"]


   

    return(
        
        <div className="Navbar">
                <header>

                    <nav> 
                        <NavLink to={Paths[0]}>Home</NavLink>
                        <NavLink to={Paths[1]}>Login</NavLink>
                        <NavLink to={Paths[2]}>Register</NavLink>
                    </nav>

            </header>
            <main>
                
                <Outlet/>
            </main>
        </div>
    )
}