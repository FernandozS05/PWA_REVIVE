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
import ListadoUsuarios from "./Components/Usuarios/ListadoUsuarios";
import FormularioUsuario from "./Components/Usuarios/FormularioUsuario";
import ListadoEmpleados from "./Components/Usuarios/ListadoEmpleados";
import ListadoRecolectores from "./Components/Usuarios/ListadoRecolectores";
import ListadoRecolectas from "./Components/Recolecta/ListadoRecolectas";
import FormularioRecolecta from "./Components/Recolecta/FormularioRecolecta";
import ListadoLotes from "./Components/Recepcion/ListadoLotes";
import FormularioLotes from "./Components/Recepcion/FormularioLotes";
import ListadoBeneficiado from "./Components/Beneficiado/ListadoBeneficiado";
import FormularioBeneficiado from "./Components/Beneficiado/FormularioBeneficiado";
import ListadoViabilidad from "./Components/Viabilidad/ListadoViabilidad";
import FormularioViabilidad from "./Components/Viabilidad/FormularioViabilidad";
import ListadoTratamientos from "./Components/Tratamiento/ListadoTratamientos";
import FormularioTratamiento from "./Components/Tratamiento/FormularioTratamiento";
import ListadoAlmacenamiento from "./Components/Almacenamiento/ListadoAlmacenamiento";
import ListadoDistribucion from "./Components/Distribucion/ListadoDistribucion";
import Calendario from "./Components/Calendario/CalendarioFenologico";



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
              <Route
                path="/listadoUsuarios"
                element={<ListadoUsuarios />}
              />
              <Route
                path="/formularioUsuario"
                element={<FormularioUsuario />}
              />
              <Route
                path="/listadoEmpleados"
                element={<ListadoEmpleados />}
              />
              <Route
                path="/listadoRecolectores"
                element={<ListadoRecolectores />}
              />
              <Route
                path="/listadoRecolectas"
                element={<ListadoRecolectas />}
              />
              <Route
                path="/formularioRecolecta"
                element={<FormularioRecolecta />}
              />
              <Route
                path="/listadoLotes"
                element={<ListadoLotes />}
              />
              <Route
                path="/formularioLotes"
                element={<FormularioLotes />}
              />
              <Route
                path="/listadoBeneficiado"
                element={<ListadoBeneficiado />}
              />
              <Route
                path="/formularioBeneficiado"
                element={<FormularioBeneficiado />}
              />
              <Route
                path="/listadoViabilidad"
                element={<ListadoViabilidad />}
              />
              <Route
                path="/formularioViabilidad"
                element={<FormularioViabilidad />}
              />
              <Route
                path="/listadoTratamientos"
                element={<ListadoTratamientos />}
              />
              <Route
                path="/formularioTratamiento"
                element={<FormularioTratamiento />}
              />
              <Route
                path="/listadoAlmacenamiento"
                element={<ListadoAlmacenamiento />}
              />
              <Route
                path="/listadoDistribucion"
                element={<ListadoDistribucion />}
              />
              <Route
                path="/calendario"
                element={<Calendario />}
              />
            </Routes>
          </div>
        </div>
      </AuthProvider>
    </Router>
  );
};

export default App;
