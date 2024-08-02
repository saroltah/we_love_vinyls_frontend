import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { axiosReq } from "../../../api/AxiosDefaults";
import ShowRecord from "../../Records/ShowRecord";
import AddComment from "./AddComment";
import ShowComment from "./ShowComment";
import { useCurrentUser } from "../../../context/CurrentUserContext";
import GetCommentList from "./GetCommentList";
import AllComments from "../comments/test/AllComments";

function OneRecord() {
  const { id } = useParams();
  const [record, setRecord] = useState({ results: [] });
  const [comments, setComments] = useState({ results: [] });
  const [commentedRecord, setCommentedRecord] = useState(null);
    const filter_data = `commented_record__id${id}`

  const currentUser = useCurrentUser();
  const profile_image = currentUser?.profile_image;
  const profile_id = currentUser?.profile_id;



  useEffect(() => {
    const handleMount = async () => {
      try {
        const [{ data: record }] = await Promise.all([
          axiosReq.get(`/records/${id}`),
        ]);
        setRecord({ results: [record] });

        const filter = `commented_record__id=${id}`;
        setCommentedRecord(id);

        const { comments: fetchedComments, loaded } = GetCommentList(filter);
        setComments(fetchedComments);
 
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
    
    <AllComments filter={filter_data} />
  ))
) : (
  <span>No comments yet</span>
)}
  </div>
  );
}

export default OneRecord;