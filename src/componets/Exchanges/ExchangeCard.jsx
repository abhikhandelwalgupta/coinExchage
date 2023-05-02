import React from "react";

export const ExchangeCard = (props) => {
  const {name, description , image ,country} = props.data
  return (
    <>
      <div className="py-4  rounded-md shadow-slate-950 shadow-md items-center justify-center bg-slate-50 my-8 mx-8 flex flex-wrap  flex-col w-auto gap-4  transform transition duration-500 hover:scale-110">
        <img src={image} className="w-[50%] rounded-2xl h-[50%] shadow-slate-950 shadow-md object-contain" />
        <h3 className="text-center">{name}</h3>
      </div>
      
    </>
  );
};
