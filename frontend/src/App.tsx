import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import ClientHome from "./routes/ClientHome";
import LandingPageHome from "./routes/ClientHome/LandingPageHome";
import Admin from "./routes/Admin";
import AdminHome from "./routes/Admin/AdminHome";

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
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}