import React, { FC } from 'react';
import { useSelector } from 'react-redux';
import './App.css';
import { RootState } from './store/store';
import Header from 'components/Header';
import Sidebar from 'components/Sidebar';
import Notification from 'components/Notification';

const App: FC = () => {
  const notificationMsg = useSelector(
    (state: RootState) => state.notification.message
  );
  return (
    <div className='app'>
      <Header
        title='Task List App'
        subtitle='Create some lists and add some tasks to each list'
      />
      <div className='container px-5'>
        <div className='columns'>
          <Sidebar />
        </div>
      </div>
      <Notification msg={notificationMsg} />
    </div>
  );
};

export default App;
