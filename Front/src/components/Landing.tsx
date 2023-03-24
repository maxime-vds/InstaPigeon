import { useAuthStore } from "../context/authStore";
import NavScreen from "../navbar/navscreen"

function Landing() {

const {loginUser, setLoginUser} = useAuthStore()

const handleButtonClick = () => {
    setLoginUser('user logged in')
}

    return (  
        <div className="Landing">
        <h2>InstaPigeon</h2>
        <button onClick={handleButtonClick}>Set Login User</button>
            <NavScreen />
        </div>

    );
}

export default Landing;