import Grid from "../../components/Grid"

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
        <Grid />
      </div>
    </>
  )
}

export default Home