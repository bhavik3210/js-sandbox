// @ts-check

import { CREATE_COURSE } from "../constants";

export default (state = [], action) => {
  switch (action.type) {
    case CREATE_COURSE:
      console.log(state);
      return [...state, { ...action.course }];
    default:
      return state;
  }
};
