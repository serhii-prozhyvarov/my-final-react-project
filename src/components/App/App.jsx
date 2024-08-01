import { nanoid } from 'nanoid';

import { TaskList } from 'components/TaskList/TaskList';
import { AppWrapper } from './App.styled';
import { TaskForm } from 'components/TaskForm/TaskForm';
import { useState } from 'react';

export const App = () => {
  const [tasks, setTasks] = useState([]);
   const [selectedDay, setSelectedDay] = useState(null);

  const addTask = () => {
    const newTask = {
      dayTask: 'Enter day',
      title: 'Write title',
      departament: 'Chose department',
      content: 'write content',
      id: nanoid(),
    };
    setTasks([...tasks, newTask]);
  }

const getActiveDay = () => {
  return tasks.find(task => task.id === selectedDay)
  }
  
  const updateSchedule = (myUpdatedTask) => {
    const updatedTasks = tasks.map(task => {
      if (task.id === myUpdatedTask.id) return myUpdatedTask;
      return task;
    })
    setTasks(updatedTasks)
  }

  const deleteDay = (taskId) => {
setTasks(tasks.filter((task)=> task.id!==taskId))
  }
  return (
    <AppWrapper>
      <TaskList
        tasks={tasks}
        addTask={addTask}
        deleteDay={deleteDay}
        selectedDay={selectedDay}
        setSelectedDay={setSelectedDay}
      />
      <TaskForm updateSchedule={updateSchedule} selectedDay={getActiveDay()} />
    </AppWrapper>
  );
};
