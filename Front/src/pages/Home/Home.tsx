import Grid from "../../components/Grid"
import ResponsiveGrid from "../Dashboard/testDash"

const Home = () => {
  return (
    <>
      <div
        className="background"
        style={{
          display: "absolute",
          backgroundColor: "#D9D9D9",
          width: "100vw",
          height: "100%",
        }}
      >
      {/**<Grid /> */} 
      <ResponsiveGrid />
      </div>
    </>
  )
}

export default Home
