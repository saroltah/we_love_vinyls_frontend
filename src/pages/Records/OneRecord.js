import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { axiosReq } from "../../api/AxiosDefaults"
import ShowRecord from "../Records/ShowRecord";
import AddComment from "../comments/AddComment";
import { useCurrentUser } from "../../context/CurrentUserContext";
import ShowComment from "../comments/ShowComments";

function OneRecord() {

  const { id } = useParams();
  const [record, setRecord] = useState({ results: [] });

  const currentUser = useCurrentUser();
  const profile_image = currentUser?.profile_image;
  const [comments, setComments] = useState({ results: [] });

  useEffect(() => {
    const handleMount = async () => {
      try {
        const [{ data: record }, { data: comments }] = await Promise.all([
          axiosReq.get(`/records/${id}`),
          axiosReq.get(`/comments/?commented_record__id=${id}`),
        ]);
        setRecord({ results: [record] });
        setComments(comments)

 
      } catch (err) {
        console.log(err);
      }
    };

    handleMount();
  }, [id]);

  return (
    <div>
        <ShowRecord {...record.results[0]} setRecords={setRecord}/>
        <div>
          {currentUser ? (
            <AddComment
              profile_id={currentUser.profile_id}
              profile_image={profile_image}
              record={id}
              setRecord={setRecord}
              setComments={setComments}
            />
          ) : comments.results.length ? (
            "Comments"
          ) : null}
          {comments.results.length ? (
            comments.results.map((comment) => (
              <ShowComment key={comment.id} {...comment} />
            ))
          ) : currentUser ? (
            <span>No comments yet, be the first to comment!</span>
          ) : (
            <span>No comments... yet</span>
          )}
        </div>  
        </div>
  );
}

export default OneRecord;