import { useFetch } from "../../hooks/useFetch";
import Likes from "./Likes"
import { useParams } from "react-router-dom";
import { useState } from "react";


const Cardbar = () => {
  const [likes, setLikes] = useState<Number>(999)
  const {id} = useParams()
  const url = "http://localhost:3000/posts" + id  
  const {data, isPending, error, postData} = useFetch(url, 'PUT')


function postLikes(e: { preventDefault: () => void; }) {
  e.preventDefault()
  console.log("click love")

  postData({likes})

  // fetch and post to db
}


function postFollows() {


  console.log("click follows");
  
}




  return (

    
  <Likes like={postLikes} />
  // <Follow click={postFollows}/>
  
  
  )
}

export default Cardbar


