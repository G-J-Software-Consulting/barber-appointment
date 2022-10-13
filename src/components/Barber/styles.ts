import styled from "styled-components";

export const BarberContainer = styled.button`
  width: 100%;
  height: 80px;
  background: ${(props) => props.theme.input};
  color: ${(props) => props.theme.white};
  border-radius: 8px;
  align-items: center;
  display: flex;
  padding: 1rem;
  margin-bottom: 1rem;
  cursor: pointer;

  &:hover {
    background: ${(props) => props.theme["blue-hover"]};
  }
`;
export const BarberAvatar = styled.div`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background: ${(props) => props.theme.white};
  display: flex;
  @media (min-width: 1024px) {
  }
`;
export const BarberInfo = styled.span`
  font-size: 1rem;
  font-weight: bold;
  font-family: ${(props) => props.theme.fonts.inter};
  color: ${(props) => props.theme.black};
  align-items: center;
  justify-content: center;
  display: flex;
  flex: 1;
`;

export const BarberName = styled.div`
  flex-direction: column;
  margin: 1rem;
  strong {
    font-size: 1rem;
    font-family: ${(props) => props.theme.fonts.peralta};
  }
`;
