import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import ClientHome from "./routes/ClientHome";
import LandingPageHome from "./routes/ClientHome/LandingPageHome";
import Admin from "./routes/Admin";
import AdminHome from "./routes/Admin/AdminHome";
import AthleteListing from "./routes/Admin/AthleteListing";
import FemaleAthletes from "./routes/Admin/AthleteListing/FemaleAthletes";
import MaleAthletes from "./routes/Admin/AthleteListing/MaleAthletes";

export default function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ClientHome />}>
            <Route index element={<LandingPageHome />} />
            <Route path="landing-page" element={<LandingPageHome />} />
          </Route>
          <Route path="*" element={<Navigate to={"/"} />} />
          <Route path="/admin/" element={<Admin />}>
            <Route index element={<AdminHome />} />
            <Route path="athletes/" element={<AthleteListing />} >
              <Route path="female" element={<FemaleAthletes />} />
              <Route path="male" element={<MaleAthletes />} />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}