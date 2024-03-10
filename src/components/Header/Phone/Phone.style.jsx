import styled from 'styled-components';

export const NavigationPhone = styled.a`
    display: flex; 
    gap: 20px;
    font-size: 23px;
    line-height: 1.5;
    transition: box-shadow var(--transition);

  &:hover, &:focus {
    box-shadow: 0 2px 4px rgba(52, 112, 255, 0.5);
  }
`;