import { NavLink, Outlet} from "react-router-dom"
import {useEffect, useState} from "react"

export default function RootLayout() {


    // useEffect(() => {
    //     window.location.href == 'http://localhost:5173/Register' ? 
    //     console.log('yes'): console.log('no')
    //     },[window.location])



    // should run this when Outlet component changes
        useEffect(() => {
            console.log(window.location.href)
        },[])

    const[toggleNavbar, setToggleNavbar] = useState<boolean>(false)

    const Paths = ["/", "Login", "Register", "nav","navUp"]



    // function if (Paths;; !== "/"){this}else{that} 

    //  getting closer but it's the same problem with an array 
   

    return(
        <div className="root-layout">
                <header>

                     {/* put navbar here for now, Can always put it in seperate component if I want later 
                    problem is that I need to select the navbar based on the path and the changes via 
                    the navlink which makes the Outlet tag 'reference' the other component
                    
                    [login, register] / Landing or index '/' */}

                        {/* to='login' || 'register' ? navbar1 : navbar2
                            so  ow do I acces the path ?  
                        

                            map navlink button with an onchange function? then create state based on that ? 
                        */}

                  

                    <nav> 

                            {/* this 'works' but the it only removes the h2 tag on refresh!
                            so I probably can't use window.location.href directly 
                            what I can do is create a state that listens to the path
                            
                            I think you might have to because React is complaining
                            */}
                        {window.location.href == 'http://localhost:5173/Register' ? 
                            console.log('yes'): <h2>NavbarLanding</h2>} 




                        <NavLink to={Paths[0]}>Home</NavLink>
                        <NavLink to={Paths[1]}>Login</NavLink>
                        <NavLink to={Paths[2]}>Register</NavLink>
                        <NavLink to={Paths[3]}>Nav-Bot</NavLink>
                        <NavLink to={Paths[4]}>Nav-Head</NavLink>
                    </nav>



 


            </header>
            <main>
                
                <Outlet/>
            </main>
        </div>
    )
}