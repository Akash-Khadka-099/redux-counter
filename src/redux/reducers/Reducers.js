import { ActionTypes } from "../constants/Constants";

const initialValue = {
  value: 0,
};

export const Reducers = (state = initialValue, action) => {
  switch (action.type) {
    case ActionTypes.INCREMENT:
      return { ...state, value: state.value + 1 };
    case ActionTypes.DECREMENT:
      return { ...state, value: state.value - 1 };

    default:
      return state;
  }
};

