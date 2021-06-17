import React from 'react';
import {courses} from './data/courses'

const Courses = () => {
  const listOfCources = courses.map((course) => (
    <div data-cy='course-container'>
      <h2>{course.title}</h2>
    </div>
  ));
  return <>{listOfCources}</>;
};

export default Courses;
