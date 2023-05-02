import axios from "axios";
import React, { useEffect, useState } from "react";
import { server } from "../../main";
import Loader from "../Loader/Loader";
import { CoinCard } from "./CoinCard";
import { Link } from "react-router-dom";
import {ErrorComponets} from "../ErrorComponets"


const Coins = () => {
  const [coin, setCoin] = useState({});
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);
  const [currency, setCurrency] = useState("inr");
  const [page , setPage] = useState(1)

  const fatchCoin = async () => {
    try {
      const { data } = await axios.get(
        `${server}coins/markets?vs_currency=${currency}&page=${page}`
      );

      
      setCoin(data);
      setLoading(false);
    } catch (e) {
      setError(true);
    }
  };

  const currencyUpdate = (event) => {
    setLoading(true);
    setCurrency(event.target.value);
    fatchCoin();
  };
  useEffect(() => {
    fatchCoin();
  }, [currency,page]);

  if (error) return <ErrorComponets/> 

  return loading ? (
    <Loader />
  ) : (
    <>
      <div className="w-full   items-center justify-center bg-slate-200">
        <div className="py-4 flex gap-4 pl-[80px] ">
          <div>
            <label>
              <input
                type="radio"
                name="curr"
                value="usd"
                checked={currency == "usd"}
                onChange={currencyUpdate}
              />
              USD
            </label>
          </div>
          <div>
            <label>
              <input
                type="radio"
                name="curr"
                value="inr"
                checked={currency == "inr"}
                onChange={currencyUpdate}
              />
              INR
            </label>
          </div>
          <div>
            <label>
              <input
                type="radio"
                name="curr"
                value="eur"
                checked={currency == "eur"}
                onChange={currencyUpdate}
              />
              EUR
            </label>
          </div>
        </div>
        <div className="lg:px-28   lg:grid  lg:grid-cols-5 gap-4 md:flex md:flex-col md:rounded-lg md:px-12">
          {coin.map((element) => {
            return (
              <Link to={`/coinDetails/${element.id}`} key={element.id}>
                <CoinCard key={element.id} data={{data : element , currency : currency} } />
              </Link>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Coins;
