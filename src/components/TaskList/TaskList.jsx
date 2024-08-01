import {
  AddButton,
  DeleteButton,
  TaskListActiveWrapper,
  TaskListInactiveWrapper,
  TaskListWrapper,
} from './TaskList.styled';

export const TaskList = ({
  tasks,
  addTask,
  deleteDay,
  selectedDay,
  setSelectedDay,
}) => {
  return (
    <TaskListWrapper>
      <h1>Add your task into todo List</h1>
      <AddButton onClick={addTask}>Add</AddButton>
      {tasks.map(({ title, content, id, departament, dayTask }, index) => {
        return (
          <div key={index}>
            {id === selectedDay ? (
              <TaskListActiveWrapper onClick={() => setSelectedDay(id)}>
                <p>{dayTask}</p>
                <p>{title.substring(0, 60)}</p>
                <p>{departament}</p>
                <p>{content.substring(0, 60)}</p>
                <DeleteButton
                  onClick={e => {
                    e.stopPropagation();
                    deleteDay(id);
                  }}
                >
                  X
                </DeleteButton>
              </TaskListActiveWrapper>
            ) : (
              <TaskListInactiveWrapper onClick={() => setSelectedDay(id)}>
                <p>{dayTask}</p>
                <p>{title.substring(0, 60)}</p>
                <p>{departament}</p>
                <p>{content.substring(0, 60)}</p>
                <DeleteButton onClick={() => deleteDay(id)}>X</DeleteButton>
              </TaskListInactiveWrapper>
            )}
          </div>
        );
      })}
    </TaskListWrapper>
  );
};
