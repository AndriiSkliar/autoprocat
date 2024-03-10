import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const NavigationList = styled.ul`
    display: flex; 
    gap: 20px;
`;

export const NavItem = styled.li`
  
`;

export const StyledLink = styled(NavLink)`
  
  &.active {
    border-bottom: 1px solid red;
  }
`;