import React, { FC } from 'react';
import './App.css';
import Header from 'components/Header';
import Sidebar from 'components/Sidebar';

const App: FC = () => {
  return (
    <div>
      <Header
        title='Task List App'
        subtitle='Create some lists and add some tasks to each list'
      />
      <div className='container px-5'>
        <div className='columns'>
          <Sidebar />
        </div>
      </div>
    </div>
  );
};

export default App;
