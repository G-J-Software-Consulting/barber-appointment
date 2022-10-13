import styled from "styled-components";

export const CardServiceContainer = styled.div`
  background: ${(props) => props.theme.white};
  height: 120px;
  border-radius: 8px;
  justify-content: center;
  align-items: center;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  box-shadow: 1px 1px ${(props) => props.theme["gray-200"]};
  margin-bottom: 1rem;
  img {
    width: 50px;
    height: 50px;
  }
`;

export const ServiceDetailsInfo = styled.div`
  text-align: center;

  span {
    color: ${(props) => props.theme.primary};
    font-family: ${(props) => props.theme.fonts.roboto};
    font-weight: 700;
  }
  p {
    color: ${(props) => props.theme.primary};
    font-family: ${(props) => props.theme.fonts.roboto};
    font-weight: 500;
    margin-top: 5px;
    font-size: 0.8rem;
  }
`;
