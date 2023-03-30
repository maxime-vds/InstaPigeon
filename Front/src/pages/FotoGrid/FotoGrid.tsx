import { useFetch } from "../../hooks/useFetch"

import GridList from "./GridList"

const FotoGrid = () => {
  const url = "http://localhost:3000/posts"
  // const url ="https://api.thecatapi.com/v1/images/search?limit=30&breed_ids=beng&api_key=live_wSC7y2dnE5c7ukspwUXewcXzxd77oqhl5Hpj4lZc7RZWpaMmFigB9iAXOSBaA5ZT"
  const { data, isPending, error, postData } = useFetch(url)

  return (
    <>
      <div
        className="background"
        style={{
          display: "absolute",
          backgroundColor: "#D9D9D9",
          width: "100%",
          height: "100%",
        }}
      >
        <div className="home">
          {error && <p className="error">{error}</p>}
          {isPending && <p className="loading">Loading...</p>}
          {data && <GridList posts={data} />}
        </div>

      </div>
    </>
  )
}

export default FotoGrid
