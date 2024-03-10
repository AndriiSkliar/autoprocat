import { StyledButton } from "./Button.styled";

const Button = ({ text, onClick }) => {
  return (
    <StyledButton type='button' onClick={onClick}>
      {text}
    </StyledButton>
  );
};

export default Button;