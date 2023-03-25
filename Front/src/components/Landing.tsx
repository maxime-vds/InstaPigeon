import { useNavigate } from "react-router-dom"
import { useAuthStore } from "../context/authStore"

function Landing() {
  const { authed, login } = useAuthStore()
  const navigate = useNavigate()

  console.log(authed)

  const handleButtonClick = () => {
    login()

    console.log(authed)
    if (authed) {
      console.log(authed)

      console.log("login")

      navigate("/Home")
    }
  }

  return (
    <div className="Landing">
      <button onClick={handleButtonClick}>Set Login User</button>
    </div>
  )
}

export default Landing
