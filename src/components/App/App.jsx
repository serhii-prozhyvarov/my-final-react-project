import { nanoid } from 'nanoid';
import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import TaskManager from 'Pages/TaskManager/TaskManager';
import Home from 'Pages/Home/Home';
import About from 'Pages/About/About';
import Contacts from 'Pages/Contacts/Contacts';
import { Navbar, NavbarItem, NavbarLink, NavbarList } from './App.styled';

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
            <NavbarLink to="/" exact activeClassName="active">
              Home
            </NavbarLink>
          </NavbarItem>
          <NavbarItem>
            <NavbarLink to="/taskmanager" activeClassName="active">
              Task Manager
            </NavbarLink>
          </NavbarItem>
          <NavbarItem>
            <NavbarLink to="/about" activeClassName="active">
              About
            </NavbarLink>
          </NavbarItem>
          <NavbarItem>
            <NavbarLink to="/contacts" activeClassName="active">
              Contacts
            </NavbarLink>
          </NavbarItem>
        </NavbarList>
      </Navbar>
      <Routes>
        <Route path="/" element={<Home />} />
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
