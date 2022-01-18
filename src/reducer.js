const INCREMENT = 'INCREMENT';
const DECREMENT = 'DECREMENT';
const RESET = 'RESET';

export const increment = () => ({
  type: INCREMENT,
});

export const decrement = () => ({
  type: DECREMENT,
});

export const reset = () => ({
  type: RESET,
});

const initialState = {
  counter: 0,
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT:
      return {
        ...state,
        counter: state.counter + 1,
      };
    case DECREMENT:
      return {
        ...state,
        counter: state.counter - 1,
      };
    case RESET:
      return {
        ...state,
        counter: 0,
      };
    default:
      return state;
  }
};

export default rootReducer;
