import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { axiosReq } from "../../api/AxiosDefaults"
import ShowRecord from "../Records/ShowRecord";
import AddComment from "../comments/AddComment";
import { useCurrentUser } from "../../context/CurrentUserContext";
import ShowComments from "../comments/ShowComments";

function OneRecord() {

  const { id } = useParams();
  const [record, setRecord] = useState({ results: [] });
  const [commented_record, setCommented_record] = useState({ results: [] });
 
  const currentUser = useCurrentUser();
  const profile_id = currentUser?.profile_id;
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
        setComments(prevState => ({...prevState, results: [...comments] }))
        console.log(`comments:${comments}`)
        

 
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
      member_id={profile_id}
      member_image={profile_image}
      commented_record={id}
      setCommented_record={setCommented_record}
      setComments={setComments}
      setRecord={setRecord}
    />
  ) : null}

  {comments.results.length ? (
    <div>
      <p>Comments</p>
      {comments.results.map((comment) => (
        <ShowComments key={comment.id} {...comment} />
      ))}
    </div>
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