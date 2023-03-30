import CommentSection from "../../components/comment"
import Grid from "../../components/Grid"
import SimpleBackdrop from "../Dashboard/clickPhotoDashboard"
import StandardImageList from "../Dashboard/testDash"
import FotoGrid from "../FotoGrid/FotoGrid"


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
      {/**<Grid />
       * <StandardImageList />
       * <SimpleBackdrop />
       */} 
      <FotoGrid/>
     <CommentSection/>
      </div>
    </>
  )
}

export default Home
