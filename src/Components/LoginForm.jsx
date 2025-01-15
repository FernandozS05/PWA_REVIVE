import React, { useState, useContext } from "react";
import { useLocation } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import { Link } from "react-router-dom";
import Logo from "./img/Imagen1.png";
import IconIngresar from "./img/iconoIngresar.png";

const LoginForm = () => {
  const { login } = useContext(AuthContext);
  const [correo, setCorreo] = useState("");
  const [contrasenia, setContrasenia] = useState("");
  const [correoError, setCorreoError] = useState("");
  const [contraseniaError, setContraseniaError] = useState("");
  const location = useLocation();
  const from = location.state?.from?.pathname || "/catalogo";

  const handleSubmit = async (e) => {
    e.preventDefault();
    const isCorreoValid = validateCorreo(correo);
    const isContraseniaValid = validateContrasenia(contrasenia);

    if (isCorreoValid && isContraseniaValid) {
      await login(correo, contrasenia, from);
    }
  };

  const validateCorreo = (correo) => {
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!regex.test(correo)) {
      setCorreoError("El correo no tiene un formato válido.");
      return false;
    }
    setCorreoError("");
    return true;
  };

  const validateContrasenia = (contrasenia) => {
    if (contrasenia.length < 8 || !/\d/.test(contrasenia)) {
      setContraseniaError(
        "La contraseña debe tener al menos 8 caracteres e incluir números."
      );
      return false;
    }
    setContraseniaError("");
    return true;
  };

  return (
    <div className="h-screen flex">
      <div
        className="w-1/2 flex flex-col items-center justify-center"
        style={{
          background: "linear-gradient(to bottom, #53AC59, #FFFFFF)",
        }}
      >
        <img src={Logo} alt="Logo" className="w-64 mb-6" />
      </div>
      <div className="w-1/2 flex items-center justify-center bg-gray-100">
        <div className="bg-white shadow-md rounded-lg p-8 max-w-md w-full">
          <h1 className="text-3xl font-bold text-black text-center">
            Bienvenido
          </h1>
          <form onSubmit={handleSubmit} className="mt-6">
            <label htmlFor="correo" className="block text-gray-700">
              Correo
            </label>
            <input
              type="email"
              id="correo"
              value={correo}
              onChange={(e) => setCorreo(e.target.value)}
              placeholder="Ingrese Correo"
              className="w-full border border-gray-300 rounded-lg px-3 py-2 mb-2 focus:outline-none focus:ring-2 focus:ring-green-500"
            />
            {correoError && (
              <p className="text-red-500 text-sm mb-4">{correoError}</p>
            )}
            <label htmlFor="contrasenia" className="block text-gray-700">
              Contraseña
            </label>
            <input
              type="password"
              id="contrasenia"
              value={contrasenia}
              onChange={(e) => setContrasenia(e.target.value)}
              placeholder="Ingrese Contraseña"
              className="w-full border border-gray-300 rounded-lg px-3 py-2 mb-2 focus:outline-none focus:ring-2 focus:ring-green-500"
            />
            {contraseniaError && (
              <p className="text-red-500 text-sm mb-4">{contraseniaError}</p>
            )}
            <div className="text-center mb-4">
              <Link
                to="/restablecerContrasena"
                className="text-green-600 text-sm hover:underline"
              >
                ¿Has olvidado tu contraseña?
              </Link>
            </div>
            <button
              type="submit"
              className="w-full bg-green-600 text-white font-bold py-2 px-4 rounded-lg flex items-center justify-center hover:bg-green-700"
            >
              <img
                src={IconIngresar}
                alt="Ícono Ingresar"
                className="w-6 h-6 mr-2"
              />
              Ingresar
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
