import CircleIcon from "@mui/icons-material/Circle"
import { Button } from "../../components/button/Button"

//styles
import styles from "./AccountElements.module.css"


interface IsettingsNavProp {
  settingsNav? : boolean
  setSettingsNav: React.Dispatch<React.SetStateAction<boolean>> 

}




export const AccountElements = ({ setSettingsNav }: IsettingsNavProp) => {
  const handleSettingsClick = () => {
    setSettingsNav(true)
  }

  return (
    <>
      <div
        style={{
          margin: "10px 10px",
          display: "flex",
        }}
      >
        {/*flexbox / text / flexbox  */}

        <div>
          <CircleIcon sx={{ fontSize: "500%" }} />
          <p>Ricky Matato</p>
        </div>

        <div className={styles["account-state"]}>
          <div style={{ margin: "0px 14px" }}>
            <p>69</p>
            <p>posts</p>
          </div>
          <div style={{ margin: "0px 14px", textAlign: "center" }}>
            <p>569</p>
            <p>followers</p>
          </div>
          <div style={{ textAlign: "center" }}>
            <p>558</p>
            <p>following</p>
          </div>
        </div>
      </div>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          margin: "0px 10px",
        }}
      >
        <p>I like stuff, but also junk and some things</p>
        <p>rickymatato.com</p>
        <p>rickymatato@gmail.com</p>
      </div>

      <div
        style={{ display: "flex", gap: "10px", margin: "10px 20px 10px 5px" }}
      >
        <Button buttonText="Settings" onClick={handleSettingsClick} />

        <Button buttonText="Search" />
      </div>
    </>
  )
}
