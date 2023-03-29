import { useFetch } from "../../hooks/useFetch";
import Likes from "./Likes"
import { useParams } from "react-router-dom";
import { useState } from "react";


const Cardbar = () => {

  const [caption, setCaption] = useState<string>("what's up")
  const [likes, setLikes] = useState<Number>(999)
  const {id} = useParams()
  const url = "http://localhost:3000/posts/" + id  


function postLikes(e: { preventDefault: () => void; }) {
  e.preventDefault()
  console.log("click love")

  const putLikes = {
    method : "PATCH",
    headers : {
      "Content-type": "application/json",
    },
    body : JSON.stringify({likes}),
  }
  fetch(url, putLikes)
  .then(res => res.json())
  .then(data => console.log(data))
  .catch(err => console.log(err))

}





  // fetch and post to db


function postFollows() {


  console.log("click follows");
  
}




  return (

    
  <Likes like={postLikes} />
  // <Follow click={postFollows}/>
  
  
  )
  }

export default Cardbar


