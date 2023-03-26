import { useNavigate } from "react-router-dom"
import { useAuthStore } from "../context/authStore"
import { useEffect } from "react"

function Landing() {
  const { authed, login } = useAuthStore()
  const navigate = useNavigate()

  console.log(authed)

  const handleButtonClick = () => {
    login()
  }

  useEffect(() => {
    console.log(authed)

    if (authed) {
      console.log("trying to pass");
      
      navigate("/home")
    }
  }, [authed])

  return (
    <div className="Landing">
      <button onClick={handleButtonClick}>Set Login User</button>
    </div>
  )
}

export default Landing
