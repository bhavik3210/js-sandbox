// @ts-check
import { CREATE_COURSE } from "../constants/constants";

const logAction = (course) => {
  console.log(` Action ${CREATE_COURSE}: ${JSON.stringify(course)}`);
};

export default (course) => {
  logAction(course);
  return {
    type: CREATE_COURSE,
    course,
  };
};
