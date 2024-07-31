import {
  TaskLisActiveWrapper,
  TaskLisInactiveWrapper,
} from './TaskList.styled';

export const TaskList = ({
  tasks,
  addTask,
  deleteDay,
  selectedDay,
  setSelectedDay,
}) => {
  return (
    <div>
      <h1>Add your task into todo List</h1>
      <button onClick={addTask}>Add</button>
      {tasks.map(({ title, content, id, departament, dayTask }, index) => {
        return (
          <div key={index}>
            {id === selectedDay ? (
              <TaskLisActiveWrapper onClick={() => setSelectedDay(id)}>
                <p>{dayTask}</p>
                <p>{title.substring(0, 60)}</p>
                <p>{departament}</p>
                <p>{content.substring(0, 60)}</p>
                <button
                  onClick={e => {
                    e.stopPropagation();
                    deleteDay(id);
                  }}
                >
                  Delete
                </button>
              </TaskLisActiveWrapper>
            ) : (
              <TaskLisInactiveWrapper onClick={() => setSelectedDay(id)}>
                <p>{dayTask}</p>
                <p>{title.substring(0, 60)}</p>
                <p>{departament}</p>
                <p>{content.substring(0, 60)}</p>
                <button className="button-delete" onClick={() => deleteDay(id)}>
                  Delete
                </button>
              </TaskLisInactiveWrapper>
            )}
          </div>
        );
      })}
    </div>
  );
};
