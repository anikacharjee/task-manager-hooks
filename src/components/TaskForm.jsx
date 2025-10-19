import React, { useState, useContext, useCallback } from 'react';
import { TaskContext } from '../context/TaskContext';

export default function TaskForm() {
  const [text, setText] = useState('');
  const { dispatch } = useContext(TaskContext);

  const handleAdd = useCallback(() => {
    if (text.trim()) {
      dispatch({ type: 'ADD_TASK', payload: text });
      setText('');
    }
  }, [text, dispatch]);

  return (
    <div className="task-form">
      <input
        type="text"
        value={text}
        onChange={e => setText(e.target.value)}
        placeholder="Add a new task"
      />
      <button onClick={handleAdd}>Add</button>
    </div>
  );
}
