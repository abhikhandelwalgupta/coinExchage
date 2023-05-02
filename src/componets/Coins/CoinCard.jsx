import React from "react";

export const CoinCard = (props) => {
  const {name, current_price , image ,symbol} = props.data.data

  let symbolCurrency = props.data.currency === "inr" ? "₹" : props.data.currency === "eur" ? "€" : props.data.currency === "usd" ? "$" : "";
  
  return (
    <>
      <div className="py-4  rounded-md shadow-slate-950 shadow-md items-center justify-center bg-slate-50 my-8 mx-8 flex   flex-col w-auto gap-1 transform transition duration-500 hover:scale-110">
        <img src={image} className="w-[30%] rounded-2xl mb-3 h-[50%] shadow-slate-950 shadow-md object-contain" />
        <h3 className="text-center">{name}</h3>
        <p className="text-neutral-500">{symbol ? symbol : ""}</p>
        <p> {current_price ? current_price : `NA`} {symbolCurrency}</p>
      </div>
    </>
  );
};
