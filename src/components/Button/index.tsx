import { ButtonStyled } from "./style";

interface IButton {
  children: string;
  onClick?: () => void;
}

const Button = ({ children, onClick }: IButton) => {
  return <ButtonStyled onClick={onClick}>{children}</ButtonStyled>;
};

export default Button;
