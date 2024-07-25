import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { axiosReq } from "../api/AxiosDefaults";

function OneRecord() {
  const { id } = useParams();
  const [record, setRecord] = useState({ results: [] });

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
        <p>Record details</p>
        <p><span>Likes</span>and <span>comments </span></p>
    </div>
  );
}

export default OneRecord;