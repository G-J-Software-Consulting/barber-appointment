import styled from "styled-components";

export const ContainerServiceAndAppointments = styled.div`
  margin-top: 4rem;
  padding: 0.875rem;
  h1 {
    font-family: ${(props) => props.theme.fonts.peralta};
    font-size: 1.875rem;
    text-align: center;
    margin-bottom: 2rem;
    margin-top: 4rem;
  }
  @media (min-width: 1024px) {
    align-items: center;
    justify-content: center;
    flex: 1;
    display: flex;
    flex-direction: column;
  }
  @media (min-width: 688px) {
    align-items: center;
    justify-content: center;
    flex: 1;
    display: flex;
    flex-direction: column;
  }
`;
export const WrapperServiceCard = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  strong {
    font-size: 0.875rem;
    text-align: center;
    font-family: ${(props) => props.theme.fonts.roboto};
    font-weight: 500;
    color: ${(props) => props.theme["gray-300"]};
  }
  @media (max-width: 600px) {
    flex: 1;
  }
`;

export const BarberContainer = styled.div`
  margin-top: 3rem;
  width: 100%;

  p {
    text-align: center;
    font-size: 0.8rem;
    font-weight: 400;
    font-family: ${(props) => props.theme.fonts.roboto};
    color: ${(props) => props.theme["gray-300"]};
    cursor: not-allowed;

    &:hover {
      color: ${(props) => props.theme["gray-200"]};
    }
  }
`;
