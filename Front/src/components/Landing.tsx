import { useAuthStore } from "../context/authStore";

function Landing() {

const {loginUser, setLoginUser} = useAuthStore()

const handleButtonClick = () => {
    setLoginUser('shitbutt')
}


console.log(loginUser);


    return (  
        <div className="Landing">
        <h2>InstaPigeon</h2>
        <button onClick={handleButtonClick}>Set Login User</button>
        </div>

    );
}

export default Landing;