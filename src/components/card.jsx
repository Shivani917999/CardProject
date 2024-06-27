import React from "react";
import { useDispatch } from "react-redux"
import { removeCard } from "../redux/cardsSlice";


const Cards = ({ card }) => {
  const dispatch = useDispatch();
  return (
    <div className=" bg-white rounded-lg shadow-md p-4 m-2 relative flex flex-col items-start" >

      <button onClick={() =>
        dispatch(removeCard(card.id))}
        classname="absolute top-2 right-2 bg-red-500 text-white p-1 rounded ">
        X
      </button>
      <h2 className=" text-lg font-bold mb-2" >{card.heading}</h2>
      <p classname="mb-2 " >  {card.content}</p>
      <p classname="mb-2 text-sm text-gray-500 "> {card.timing}</p>
      <img src={card.image} alt={card.heading}
        className="w-full rounded-lg " />


    </div>
  );
};
export default Card;