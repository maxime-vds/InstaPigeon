import { useFetch } from "../../hooks/useFetch"
import GridList from "../FotoGrid/GridList"
import { AccountElements } from "./AccountElements"

export const AccountPage = () => {
  const url = "http://localhost:3000/posts"
  const { data, isPending, error } = useFetch(url)

  return (
    <div>
      <div
        style={{
          position: "absolute",
          backgroundColor: "#D9D9D9",
          width: "100%",
          height: "100%",
        }}
      >
        {/* Account elements */}

        <AccountElements />


        {/* GridList */}
        <div className="AccountGrid">
          {error && <p className="error">{error}</p>}
          {isPending && <p className="loading">Loading...</p>}

          {/* sort the cards first here ?  */}

          {/* {data && <GridList posts={data} />} */}
        </div>
      </div>
    </div>
  )
}
