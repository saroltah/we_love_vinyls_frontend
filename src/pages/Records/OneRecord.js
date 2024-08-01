import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { axiosReq } from "../../api/AxiosDefaults";
import ShowRecord from "./ShowRecord";
import AddComment from "../comments/AddComment";
import ShowComment from "../comments/ShowComment";
import { useCurrentUser } from "../../context/CurrentUserContext";
import GetCommentList from "../../hooks/GetCommentList";

function OneRecord() {
  const { id } = useParams();
  const [record, setRecord] = useState({ results: [] });
  const commented_record__id = {id}
  const { comments, setComments } = GetCommentList(`commented_record__id=${commented_record__id || ''}`)


  const currentUser = useCurrentUser();
  const profile_image = currentUser?.profile_image;
  const profile_id = currentUser?.profile_id;

  useEffect(() => {
    const handleMount = async () => {
      try {
        const [{ data: record }] = await Promise.all([
          axiosReq.get(`/records/${id}`),
          axiosReq.get(`/comments/?commented_record=${id}`)
        ]);
        setRecord({ results: [record] });
        console.log(record);
      } catch (err) {
        console.log(err);
      }
    };

    handleMount();
  }, [id]);

  return (
    <div>
        <ShowRecord {...record.results[0]} setRecords={setRecord}/>
        <div><h3>Comments</h3>
            <AddComment
            profile_id={profile_id}
            profile_image={profile_image}
            commented_record={id}
            setComments={setComments}
            />

          </div>
          {comments.results.length ? (
  comments.results.map((comment) => (
    
    <ShowComment key={comment.id} {...comment} setComments={setComments}/>
  ))
) : (
  <span>No comments yet</span>
)}
           </div>
  );
}

export default OneRecord;