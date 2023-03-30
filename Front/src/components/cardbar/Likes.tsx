import { useFetch } from "../../hooks/useFetch";
import FavoriteBorderSharpIcon from '@mui/icons-material/FavoriteBorderSharp';


interface Props  { 
    like:(e:{ preventDefault: () => void; }) => void
}


const Likes  = ({like}:Props) => {
    return (
    
    <FavoriteBorderSharpIcon 
    sx={{}}
    onClick={(e) => like(e)}
    />
    )
}
export default Likes;