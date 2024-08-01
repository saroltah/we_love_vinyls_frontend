import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { axiosReq } from "../../api/AxiosDefaults";
import ShowComment from "./ShowComment";
import GetCommentList from "../../hooks/GetCommentList";

function OneComment() {
const { id } = useParams();
  const{commented_record_id} = GetCommentList()
  const [comments, setComments] = useState({ results: [] });

  useEffect(() => {
    const handleMount = async () => {
      try {
        const { data: comments } = await axiosReq.get(`/comments/commented_record=${commented_record_id}`);
        setComments({ results: comments });
        console.log(comments);
      } catch (err) {
        console.log(err); 
      }
    };

    handleMount();
  }, [id]);  

  return (
    <div>
      {comments.results.length ? (
        comments.results.map((comment) => (
          <ShowComment key={comment.id} {...comment} ShowComment />
        ))
      ) : (
        <p>Loading...</p> 
      )}
    </div>
  );
}

export default OneComment