import React from 'react'

const CourseCard = (props) => {
  return (
    <div data-cy='course-container'>
      <h2 data-cy='title'>{props.title}</h2>
      <p data-cy='description'>{props.description}</p>
      <p data-cy='course-category' className='capitalized'>
        <span className='bold'>Category: </span>
        {props.category}
      </p>
      <p data-cy='instructors'>
        <span className='bold'>Instructors: </span>
        {props.instructors}
      </p>
      <p data-cy='info'>{props.info}</p>
      <p data-cy='price'>
        <span className='bold'>Price: </span>
        {props.price}
      </p>
    </div>
  )
}

export default CourseCard
