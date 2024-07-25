import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { axiosReq } from "../api/AxiosDefaults";

function OneMarket() {
  const { id } = useParams();
  const [market, setMarket] = useState({ results: [] });

  useEffect(() => {
    const handleMount = async () => {
      try {
        const [{ data: market }] = await Promise.all([
          axiosReq.get(`/markets/${id}`),
        ]);
        setMarket({ results: [market] });
        console.log(market);
      } catch (err) {
        console.log(err);
      }
    };

    handleMount();
  }, [id]);

  return (
    <div>
        <p>Market details</p>
        <p>Attendance</p>
    </div>
  );
}

export default OneMarket;