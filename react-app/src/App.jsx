import React from 'react';
import Header from './Header';
import Courses from './Courses';
import './styles/app.css';

const App = () => {
  return (
    <div className='container'>
      <Header />
      <Courses />
    </div>
  );
};

export default App;
