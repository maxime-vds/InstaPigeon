import { useState } from "react"
import { useFetch } from "../../hooks/useFetch"

const CreatePage = () => {


  const [id, setId] = useState<number>()
  const [caption, setCaption] = useState<string>("a")
  const [comments, setComments] = useState<string>("a")
  const [likes, setLikes] = useState<number>(0)
  const [follow, setFollow] = useState<boolean>(true)
  const [image, setImageUrl] = useState<string>("a")


  const {postData, data, error } = useFetch("http://localhost:3000/posts", 'POST')




  const handleSubmit = (e: { preventDefault: () => void }) => {
        e.preventDefault()

    console.log(id, caption, comments, likes, follow, image);

      postData({caption, comments, likes, follow, image})

    }




    // pass in : caption="required", comments: "", likes : 0, image="image.svg, required"

  return (
    <>
      <h2 className="title-post">Add A Post</h2>

      <form onSubmit={handleSubmit}>
        <label>
          <span>caption</span>
          <input
            type="text"
            onChange={(e) => setCaption(e.target.value)}
            value={caption}
            required
          ></input>
        </label>


        <label>
          <span>image</span>
          <textarea
            onChange={(e) => setImageUrl(e.target.value)}
            value={image}
            required
          ></textarea>
        </label>

        <button className="btn">submit</button>
      </form>
    </>
  )
}

export default CreatePage
