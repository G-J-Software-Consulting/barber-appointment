import { SignIn } from "phosphor-react";
import { HeaderContainer, UserContainer, User } from "./styles";

const IMG_AVATAR = "https://cdn-icons-png.flaticon.com/512/147/147144.png";

export function Header() {
  return (
    <HeaderContainer>
      <UserContainer>
        <User>
          <img src={IMG_AVATAR} alt="" />
          <p>Gabriel Jesus</p>
        </User>
        <div />
        <button title="Sair da conta">
          <SignIn size={32} />
        </button>
      </UserContainer>
    </HeaderContainer>
  );
}
