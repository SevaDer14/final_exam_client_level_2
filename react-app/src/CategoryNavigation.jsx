import React from 'react';
import { courses } from './data/courses';

const CategoryNavigation = () => {
  const categories = Array.from(
    new Set(courses.map((course) => course.category))
  );

  const listOfCategories = categories.map((category) => (
    <li data-cy='category' className={'capitalized bold'}>{category}</li>
  ));

  return <ul data-cy='category-menu' className='center'>{listOfCategories}</ul>;
};

export default CategoryNavigation;
