import { nanoid } from 'nanoid';
import { Input, SubmitButton, TaskFormWrapper } from './TaskForm.styled';
import { useState, useEffect } from 'react';

export const TaskForm = ({
  updateSchedule,
  selectedDay,
  openForm,
  addTask,
}) => {
  // Initialize form state
  const [taskData, setTaskData] = useState({
    dayTask: '',
    title: '',
    departament: '',
    content: '',
  });

  // Update form state when selectedDay changes
  useEffect(() => {
    if (selectedDay) {
      setTaskData({
        dayTask: selectedDay.dayTask || '',
        title: selectedDay.title || '',
        departament: selectedDay.departament || '',
        content: selectedDay.content || '',
      });
    } else {
      setTaskData({
        dayTask: '',
        title: '',
        departament: '',
        content: '',
      });
    }
  }, [selectedDay]);

  const editTask = (field, value) => {
    setTaskData(prevData => ({
      ...prevData,
      [field]: value,
    }));
  };

  const handleSubmit = () => {
    if (selectedDay) {
      updateSchedule({ ...taskData, id: selectedDay.id });
    } else {
      addTask({ ...taskData, id: nanoid() });
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
