import React from 'react';
import { courses } from './data/courses';

const Courses = ({ category }) => {
  let courcesInCategory = courses;

  if (category) {
    courcesInCategory = courses.filter(
      (course) => course.category === category
    );
  }

  const listOfCources = courcesInCategory.map((course) => (
    <div data-cy='course-container'>
      <h2 data-cy='title'>{course.title}</h2>
      <p data-cy='description'>{course.description}</p>
      <p data-cy='course-category' className='capitalized'>
        <span className='bold'>Category: </span>
        {course.category}
      </p>
      <p data-cy='instructors'>
        <span className='bold'>Instructors: </span>
        {course.instructors}
      </p>
      <p data-cy='info'>{course.info}</p>
      <p data-cy='price'>
        <span className='bold'>Price: </span>
        {course.price}
      </p>
    </div>
  ));
  return <>{listOfCources}</>;
};

export default Courses;
