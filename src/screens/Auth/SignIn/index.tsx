import {
  ButtonSignIn,
  ContainerSignIn,
  ImageLogoSignIn,
  InputLogin,
  LinkToRegister,
} from "./styles";
import { useNavigate } from "react-router-dom";
import Icon from "../../../../public/icon-1.svg";

export function SignIn() {
  const navigate = useNavigate();

  function handlerUserToRegister(event: React.MouseEvent<HTMLElement>) {
    event.preventDefault();
    navigate("/register");
  }

  function handlerUsertoServiceAndAppointment(
    event: React.MouseEvent<HTMLElement>
  ) {
    event.preventDefault();
    navigate("/serviceAndAppointment");
  }
  return (
    <ContainerSignIn>
      <ImageLogoSignIn src={Icon} alt="" />
      <InputLogin placeholder="Login" />
      <InputLogin placeholder="Senha" />
      <ButtonSignIn onClick={handlerUsertoServiceAndAppointment}>
        ENTRAR
      </ButtonSignIn>
      <LinkToRegister onClick={handlerUserToRegister}>
        Ainda não possui conta? <p>Registre-se</p>
      </LinkToRegister>
    </ContainerSignIn>
  );
}
