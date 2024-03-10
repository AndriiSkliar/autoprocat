import { ReactComponent as IconDefaultAuto } from 'assets/icons/default-auto.svg'
import { StyledNoText, StyledNoWrapper } from './NotFound.style';

const NotFound = () => {
  return (
    <StyledNoWrapper>
      <StyledNoText>There are no autos</StyledNoText>
      <IconDefaultAuto/>
    </StyledNoWrapper>
  );
};

export default NotFound;