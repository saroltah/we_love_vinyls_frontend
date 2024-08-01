import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { axiosReq } from "../../api/AxiosDefaults";
import ShowComment from "./ShowComment";
import GetCommentList from "../../hooks/GetCommentList";

function OneComment(props) {
const commented_record = props.commented_record__id

  useEffect(() => {
    const handleMount = async () => {
      try {
        const [{ data: comment }] = await Promise.all([
          axiosReq.get(`/comments/${id}`),
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
    {loaded ? (
      comments.results.length ? (
        comments.results.map((comment) => (
          <ShowComment  {...comment.results[0]} setRecords={setRecord} />
        ))
      ) : (
      <p>No comment yet </p>     )
     ) : (
        <p>Loading...</p> 
      )}
    </div>
  );
}

export default OneComment