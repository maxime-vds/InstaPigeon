import { useFetch } from "../../hooks/useFetch"
import FavoriteBorderSharpIcon from "@mui/icons-material/FavoriteBorderSharp"

interface Props {
  like: (e: { preventDefault: () => void }) => void
}

const Likes = ({ like }: Props):JSX.Element => {
  return (
    <div>
      <FavoriteBorderSharpIcon onClick={(e) => like(e)} />
    </div>
  )
}
export default Likes
