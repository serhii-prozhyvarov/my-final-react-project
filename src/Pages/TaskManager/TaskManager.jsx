import { TaskForm } from 'components/TaskForm/TaskForm';
import { TaskList } from 'components/TaskList/TaskList';
import { AppWrapper } from './TaskManager.styled';

import { useState } from 'react';

function TaskManager({ tasks, selectedDay, setSelectedDay, setTasks }) {
  const [openForm, setOpenForm] = useState(false);

  const openFormFunc = () => {
    setOpenForm(!openForm);
  };

  const getActiveDay = () => tasks.find(task => task.id === selectedDay);

  const updateSchedule = updatedTask => {
    setTasks(prevTasks =>
      prevTasks.map(task => (task.id === updatedTask.id ? updatedTask : task))
    );
    setOpenForm(false);
  };

  const addTask = newTask => {
    setTasks(prevTasks => [...prevTasks, newTask]);
    setOpenForm(false);
  };

  const deleteDay = taskId => {
    setTasks(prevTasks => prevTasks.filter(task => task.id !== taskId));
  };

  return (
    <AppWrapper>
      <TaskList
        tasks={tasks}
        openFormFunc={openFormFunc}
        deleteDay={deleteDay}
        selectedDay={selectedDay}
        setSelectedDay={setSelectedDay}
      />
      <TaskForm
        openForm={openForm}
        updateSchedule={updateSchedule}
        addTask={addTask}
        selectedDay={getActiveDay()}
      />
    </AppWrapper>
  );
}
export default TaskManager;
