import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Card from ' ./card';
import { nextPage, prevpage } from '../redux/cardsSlice';

const CardList = () => {
  const dispatch = useDispatch();
  const visibleCards =
    useSelector((state) => state.cards.visibleCards);

  return <div className='container mx-auto py-8' >
    <div className='flex-wrap justify-center ' >
      {visibleCards.map((card) =>
      (
        <card key={card.id} card={card} />

      ))}
    </div>
    <div className='flex justify-between mt-4 '>
      <button onClick={() => dispatch(prevpage())}
        className='bg-blue-500 text-white px-4 py-2 rounded ' >

        Previous
      </button>

      <button onClick={() => dispatch(nextPage())}
        className='bg-blue-500 text-white px-4 py-2 rounded ' >

        Next

      </button>

    </div>
  </div>



};
export default CardList;