import { nanoid } from 'nanoid';
import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import TaskManager from 'Pages/TaskManager/TaskManager';
import Home from 'Pages/Home/Home';
import About from 'Pages/About/About';
import Contacts from 'Pages/Contacts/Contacts';
import { Navbar, NavbarItem, NavbarLink, NavbarList } from './App.styled';
import SliderPage from 'Pages/SliderPage/SliderPage';

export const App = () => {
  const [tasks, setTasks] = useState([]);
  const [selectedDay, setSelectedDay] = useState(null);

  const addTask = () => {
    setTasks(prevTasks => [
      ...prevTasks,
      {
        dayTask: 'Enter day',
        title: 'Write title',
        departament: 'Chose department',
        content: 'write content',
        id: nanoid(),
      },
    ]);
  };

  const getActiveDay = () => tasks.find(task => task.id === selectedDay);

  const updateSchedule = updatedTask => {
    setTasks(prevTasks =>
      prevTasks.map(task => (task.id === updatedTask.id ? updatedTask : task))
    );
  };

  const deleteDay = taskId => {
    setTasks(prevTasks => prevTasks.filter(task => task.id !== taskId));
  };

  return (
    <Router>
      <Navbar>
        <NavbarList>
          <NavbarItem>
            <NavbarLink to="/">Home</NavbarLink>
          </NavbarItem>
          <NavbarItem>
            <NavbarLink to="/slider">Slider</NavbarLink>
          </NavbarItem>
          <NavbarItem>
            <NavbarLink to="/taskmanager">Task Manager</NavbarLink>
          </NavbarItem>
          <NavbarItem>
            <NavbarLink to="/about">About</NavbarLink>
          </NavbarItem>
          <NavbarItem>
            <NavbarLink to="/contacts">Contacts</NavbarLink>
          </NavbarItem>
        </NavbarList>
      </Navbar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/slider" element={<SliderPage />} />
        <Route
          path="/taskmanager"
          element={
            <TaskManager
              tasks={tasks}
              addTask={addTask}
              deleteDay={deleteDay}
              selectedDay={selectedDay}
              setSelectedDay={setSelectedDay}
              updateSchedule={updateSchedule}
              getActiveDay={getActiveDay}
            />
          }
        />
        <Route path="/about" element={<About />} />
        <Route path="/contacts" element={<Contacts />} />
      </Routes>
    </Router>
  );
};
