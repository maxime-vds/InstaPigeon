import React, { useState } from "react";

const CommentSection = () => {
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState("");

  const handleChange = (event:any) => {
    setNewComment(event.target.value);
  };

  const handleSubmit = (event:any) => {
    event.preventDefault();
    const now = new Date();
    const date = `${now.getDate()}/${now.getMonth()+1}/${now.getFullYear()} ${now.getHours()}:${now.getMinutes()}`;
    const comment = {
      text: newComment,
      date: date,
      replies: []
    };q
    setComments([...comments, comment]);
    setNewComment("");
  };

  const handleReply = (index:number, reply:string) => {
    const now = new Date();
    const date = `${now.getDate()}/${now.getMonth()+1}/${now.getFullYear()} ${now.getHours()}:${now.getMinutes()}`;
    const updatedComments = [...comments];
    updatedComments[index].replies.push({text: reply, date: date});
    setComments(updatedComments);
  };

  return (
    <div>
      <h3>Commentaires</h3>
      {comments.length === 0 ? (
        <p>Aucun commentaire pour le moment</p>
      ) : (
        comments.map((comment, index) => (
          <div key={index}>
            <p>{comment.text}</p>
            <p>{comment.date}</p>
            {comment.replies.map((reply, replyIndex) => (
              <div key={replyIndex}>
                <p>{reply.text}</p>
                <p>{reply.date}</p>
                <hr />
              </div>
            ))}
            <form onSubmit={(event) => {
              event.preventDefault();
              const reply = event.target.elements.reply.value;
              if (reply !== "") {
                handleReply(index, reply);
                event.target.elements.reply.value = "";
              }
            }}>
              <input type="text" placeholder="Répondre..." name="reply" />
              <button type="submit">Répondre</button>
            </form>
            <hr />
          </div>
        ))
      )}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Ajouter un commentaire..."
          value={newComment}
          onChange={handleChange}
        />
        <button type="submit">Publier</button>
      </form>
    </div>
  );
};

export default CommentSection;
