import React, { FC } from 'react';
import { useSelector } from 'react-redux';
import './App.css';
import { RootState } from './store/store';
import Header from 'components/Header';
import Sidebar from 'components/Sidebar';
import Notification from 'components/Notification';
import DeleteListModal from 'components/DeleteListModal';

const App: FC = () => {
  const notificationMsg = useSelector(
    (state: RootState) => state.notification.message
  );
  const listIdToDelete = useSelector(
    (state: RootState) => state.list.listIdToDelete
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
      {listIdToDelete && <DeleteListModal listId={listIdToDelete} />}
    </div>
  );
};

export default App;
