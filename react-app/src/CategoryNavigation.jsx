import React from 'react';
import { courses } from './data/courses';

const CategoryNavigation = ({ setCategory }) => {
  const getCategories = () => {
    let categories = Array.from(
      new Set(courses.map((course) => course.category))
    );
    categories.unshift('all');
    return categories;
  };

  const handleClick = (event) => {
    setCategory(event.target.innerText.toLowerCase());
  };

  const listOfCategories = getCategories().map((category) => (
    <li
      data-cy='category'
      className={'capitalized bold'}
      onClick={(event) => handleClick(event)}>
      {category}
    </li>
  ));

  return (
    <ul data-cy='category-menu' className='center'>
      {listOfCategories}
    </ul>
  );
};

export default CategoryNavigation;
