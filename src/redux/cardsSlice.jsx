import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  allCards: [
    {
      id: 1,
      heading: "card 1",
      content: "this is the content of card 1 ",
      timing: "Sunday 21 dec 2020 14:00 GMT",
      image: src = "/photo-1.jpg",

    },
    {
      id: 2,
      heading: "card 2",
      content: "this is the content of card 2",
      timing: "Sunday 21 dec 2020 14:00 GMT",
      image: src = "/photo-2.jpg",

    },
    {
      id: 3,
      heading: "card 3",
      content: "this is the content of card 3",
      timing: "Sunday 21 dec 2020 14:00 GMT ",
      image: src = "/photo-3.jpg",

    },
    {
      id: 4,
      heading: "card 4",
      content: "this is the content of card 4 ",
      timing: "Sunday 21 dec 2020 14:00 GMT ",
      image: src = "/photo-4.jpg",

    },
    {
      id: 5,
      heading: "card 5",
      content: "this is the content of card 5",
      timing: "Sunday 21 dec 2020 14:00 GMT ",
      image: src = "/photo-5.jpg",

    },
    {
      id: 6,
      heading: "card 6",
      content: "this is the content of card 6",
      timing: "Sunday 21 dec 2020 14:00 GMT ",
      image: src = "/photo-6.jpg",

    },


  ],

  visibleCards: [],
  currentIndex: 0,
};
const cardSlice = createSlice({
  name: 'cards',
  initialState,
  reducers: {
    loadInitialCards: (state) => {
      state.visibleCards = state.allCards.slice(0, 6);
      state.currentIndex = 6;
    },

    nextPage: (state) => {
      const nextIndex = state.currentIndex + 6;
      state.visibleCards = state.allCards.slice(state.currentIndex nextIndex);
      state.currentIndex = next, nextIndex;
    },

    prepage: (state) => {
      const prevIndex = state.currentIndex - 6;
      state.currentIndex - 6;
      state.visibleCards = state.allCards.slice(prevIndex - 6, prevIndex);
      state.currentIndex = prevIndex;
    },
    removeCard: (state, action) => {
      state.visibleCards =
        state.visibleCards.filter(card => card.id !== action.payload);
      if (state.currentIndex < state.allCards.length) {
        state.visibleCards.push(state.allCards[state.currentIndex]);
        state.currentIndex += 1;

      }
    },

  },

});
export const { loadInitialCards, nextPage, prevpage, removeCard } = cardSlice.actions;
export default cardSlice.reducer;