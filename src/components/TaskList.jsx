import React, { useContext, useMemo } from 'react';
import { TaskContext } from '../context/TaskContext';
import TaskItem from './TaskItem';

export default function TaskList() {
  const { state } = useContext(TaskContext);

  const sortedTasks = useMemo(() => {
    return [...state].sort((a, b) => a.done - b.done);
  }, [state]);

  return (
    <div>
      {sortedTasks.map(task => (
        <TaskItem key={task.id} task={task} />
      ))}
    </div>
  );
}
