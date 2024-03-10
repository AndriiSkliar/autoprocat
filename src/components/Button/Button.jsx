// import { StyledButton } from "./Button.styled";

const Button = ({ text, onClick,
  // style
}) => {
  return (
    <Button type='button' onClick={onClick}
      // style={style}
    >
      {text}
    </Button>
  );
};

export default Button;