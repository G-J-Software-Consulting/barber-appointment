import styled from "styled-components";

export const AppointmentServiceContainer = styled.div`
  main {
    margin-top: 3rem;
  }
`;

export const Calendar = styled.aside`
  display: flex;
  align-items: center;
  justify-content: center;
  @media (max-width: 768px) {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .rdp {
    --rdp-cell-size: 50px;
  }

  .rdp-cell {
    background: ${(props) => props.theme.input};
  }
  .rdp-caption {
    font-family: ${(props) => props.theme.fonts.peralta};
  }
  .rdp-cell--available:not(.DayPicker-Day--outside) {
    background: #3e3b47;
    border-radius: 10px;
    color: #fff;
  }
`;

export const ContainerSelectHours = styled.div`
  align-items: center;
  justify-content: center;
  display: flex;
  width: 100%;
  padding: 1rem;
  flex-direction: column;
  gap: 1rem;
  @media (max-width: 768px) {
    select {
      width: 100%;
      align-items: center;
      justify-content: center;
      display: flex;
      background: ${(props) => props.theme["gray-300"]};
      /* height: 3rem; */
      border-radius: 8px;
      padding: 1rem;
    }
  }
  @media (max-width: 1024px) {
    select {
      width: 100%;
      align-items: center;
      justify-content: center;
      display: flex;
      background: ${(props) => props.theme["gray-300"]};
      height: 3rem;
      border-radius: 8px;
      padding: 1rem;
    }
  }

  span {
    font-size: 0.8rem;
    font-family: ${(props) => props.theme.fonts.peralta};
  }
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
export const ContainerAppointment = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 0.875rem;
  @media (max-width: 768px) {
    flex: 1;
    align-items: center;
    justify-content: center;
  }
`;
