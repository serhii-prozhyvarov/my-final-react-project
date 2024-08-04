import { nanoid } from 'nanoid';
import { Input, SubmitButton, TaskFormWrapper } from './TaskForm.styled';
import { useState } from 'react';

export const TaskForm = ({
  updateSchedule,
  selectedDay,
  openForm,
  addTask,
}) => {
  const [taskData, setTaskData] = useState({
    dayTask: selectedDay?.dayTask || '',
    title: selectedDay?.title || '',
    departament: selectedDay?.departament || '',
    content: selectedDay?.content || '',
  });

  const editTask = (field, value) => {
    setTaskData(prevData => ({
      ...prevData,
      [field]: value,
    }));
  };

  const handleSubmit = () => {
    if (selectedDay) {
      // If there's a selectedDay, update the existing task
      updateSchedule({ ...taskData, id: selectedDay.id });
    } else {
      // Otherwise, add a new task
      addTask({
        ...taskData, id: nanoid()
       });
    }
    setTaskData({ dayTask: '', title: '', departament: '', content: '' }); // Reset form
  };

  if (!openForm) return null;

  return (
    <TaskFormWrapper>
      <h2>{selectedDay ? 'Edit Task' : 'Add New Task'}</h2>
      <Input
        type="text"
        id="dayTask"
        placeholder="Enter day"
        value={taskData.dayTask}
        onChange={e => editTask('dayTask', e.target.value)}
      />
      <Input
        type="text"
        id="title"
        placeholder="Enter title"
        value={taskData.title}
        onChange={e => editTask('title', e.target.value)}
      />
      <Input
        type="text"
        id="departament"
        placeholder="Enter department"
        value={taskData.departament}
        onChange={e => editTask('departament', e.target.value)}
      />
      <Input
        type="text"
        id="content"
        placeholder="Enter content"
        value={taskData.content}
        onChange={e => editTask('content', e.target.value)}
      />
      <SubmitButton onClick={handleSubmit}>Submit</SubmitButton>
    </TaskFormWrapper>
  );
};
