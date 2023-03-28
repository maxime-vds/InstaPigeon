import { useFetch } from "../../hooks/useFetch"

import GridList from "./GridList"
import Cardbar from "../../components/cardbar/Cardbar"

const FotoGrid = () => {
  const url = "http://localhost:3000/posts"
  const { data, isPending, error, postData } = useFetch(url)

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
        <div className="home">
          {error && <p className="error">{error}</p>}
          {isPending && <p className="loading">Loading...</p>}
          {data && <GridList posts={data} />}
        </div>

        <Cardbar></Cardbar>
      </div>
    </>
  )
}

export default FotoGrid
