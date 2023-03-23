import { NavLink, Outlet} from "react-router-dom"
import {useEffect, useState} from "react"






 const Paths = ["/", "Login", "nav","navUp", "landing", "grid"]

export default function RootLayout() {
       




    const [showUserNavbar, setUserNavbar] = useState<boolean>(false)



    return(
        <div className="RootLayout">
                <header>

                        <NavLink to={Paths[0]}>Home</NavLink>
                        <NavLink to={Paths[1]}>Login</NavLink>
                        <NavLink to={Paths[2]}>Nav-phone</NavLink>
                        <NavLink to={Paths[3]}>Nav-pc</NavLink>
                        <NavLink to={Paths[4]}>Landing</NavLink>
                        <NavLink to={Paths[5]}>grid</NavLink>
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