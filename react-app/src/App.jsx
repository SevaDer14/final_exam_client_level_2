import React from 'react';
import Header from './Header';
import Courses from './Courses';
import CategoryNavigation from './CategoryNavigation';
import './styles/app.css';

const App = () => {
  return (
    <div className='container'>
      <Header />
      <CategoryNavigation />
      <Courses />
    </div>
  );
};

export default App;
