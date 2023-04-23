import axios from "axios";
import React, { useEffect, useState } from "react";

const url = `https://api.coingecko.com/api/v3/exchanges`;
const Exchanges = () => {
  const [image, setImage] = useState("");
  const [name, setName] = useState("");
  const [country, setCountry] = useState("");

  const fetchExchange = async () => {
    try {
      let data = await axios.get(url);
      console.log("Exchange Data :- " + JSON.stringify(data));
    } catch (e) {
      console.log("Something went wrong");
    }
  };

  useEffect(() => {
    fetchExchange();
  }, []);
  return (
    <div className="w-full h-full  flex items-center justify-center bg-slate-200">
      <div className="bg-slate-600 shadow-slate-950 shadow-2xl  py-8 px-8 rounded-xl w-[50%]">
        Exchanges

        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptate
          alias nobis rerum asperiores mollitia iste obcaecati unde aspernatur
          consectetur. Aliquid facilis quis tenetur. Architecto quia in
          provident, exercitationem ad quod.
        </p>
      </div>
    </div>
  );
};

export default Exchanges;
