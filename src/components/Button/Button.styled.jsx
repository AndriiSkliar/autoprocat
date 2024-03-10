import styled from 'styled-components';

export const StyledButton = styled.button`
   border: 0;
   padding: 0;
   display: block;
   background-color: transparent;
   transition: transform var(--transition);
   display: flex;
   justify-content: center;
   align-items: center;
    &:hover, 
    &:focus {
      transform: scale(1.2);
    }
`;
