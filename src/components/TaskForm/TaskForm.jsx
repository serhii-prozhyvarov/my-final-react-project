import { TaskFormWrapper } from "./TaskForm.styled";

export const TaskForm = () => {
  return (
    <TaskFormWrapper>
      <h2>TaskForm</h2>
      <input placeholder="Enter Day" />
      <input placeholder="Enter title" />
      <input placeholder="Enter departament" />
      <input placeholder="Enter content" />
    </TaskFormWrapper>
  );
};
