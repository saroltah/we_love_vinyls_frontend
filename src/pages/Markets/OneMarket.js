import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { axiosReq } from "../../api/AxiosDefaults";
import ShowMarket from "./ShowMarket";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import { useHistory } from "react-router-dom";
import styles from "../../styles/OnePost.module.css"

function OneMarket() {
  const { id } = useParams();
  const [market, setMarket] = useState({ results: [] });
  const history = useHistory();

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
        <button onClick={() => history.goBack()} className={styles.BackButton}>Back to markets</button>
        <ShowMarket {...market.results[0]} setMarkets={setMarket} oneMarket showLink={false}/>
    </div>
  );
}

export default OneMarket;