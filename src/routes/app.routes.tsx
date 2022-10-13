import { Route, Routes } from "react-router-dom";
import { AppointmentService } from "../screens/AppointmentService";
import { SignIn } from "../screens/Auth/SignIn";
import { SignOut } from "../screens/Auth/SignOut";
import { ServiceAndAppointments } from "../screens/ServiceAndAppointments";
import { SuccessAppointment } from "../screens/SuccessAppointment";

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<SignIn />} />
      <Route path="/register" element={<SignOut />} />
      <Route
        path="/serviceAndAppointment"
        element={<ServiceAndAppointments />}
      />
      <Route path="/appointments/:name" element={<AppointmentService />} />
      <Route path="/success" element={<SuccessAppointment />} />
    </Routes>
  );
}
