import React, { useState } from "react";

const CoursesPage = () => {
  const [course, setCourse] = useState({ course: { title: "" } });

  const handleChange = (event) => {
    console.log(course);
    const inputCourse = { ...course, title: event.target.value };
    setCourse(inputCourse);
    console.log(inputCourse);
    console.log("handleChangeCalled" + event.target.value);
  };

  const handleSubmit = () => {
    alert(course.title);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Courses</h2>
      <h3>Add Course</h3>
      <input type="text" onChange={handleChange} value={course.title} />
      <input type="submit" value="Save" />
    </form>
  );
};

export default CoursesPage;
