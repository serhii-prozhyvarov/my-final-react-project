import { TaskFormWrapper } from './TaskForm.styled';


export const TaskForm = ({ updateSchedule, selectedDay }) => {
  const editTask = (myInput, value) => {
    updateSchedule({
      ...selectedDay,
      [myInput]: value,
    });
  };
  if (!selectedDay) return <p>Start planning your week</p>;
  return (
    <TaskFormWrapper>
      <h2>TaskForm</h2>
      <input
        type="text"
        id="dayTask"
        placeholder="Enter Day"
        value={selectedDay?.dayTask || ''}
        onChange={e => editTask('dayTask', e.target.value)}
      />
      <input
        type="text"
        id="title"
        placeholder="Enter title"
        value={selectedDay?.title || ''}
        onChange={e => editTask('title', e.target.value)}
      />
      <input
        type="text"
        id="departament"
        placeholder="Enter departament"
        value={selectedDay?.departament || ''}
        onChange={e => editTask('departament', e.target.value)}
      />
      <input
        type="text"
        id="content"
        placeholder="Enter content"
        value={selectedDay?.content || ''}
        onChange={e => editTask('content', e.target.value)}
      />
    </TaskFormWrapper>
  );
};
