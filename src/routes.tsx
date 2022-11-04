import { Routes, Route } from "react-router";

import { Home } from "./Pages/Home";
import { RegisterPage } from "./Pages/Register";

const Rotas = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/register" element={<RegisterPage />} />
    </Routes>
  );
};

export default Rotas;
