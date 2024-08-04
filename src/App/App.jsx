import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar, NavbarItem, NavbarLink, NavbarList } from './App.styled';

import Home from 'Pages/Home/Home';
import SliderPage from 'Pages/SliderPage/SliderPage';
import TaskManager from 'Pages/TaskManager/TaskManager';
import About from 'Pages/About/About';
import Contacts from 'Pages/Contacts/Contacts';

export const App = () => {
  const [tasks, setTasks] = useState([]);
  const [selectedDay, setSelectedDay] = useState(null);

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
              selectedDay={selectedDay}
              setSelectedDay={setSelectedDay}
              setTasks={setTasks}
            />
          }
        />
        <Route path="/about" element={<About />} />
        <Route path="/contacts" element={<Contacts />} />
      </Routes>
    </Router>
  );
};
