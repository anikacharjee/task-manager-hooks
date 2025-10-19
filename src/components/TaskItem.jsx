import React, { useContext, useCallback } from 'react';
import { TaskContext } from '../context/TaskContext';

export default function TaskItem({ task }) {
  const { dispatch } = useContext(TaskContext);

  const toggle = useCallback(() => {
    dispatch({ type: 'TOGGLE_TASK', payload: task.id });
  }, [dispatch, task.id]);

  const remove = useCallback(() => {
    dispatch({ type: 'DELETE_TASK', payload: task.id });
  }, [dispatch, task.id]);

  return (
    <div className="task-item">
      <span
        onClick={toggle}
        className={task.done ? 'done' : ''}
      >
        {task.text}
      </span>
      <button onClick={remove}>×</button>
    </div>
  );
}
