import CircleIcon from "@mui/icons-material/Circle"

export const AccountElements = () => {
  return (
    <div
      style={{
        marginTop: "15px",
        display: "flex",
        justifyContent: "space-evenly",
      }}
    >
      {/*flexbox / text / flexbox  */}

      <div>
        <CircleIcon />
        <p>Ricky Matato</p>
      </div>

      <div style={{display: "flex", flexWrap:"wrap"}} className="account-state">
      <div style={{textAlign:"center"}}>
      <p>69</p>
      <p>posts</p>
      </div>
      <div>
      <p>569</p>
      <p>followers</p>
      </div>
      <div>
      <p>558</p>
      <p>following</p>
      </div>
      </div>


      <div style={{display: "flex", flexDirection:"column"}}>


      <p>I like stuff</p>
      <p>I like stuff</p>
      <p>I like stuff</p>

      </div>
    </div>
  )
}
