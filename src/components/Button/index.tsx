import { ButtonStyled } from "./style";

interface IButton {
  children: string;
}

const Button = ({ children }: IButton) => {
  return <ButtonStyled>{children}</ButtonStyled>;
};

export default Button;
