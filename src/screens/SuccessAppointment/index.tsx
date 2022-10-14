import { useNavigate } from "react-router-dom";

import {
  SuccessAppointmentContainer,
  ContainerSuccess,
  ContainerDetailsAppointment,
  Button,
} from "./styles";
import { Check, Checks } from "phosphor-react";
export function SuccessAppointment() {
  const navigate = useNavigate();

  function handlerNavigateUserToScreenService() {
    navigate("/serviceAndAppointment");
  }
  return (
    <SuccessAppointmentContainer>
      <ContainerSuccess>
        <Check size={34} color="#04D361" />
        <h1>Agendamento Concluido</h1>
      </ContainerSuccess>
      <ContainerDetailsAppointment>
        <span>Sexta, dia 14 de Outubro de 2022 às 12:00h com Davi/Kauan.</span>
        <Button onClick={handlerNavigateUserToScreenService}>
          <Checks size={24} />
          OK
        </Button>
      </ContainerDetailsAppointment>
    </SuccessAppointmentContainer>
  );
}
