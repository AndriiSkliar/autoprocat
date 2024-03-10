import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const NavigationList = styled.ul`
    display: flex; 
    gap: 20px;
`;

export const StyledLink = styled(NavLink)`
  transition: box-shadow var(--transition);

  &:hover, &:focus {
    box-shadow: 0 2px 4px rgba(52, 112, 255, 0.5);
  }
  &.active {
    border-bottom: 2px solid #3470ff;
  }
`;