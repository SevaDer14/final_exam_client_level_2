import React from 'react';
import { courses } from './data/courses';
import CourseCard from './CourseCard';

const Courses = ({ category }) => {
  let courcesInCategory = courses;

  const getCategoriesToDisplay = () => {
    if (category !== 'all') {
      courcesInCategory = courses.filter(
        (course) => course.category === category
      );
    }
    return courcesInCategory
  };

  const listOfCources = getCategoriesToDisplay().map((course) => (
    <CourseCard
      title={course.title}
      description={course.description}
      category={course.category}
      instructors={course.instructors}
      info={course.info}
      price={course.price}
    />
  ));

  return <>{listOfCources}</>;
};

export default Courses;
