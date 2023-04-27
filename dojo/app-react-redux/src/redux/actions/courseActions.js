// @ts-check

import { getCourses, saveCourse, deleteCourse } from "../../api/courseApi";
import { CREATE_COURSE, LOAD_COURSES_SUCCESS } from "../actions/actionTypes";

const logAction = (course) => {
  console.log(` Action ${CREATE_COURSE}: ${JSON.stringify(course)}`);
};

export const createCourse = (course) => {
  // logAction(course);
  return {
    type: CREATE_COURSE,
    course,
  };
};

export const loadCoursesSuccess = (courses) => {
  return { type: LOAD_COURSES_SUCCESS, courses };
};

// thunk: function that returns a function (in this case an async function)
export const loadCourses = () => {
  return function (dispatch) {
    getCourses()
      .then((courses) => {
        /* dispatch(loadCoursesSuccess({ type: LOAD_COURSES_SUCCESS, courses }); same as below line */
        dispatch(loadCoursesSuccess(courses));
      })
      .catch((error) => {
        throw error;
      });
  };
};
