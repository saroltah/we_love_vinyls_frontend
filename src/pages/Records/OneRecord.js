import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { axiosReq } from "../../api/AxiosDefaults";
import ShowRecord from "./ShowRecord";
import AddComment from "../comments/AddComment";
import ShowComment from "../comments/ShowComment";
import { useCurrentUser } from "../../context/CurrentUserContext";

function OneRecord() {
  const { id } = useParams();
  const [record, setRecord] = useState({ results: [] });
  const {commented_record, setCommented_record} = ({ results: [] });

  const currentUser = useCurrentUser();
  const profile_image = currentUser?.profile_image;
  const profile_id = currentUser?.profile_id;

  const [comments, setComments] = useState({ results: [] });

  useEffect(() => {
    const handleMount = async () => {
      try {
        const [{ data: record }] = await Promise.all([
          axiosReq.get(`/records/${id}`),
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
            setRecord={setRecord}
            />

          </div>
          {comments.results.length ? (
  comments.results.map((comment) => (
    
    <ShowComment key={comment.id} {...comment} />
  ))
) : (
  <span>No comments yet</span>
)}
           </div>
  );
}

export default OneRecord;