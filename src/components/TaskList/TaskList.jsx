export const TaskList = ({ tasks, handleCreateTask }) => {
  return (
    <div>
      <h1>Add your task into todo List</h1>
      <button onClick={handleCreateTask}>Add</button>
      {tasks.map(({ title, content, departament, dayTask }, index) => {
        return (
          <div key={index}>
            <p>{dayTask}</p>
            <p>{title}</p>
            <p>{departament}</p>
            <p>{content}</p>
          </div>
        );
      })}
    </div>
  );
};
