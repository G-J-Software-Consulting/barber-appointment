import styled from "styled-components";

export const SuccessAppointmentContainer = styled.div`
  flex: 1;
  margin-top: 16.678rem;
`;
export const ContainerSuccess = styled.div`
  @media (max-width: 768px) {
    align-items: center;
    justify-content: center;
    flex: 1;
    display: flex;
    flex-direction: column;
  }
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  h1 {
    font-size: 1.5rem;
    font-family: ${(props) => props.theme.fonts.peralta};
    color: ${(props) => props.theme.white};
    margin: 1rem;
    text-align: center;
  }
`;
export const ContainerDetailsAppointment = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  @media (max-width: 768px) {
    align-items: center;
    justify-content: center;
    flex: 1;
    display: flex;
    flex-direction: column;
  }
  span {
    color: ${(props) => props.theme["gray-200"]};
    font-size: 0.875rem;
    padding: 1rem;
    text-align: center;
  }
`;

export const Button = styled.button`
  display: flex;
  gap: 0.3rem;
  background: ${(props) => props.theme["gray-300"]};
  height: 40px;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  border-radius: 8px;
  margin-top: 2rem;
  cursor: pointer;
  transition: background 1s;

  &:hover {
    background: ${(props) => props.theme["gray-200"]};
  }
`;
