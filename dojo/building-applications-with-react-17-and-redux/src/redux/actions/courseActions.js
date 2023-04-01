// @ts-check
import { CREATE_COURSE } from "../constants";

export default (course) => {
  return {
    type: CREATE_COURSE,
    course,
  };
};
