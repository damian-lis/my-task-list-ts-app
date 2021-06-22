import React, { FC } from 'react';
import './App.css';
import Header from 'components/Header';

const App: FC = () => {
  return (
    <div>
      <Header
        title='Task List App'
        subtitle='Create some lists and add some tasks to each list'
      />
    </div>
  );
};

export default App;
