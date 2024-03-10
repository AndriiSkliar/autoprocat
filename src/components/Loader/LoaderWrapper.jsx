import styled, { keyframes } from 'styled-components';

const moveInOut = keyframes`
  0% {
    transform: translateX(0%);
  }
  15% {
    transform: translateX(15%);
  }
  50% {
    transform: translateX(100%);
  }
  50.1% {
    transform: translateX(-100%);
  }
  85% {
    transform: translateX(-15%);
  }
  100% {
    transform: translateX(0%);
  } 
`;

export const LoaderWrapper = styled.div`
  position: fixed;
  top: 30%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  justify-content: center;
  overflow: hidden;
  z-index: 1;
`;

export const IconAutoWrapper = styled.div`
  animation: ${moveInOut} 1s linear 0s infinite normal forwards running;
`;
