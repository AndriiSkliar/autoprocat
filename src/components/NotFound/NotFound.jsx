import { StyledNoIcon, StyledNoText, StyledNoWrapper } from './NotFound.style';

const NotFound = () => {
  return (
    <StyledNoWrapper>
      <StyledNoText>There are no autos</StyledNoText>
      <StyledNoIcon/>
    </StyledNoWrapper>
  );
};

export default NotFound;