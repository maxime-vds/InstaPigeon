import { useFetch } from "../../hooks/useFetch";
import FavoriteBorderSharpIcon from '@mui/icons-material/FavoriteBorderSharp';


interface Props  { 
    click:() => void
}


const Likes  = ({click}:Props) => {
    return<FavoriteBorderSharpIcon 
    sx={{}}
    onClick={() => click()}
    />
}
export default Likes;