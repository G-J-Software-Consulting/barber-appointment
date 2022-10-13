import {
  BarberContainer,
  BarberAvatar,
  BarberName,
  BarberInfo,
} from "./styles";
interface BarberProps {
  avatar: string;
  name: string;
  appointmentUser: () => void;
}
export function Barber({ avatar, name, appointmentUser }: BarberProps) {
  return (
    <BarberContainer onClick={appointmentUser}>
      <BarberAvatar>
        <BarberInfo>{avatar}</BarberInfo>
      </BarberAvatar>
      <BarberName>
        <strong>{name}</strong>
      </BarberName>
    </BarberContainer>
  );
}
