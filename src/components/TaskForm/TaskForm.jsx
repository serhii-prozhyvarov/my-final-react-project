import { Input, TaskFormWrapper } from './TaskForm.styled';


export const TaskForm = ({ updateSchedule, selectedDay }) => {
  const editTask = (myInput, value) => {
    updateSchedule({
      ...selectedDay,
      [myInput]: value,
    });
  };
  return (
    <TaskFormWrapper>
      {!selectedDay ? (
        <h2>Form</h2>
      ) : (
        <>
          <h2>Form</h2>
          <Input
            type="text"
            id="dayTask"
            placeholder="Enter Day"
            value={selectedDay?.dayTask || ''}
            onChange={e => editTask('dayTask', e.target.value)}
          />
          <Input
            type="text"
            id="title"
            placeholder="Enter title"
            value={selectedDay?.title || ''}
            onChange={e => editTask('title', e.target.value)}
          />
          <Input
            type="text"
            id="departament"
            placeholder="Enter departament"
            value={selectedDay?.departament || ''}
            onChange={e => editTask('departament', e.target.value)}
          />
          <Input
            type="text"
            id="content"
            placeholder="Enter content"
            value={selectedDay?.content || ''}
            onChange={e => editTask('content', e.target.value)}
          />
        </>
      )}
    </TaskFormWrapper>
  );
};
