import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  useLocation,
} from "react-router-dom";
import "./App.css";
import { AuthProvider } from "./context/AuthContext";
import PrivateRoute from "./Components/Routes/PrivateRoute";
import Unauthorized from "./Components/Routes/Unauthorized";

import Login from "./Components/LoginForm";
import RestablecerContrasena from "./Components/RestablecerContrasena/RestablecerContrasena";
import NuevaContrasena from "./Components/RestablecerContrasena/NuevaContrasena";
import Menu from "./Components/Menu";
import Catalogo from "./Components/Especies/Catalogo";
import FormularioEspecie from "./Components/Especies/FormularioEspecie";

const MenuWrapper = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const noMenuRoutes = ["/login", "/restablecerContrasena", "/nuevaContrasena"];
  const shouldRenderMenu = !noMenuRoutes.includes(location.pathname);

  return (
    <>
      {shouldRenderMenu && (
        <>
          <button className="menu-toggle" onClick={toggleMenu}>
            <i className="fas fa-bars"></i>
          </button>
          <Menu isOpen={menuOpen} />
        </>
      )}
    </>
  );
};

const App = () => {
  return (
    <Router>
      <AuthProvider>
        <div className="flex">
          <MenuWrapper />
          <div className="content flex-1 p-6">
            <Routes>
              <Route path="/" element={<Navigate to="/login" />} />
              <Route path="/login" element={<Login />} />
              <Route
                path="/restablecerContrasena"
                element={<RestablecerContrasena />}
              />
              <Route path="/nuevaContrasena" element={<NuevaContrasena />} />
              <Route path="/unauthorized" element={<Unauthorized />} />
              <Route path="/catalogo" element={<Catalogo />} />
              <Route
                path="/formularioEspecie"
                element={<FormularioEspecie />}
              />
            </Routes>
          </div>
        </div>
      </AuthProvider>
    </Router>
  );
};

export default App;
