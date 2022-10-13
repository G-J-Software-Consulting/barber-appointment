import styled from "styled-components";

export const ContainerSignIn = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-top: 4rem;
  padding: 0.875rem;

  @media (max-width: 768px) {
    flex: 1;
    align-items: center;
    justify-content: center;
    margin-top: 5.5rem;
  }
`;

export const ImageLogoSignIn = styled.img`
  width: 200px;
  height: 200px;
  margin-bottom: 4.375rem;
`;

export const InputLogin = styled.input`
  width: 100%;
  height: 3rem;
  background: ${(props) => props.theme.input};
  border: 0;
  border-radius: 8px;
  padding: 1.25rem;
  color: ${(props) => props.theme.white};
  margin-bottom: 1.5rem;
`;

export const ButtonSignIn = styled.button`
  width: 100%;
  height: 3rem;
  border-radius: 8px;
  background: ${(props) => props.theme["blue-600"]};
  color: ${(props) => props.theme.white};
  align-items: center;
  justify-content: center;
  font-size: 1rem;
  font-family: ${(props) => props.theme.fonts.inter};
  font-weight: 700;
  cursor: pointer;
  transition: background 0.2s;

  &:hover {
    background: ${(props) => props.theme["blue-hover"]};
  }
`;
export const LinkToRegister = styled.button`
  width: 100%;
  display: flex;
  justify-content: center;
  background: none;
  margin-top: 0.9375rem;
  font-size: 1rem;
  font-family: ${(props) => props.theme.fonts.inter};
  color: ${(props) => props.theme.white};

  font-weight: 700;
  cursor: pointer;
  &:hover {
    color: ${(props) => props.theme["gray-200"]};
  }
  p {
    font-size: 1rem;
    font-family: ${(props) => props.theme.fonts.inter};
    font-weight: 700;
    margin-left: 0.2rem;
    color: ${(props) => props.theme["yellow-600"]};
  }
`;
