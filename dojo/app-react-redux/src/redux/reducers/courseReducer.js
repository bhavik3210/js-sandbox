// @ts-check

import { CREATE_COURSE } from "../constants/constants";

const logReducer = (courseAction, state) => {
  console.log(`Reducer for Action: ${courseAction}`);
  console.log(JSON.stringify(state));
};

export default (state = [], action) => {
  switch (action.type) {
    case CREATE_COURSE:
      logReducer(CREATE_COURSE, state);
      return [...state, { ...action.course }];
    default:
      return state;
  }
};
