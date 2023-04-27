// @ts-check

import { CREATE_COURSE, LOAD_COURSES_SUCCESS } from "../actions/actionTypes";
import { loadCourses } from "../actions/courseActions";

const logReducer = (courseAction, state) => {
  console.log(`Reducer for Action: ${courseAction}`);
  console.log(JSON.stringify(state));
};

export default (state = [], action) => {
  switch (action.type) {
    case CREATE_COURSE:
      logReducer(CREATE_COURSE, state);
      return [...state, { ...action.course }];
    case LOAD_COURSES_SUCCESS:
      loadCourses();
      return action.courses;
    default:
      return state;
  }
};
