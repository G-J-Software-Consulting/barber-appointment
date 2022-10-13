import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import { Header } from "../../components/Header";
import { DayPicker } from "react-day-picker";
import { Select, Stack } from "@chakra-ui/react";

import "react-day-picker/dist/style.css";
import {
  AppointmentServiceContainer,
  ButtonSignIn,
  Calendar,
  ContainerAppointment,
  ContainerSelectHours,
} from "./styles";

export function AppointmentService() {
  const { name } = useParams();
  const navigate = useNavigate();

  function handlerSuccessAppointmentUser() {
    navigate("/success");
  }
  return (
    <AppointmentServiceContainer>
      <Header />
      <main>
        <Calendar>
          <DayPicker
            numberOfMonths={1}
            pagedNavigation
            disabled={[{ dayOfWeek: [0] }]}
            ISOWeek={true}
            modifiers={{
              available: { dayOfWeek: [1, 2, 3, 4, 5, 6] },
            }}
            mode="single"
            fromDate={new Date()}
          />
        </Calendar>
        <ContainerSelectHours>
          <span>Manhã</span>
          <Stack spacing={3} width={"100%"}>
            <Select
              placeholder="Selecione a hora"
              className="select"
              color="white"
              borderColor="#0063F7"
              size="xs"
            >
              <option value="option1">8:30</option>
              <option value="option1">9:00</option>
              <option value="option1">9:15</option>
            </Select>
          </Stack>

          <span>Tarde</span>
          <Stack spacing={3} width={"100%"}>
            <Select placeholder="Selecione a hora" className="select">
              <option value="option1">8:30</option>
              <option value="option1">9:00</option>
              <option value="option1">9:15</option>
            </Select>
          </Stack>
        </ContainerSelectHours>
      </main>
      <ContainerAppointment>
        <ButtonSignIn onClick={handlerSuccessAppointmentUser}>
          AGENDAR
        </ButtonSignIn>
      </ContainerAppointment>
    </AppointmentServiceContainer>
  );
}
