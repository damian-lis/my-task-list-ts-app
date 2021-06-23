import React, { FC } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from 'store/store';
import SelectList from './SelectList';
import AddNewTask from './AddNewTask';

const MainContent: FC = () => {
  const selectedList = useSelector(
    (state: RootState) => state.list.selectedList
  );

  return (
    <div className='column is-9'>
      <div className='box'>
        <div className='box'>
          <SelectList />
          {selectedList && <AddNewTask list={selectedList} />}
        </div>
      </div>
    </div>
  );
};

export default MainContent;
