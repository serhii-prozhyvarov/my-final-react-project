import { nanoid } from 'nanoid';

import { TaskList } from 'components/TaskList/TaskList';
import { AppWrapper } from './App.styled';
import { TaskForm } from 'components/TaskForm/TaskForm';
import { useState } from 'react';

export const App = () => {
  const [tasks, setTasks] = useState([]);

  const newTask = {
    dayTask: 'Monday',
    title: 'I am new task',
    departament: 'IT',
    content: 'update App',
    id: nanoid(),
  };

  const handleCreateTask = () => {
    setTasks([...tasks, newTask]);
  };

  return (
    <AppWrapper>
      <TaskList tasks={tasks} handleCreateTask={handleCreateTask} />
      <TaskForm />
    </AppWrapper>
  );
};
