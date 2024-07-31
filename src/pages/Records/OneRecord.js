import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { axiosReq } from "../../api/AxiosDefaults";
import ShowRecord from "./ShowRecord";
import AddComment from "./AddComment";
import ShowComment from "./ShowComment";
import { useCurrentUser } from "../../context/CurrentUserContext";

function OneRecord() {
  const { id } = useParams();
  const [record, setRecord] = useState({ results: [] });

  const currentUser = useCurrentUser();
  const profileImage = currentUser?.profile_image;
  const [comments, setComments] = useState({ results: [] });

  useEffect(() => {
    const handleMount = async () => {
      try {
        const [{ data: record }, { data: comments }] = await Promise.all([
          axiosReq.get(`/records/${id}`),
          axiosReq.get(`/comments/?commented_record__id=1`),
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
        <ShowRecord {...record.results[0]} setRecords={setRecord} oneRecord/>
          {currentUser ? (
            <AddComment
              profile_id={currentUser.profile_id}
              profileImage={profileImage}
              record={id}
              setRecord={setRecord}
              setComments={setComments}
            />
          ) : comments.results.length ? (
            "Comments"
          ) : null}
        {comments.results.length ? (
            comments.results.map((comment) => (
              <ShowComment
                key={comment.id}
                {...comment}
                setRecord={setRecord}
                setComments={setComments}
              />
            ))
          ) : currentUser ? (
            <span>No comments yet, be the first to comment!</span>
          ) : (
            <span>No comments... yet</span>
          )}
    </div>
  );
}

export default OneRecord;