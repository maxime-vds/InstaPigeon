import { NavLink, Outlet} from "react-router-dom"
import {useEffect, useState} from "react"





export default function RootLayout() {
      
    const [showUserNavbar, setUserNavbar] = useState<boolean>(false)
    
    return(
        <div className="RootLayout">
                <header>

                {showUserNavbar ?
                    <nav>

                    <NavLink to="test">test</NavLink>
                    </nav> 
                    :
                    <nav> 
                      {/*select different components here   */}
                        <NavLink to="/">Home</NavLink>
                        <NavLink to="Login">Login</NavLink>
                        <NavLink to="Register">Register</NavLink>
                    </nav>
                }



                </header>
            <main>
                <Outlet/>
            </main>
        </div>
    )
}