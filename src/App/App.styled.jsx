import { NavLink } from 'react-router-dom';
import styled from '@emotion/styled';

export const AppWrapper = styled.div`
  display: flex;
  justify-content: center;
  padding: 30px;
`;

export const Navbar = styled.nav`
  background-color: #333;
  padding: 10px 20px;
  display: flex;
  justify-content: center;
`;

 export const NavbarList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
`;

 export const NavbarItem = styled.li`
  margin: 0 10px;
`;

 export const NavbarLink = styled(NavLink)`
  color: #fff;
  text-decoration: none;
  padding: 10px 15px;
  font-size: 16px;
  transition: color 0.3s, background-color 0.3s;

  &.active {
    background-color: #ffdd00;
    color: #333;
    border-radius: 5px;
  }

  &:hover {
    background-color: #555;
    color: #ffdd00;
    border-radius: 5px;
  }
`;