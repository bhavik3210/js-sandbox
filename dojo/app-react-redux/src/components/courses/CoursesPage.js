import React, { useState } from "react";
import { connect } from "react-redux";
import createCourse from "../../redux/actions/courseActions";
import PropTypes from "prop-types";

const CoursesPage = ({ courses, dispatch }) => {
  console.log(courses);
  const [course, setCourse] = useState({ key: 0, title: "" });

  const handleChange = (event) => {
    const inputCourse = { ...course, title: event.target.value };
    setCourse(inputCourse);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(createCourse({ ...course, key: courses.length + 1 })); //dispatch func is added by connection function to the props
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Courses</h2>
      <h3>Add Course</h3>
      <input type="text" onChange={handleChange} value={course.title} />
      <input type="submit" value="Save" />
      {courses.map((course) => (
        <div key={course.key}>{course.title}</div>
      ))}
    </form>
  );
};

// This ensures that dispatch and courses are added to the props of the component
CoursesPage.propTypes = {
  dispatch: PropTypes.func.isRequired,
  courses: PropTypes.array.isRequired,
};

const mapStateToProps = (state) => {
  console.log(state);
  return {
    courses: state.courses, //request only the data that you need, because it will rerender dom
  };
};

// export default connect(mapStateToProps, mapDispatchToProps)(CoursesPage);
export default connect(mapStateToProps)(CoursesPage); //no need for mapDispatchToProps in this case, it gets ijected automatically when we don't supply it
/*
  - connect function returns a function, which immediately calls the CoursesPage component and is exported as default
  Above is Equivalent to:
  const connectedStateAndProps = connect(mapStateToProps, mapDispatchToProps);
  const coursesPageConnectedComponent = connectedStateAndProps(CoursesPage);
  export default coursesPageConnectedComponent;
*/
