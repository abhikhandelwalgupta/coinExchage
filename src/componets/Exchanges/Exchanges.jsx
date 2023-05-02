import axios from "axios";
import React, { useEffect, useState } from "react";
import { ExchangeCard } from "./ExchangeCard";
import { server } from "../../main";
import Loader from "../Loader/Loader";

const Exchanges = () => {
  const [data, setData] = useState([]);
  const [isloader, setLoader] = useState(true);
  const [error, setError] = useState(false);

  const fetchExchange = async () => {
    try {
      const { data } = await axios.get(`${server}exchanges`);
      setData(data);
      setLoader(false);
    } catch (e) {
      setLoader(false);
      setError(true);
    }
  };

  useEffect(() => {
    fetchExchange();
  }, []);

  if (error)
    return (
      <div className="text-center text-[48%] h-[80%] text-red-800 flex items-center justify-center">
        <h3 className="font-semibold text-[48px]">Something Went Wrong</h3>
      </div>
    );

  return isloader ? (
    <Loader />
  ) : (
    <div className="w-full   items-center justify-center bg-slate-200">
      <div className="lg:px-28   lg:grid  lg:grid-cols-5 gap-4 md:flex md:flex-col md:rounded-lg md:px-12">
        {data.map((element) => {
          return <ExchangeCard key={element.id} data={element} />;
        })}
      </div>
    </div>
  );
};

export default Exchanges;
