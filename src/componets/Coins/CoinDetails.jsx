import axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react";
import { server } from "../../main";
import { useParams } from "react-router-dom";
import { ErrorComponets } from "../ErrorComponets";
import { Chart } from "./Chart";

export const CoinDetails = () => {
  const [error, setError] = useState(false);
  const [chartArray , setChartArray] = useState([])
  const [coin , setCoin] = useState({});
  const { id } = useParams();

  const fetchCoinDetail = async () => {
    try {
      const { data } = await axios.get(
        `${server}coins/${id}/market_chart?vs_currency=inr&days=1`
      );
      const { data: chartData } = await axios.get(
        `${server}coins/${id}/market_chart?vs_currency=inr&days=1`
      );
      
      setChartArray(chartData.prices)
      setCoin(data)
    } catch (e) {
      setError(true);
    }
  };

  useEffect(() => {
    fetchCoinDetail();
  }, []);

  if (error) return <ErrorComponets />;
  return (
    <>
      <div className="w-full m-12 py-0 px-[10%]">
        <Chart arr={chartArray} days="24h" cuu="$"/>
      </div>
    </>
  );
};
