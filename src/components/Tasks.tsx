import React, { FC } from 'react';
import { Task } from 'store/types';

interface TasksProps {
  tasks: Task[];
}

const Tasks: FC<TasksProps> = ({ tasks }) => {
  return (
    <section className='section'>
      <h2 className='is-size-4 has-text-centered'>
        List of tasks in selected list
      </h2>
      {tasks.length === 0 ? (
        <p className='py-4 has-text-centered'>No Tasks</p>
      ) : (
        <table className='table is-striped is-fullwidth'>
          <thead>
            <tr>
              <th>Task</th>
              <th className='has-text-centered'>Edit</th>
              <th className='has-text-centered'>Delete</th>
            </tr>
          </thead>
          <tbody>
            {tasks.map((task: Task) => (
              <tr key={task.id} className={task.completed ? 'completed' : ''}>
                <td>{task.name}</td>
                <td className='has-text-centered'>
                  <button className='button is-primary is-small'>
                    <span className='icon'>
                      <i className='fas fa-edit'></i>
                    </span>
                  </button>
                </td>
                <td className='has-text-centered'>
                  <button className='button is-danger is-small'>
                    <span className='icon'>
                      <i className='fas fa-times'></i>
                    </span>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </section>
  );
};

export default Tasks;
