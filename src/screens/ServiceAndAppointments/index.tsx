import { Barber } from "../../components/Barber";
import { CardService } from "../../components/CardService";
import { useNavigate } from "react-router-dom";

import {
  BarberContainer,
  ContainerServiceAndAppointments,
  WrapperServiceCard,
} from "./styles";
import { useState } from "react";

export function ServiceAndAppointments() {
  const navigate = useNavigate();

  const [propsImg, setPropsImg] = useState([
    {
      id: "1",
      title: "Barba",
      price: "15,00",
      src: "https://img.freepik.com/premium-vector/shaving-cream-brush-cartoon-icon-illustration-barber-shop-tools-icon-concept-isolated-flat-cartoon-style_138676-1676.jpg?w=826",
    },

    {
      id: "2",
      title: "Cabelo",
      price: "20,00",
      src: "https://img.freepik.com/premium-vector/barber-machine-cartoon-icon-illustration-barber-tools-icon-concept-isolated-flat-cartoon-style_138676-1670.jpg?w=826",
    },

    {
      id: "3",
      title: "Barba + Cabelo",
      price: "30,00",
      src: "https://img.freepik.com/premium-vector/shaving-scissors-with-comb-cartoon-icon-illustration-barber-shop-tools-icon-concept-isolated-flat-cartoon-style_138676-1678.jpg",
    },

    {
      id: "4",
      title: "Barba + Cabelo + Tinta",
      price: "50,00",
      src: "https://img.freepik.com/free-vector/cool-beard-man-barber-head-with-glasses-cartoon-vector-icon-illustration-people-barber-icon-concept-isolated-premium-vector-flat-cartoon-style_138676-3960.jpg?w=826&t=st=1665126357~exp=1665126957~hmac=ac896edf6d3ab96089f7ade04bf3bda12821a90a6ec746163f4fb4720d1802f3",
    },
  ]);

  function handlerUserToAppointment(name: string) {
    navigate(`/appointments/${name}`);
  }
  return (
    <ContainerServiceAndAppointments>
      <div>
        <h1>Serviços</h1>
      </div>
      <WrapperServiceCard>
        {propsImg.map((component) => {
          return (
            <CardService
              key={component.id}
              title={component.title}
              price={component.price}
              src={component.src}
            />
          );
        })}
        <strong>
          Para iniciar uma agendamento, selecione um procedimento.
        </strong>
      </WrapperServiceCard>
      <BarberContainer>
        <Barber
          name="Davi Ribeiro"
          avatar="DR"
          appointmentUser={() => handlerUserToAppointment("Davi Ribeiro")}
        />
        <Barber
          name="Kauan Alves"
          avatar="KA"
          appointmentUser={() => handlerUserToAppointment("Kauan Alves")}
        />
        <p>Para iniciar uma agendamento, selecione um barbeiro.</p>
      </BarberContainer>
    </ContainerServiceAndAppointments>
  );
}
