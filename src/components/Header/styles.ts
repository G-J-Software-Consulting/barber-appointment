import styled from "styled-components";

export const HeaderContainer = styled.header`
  background: ${(props) => props.theme.header};
  height: 5rem;
  justify-content: space-between;
  align-items: center;
`;

export const UserContainer = styled.div`
  padding: 1rem;
  flex-direction: row;
  display: flex;
  flex: 1;
  justify-content: space-between;
  align-items: center;
  img {
    width: 60px;
    height: 60px;
  }

  button {
    border: 0;
    background: none;
    color: ${(props) => props.theme["gray-300"]};
    cursor: pointer;
  }
  @media (max-width: 768px) {
    display: flex;
    flex: 1;
    justify-content: space-between;
    align-items: center;
  }
`;

export const User = styled.div`
  flex-direction: row;
  display: flex;
  align-items: center;
  width: 200px;
  gap: 1rem;
`;
