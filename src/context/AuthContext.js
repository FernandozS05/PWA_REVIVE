import React, { createContext, useState, useEffect } from "react";
import axios from "../config/axios.js";
import { jwtDecode } from "jwt-decode";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import manejarError from "../utils/Errores.js";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [previousPath, setPreviousPath] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const loadUserFromToken = async () => {
      const token = localStorage.getItem("tokenUsuario");
      if (token) {
        try {
          const userData = jwtDecode(token);
          setUser(userData);
        } catch (error) {
          console.error("Error al decodificar el token:", error);
        }
      }
      setLoading(false);
    };
    loadUserFromToken();
  }, []);

  /*const login = async (correo, contrasenia, from) => {
    try {
      Swal.fire({
        title: "Iniciando sesión...",
        didOpen: () => {
          Swal.showLoading();
        },
        allowOutsideClick: false,
        allowEscapeKey: false,
        allowEnterKey: false,
      });

      const response = await axios.post("usuarios/login", { correo, contrasenia });
      Swal.close();

      if (response.status === 200) {
        Swal.fire({
          icon: "success",
          title: "Bienvenido",
        });
        const { token } = response.data;
        localStorage.setItem("tokenUsuario", token);
        const userData = jwtDecode(token);
        setUser(userData);
        navigate(from);
      }
    } catch (error) {
      Swal.close();
      manejarError(error, navigate);
    }
  };*/
  const login = async (correo, contrasenia, from) => {
    const simulatedUser = {
      correo: "fernandols0902@gmail.com",
      permisos: "admin",
    };

    localStorage.setItem("tokenUsuario", "token_simulado");
    setUser(simulatedUser);

    navigate(from);
  };

  const logout = () => {
    localStorage.removeItem("tokenUsuario");
    setUser(null);
  };

  return (
    <AuthContext.Provider
      value={{ user, login, logout, loading, previousPath, setPreviousPath }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
