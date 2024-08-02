import { TaskForm } from "components/TaskForm/TaskForm";
import { TaskList } from "components/TaskList/TaskList";
import { AppWrapper } from "./TaskManager.styled";

function TaskManager({
  tasks,
  addTask,
  deleteDay,
  selectedDay,
  setSelectedDay,
  updateSchedule,
  getActiveDay,
}) {
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
}
export default TaskManager;
