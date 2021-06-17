import React, { useState } from 'react';
import Header from './Header';
import Courses from './Courses';
import CategoryNavigation from './CategoryNavigation';
import './styles/app.css';

const App = () => {
  const [category, setCategory] = useState('');

  return (
    <div className='container'>
      <Header />
      <CategoryNavigation setCategory={setCategory} />
      <Courses category={category} />
    </div>
  );
};

export default App;
