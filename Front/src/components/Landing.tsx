import { useAuthStore } from "../context/authStore";
import NavScreen from "./Navbar/Navbar";

function Landing() {
  // const { loginUser, setLoginUser } = useAuthStore();

  const handleButtonClick = () => {
    // setLoginUser("User logged in ");
  };

  return (
    <div className="Landing">
      {/* <button onClick={handleButtonClick}>Set Login User</button> */}
    </div>
  );
}

export default Landing;
