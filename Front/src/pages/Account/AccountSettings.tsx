import { Button } from "../../components/button/Button"
import CircleIcon from "@mui/icons-material/Circle"

interface IsettingsNavProp {
  settingsNav?: boolean
  setSettingsNav: React.Dispatch<React.SetStateAction<boolean>>
}

export const AccountSettings = ({ setSettingsNav }: IsettingsNavProp) => {
  const handleClick = () => {
    setSettingsNav(false)
  }

  return (
    <>
      <h2>Account Settings</h2>
      <div>
          <CircleIcon sx={{ fontSize: "500%" }} />
          <p>Ricky Matato</p>
        </div>







      <Button onClick={handleClick} buttonText="Return"></Button>
    </>
  )
}
