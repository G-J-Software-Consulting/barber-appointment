import { useNavigate } from "react-router-dom";
import {
  ButtonSignIn,
  ContainerSignIn,
  ImageLogoSignIn,
  InputLogin,
  LinkToRegister,
} from "./styles";
import Icon from "../../../../public/icon-1.svg";

export function SignOut() {
  const navigate = useNavigate();

  function handlerUserToRegister(event: React.MouseEvent<HTMLElement>) {
    event.preventDefault();
    navigate("/");
  }
  return (
    <ContainerSignIn>
      <ImageLogoSignIn src={Icon} alt="" />
      <InputLogin placeholder="Nome" />
      <InputLogin placeholder="Email" />
      <InputLogin placeholder="Senha" />
      <ButtonSignIn>ENTRAR</ButtonSignIn>
      <LinkToRegister onClick={handlerUserToRegister}>
        Já possui conta? <p>Login</p>
      </LinkToRegister>
    </ContainerSignIn>
  );
}
