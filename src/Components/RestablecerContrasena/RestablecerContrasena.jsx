import React, { useState, useEffect } from "react";
import Logo from "../img/Imagen1.png";
import Email from "../img/email.png";

const RestablecerContrasena = () => {
  const [formData, setFormData] = useState({ email: "" });
  const [timeLeft, setTimeLeft] = useState(300);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prevTime) => (prevTime > 0 ? prevTime - 1 : 0));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds.toString().padStart(2, "0")}`;
  };

  return (
    <div className="flex h-screen">
      <div
        className="w-1/2 flex flex-col items-center justify-center"
        style={{ background: "linear-gradient(to bottom, #53AC59, #FFFFFF)" }}
      >
        <img src={Logo} alt="Logo" className="w-64 mb-6" />
      </div>

      <div className="w-1/2 flex flex-col items-center justify-center p-8">
        <h1 className="text-3xl font-bold mb-6 text-green-800">
          Restablecer Contraseña
        </h1>
        <p className="text-gray-700 mb-6">
          Método para restablecer contraseña.
        </p>

        <div className="mb-4 w-3/4">
          <label className="block font-medium text-green-700 text-center mb-2">
            Correo Electrónico:
          </label>
          <div className="flex items-center gap-2 justify-center w-full">
            <img src={Email} alt="Correo Electrónico" className="w-6 h-6" />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="flex-grow max-w-xl border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
              placeholder="Ingrese Correo"
            />
          </div>
        </div>

        <button className="bg-green-600 text-white font-bold px-4 py-2 rounded hover:bg-green-700 mb-8">
          Enviar Código
        </button>

        <div className="bg-white shadow-lg rounded-lg p-6 text-center mb-8">
          <h2 className="font-bold text-lg mb-4">Verificación</h2>
          <p className="text-gray-600 text-sm mb-4">
            Ingresa los 4 dígitos del código que recibiste al correo
            electrónico.
          </p>
          <div className="flex justify-center gap-2 mb-4">
            {[...Array(4)].map((_, index) => (
              <input
                key={index}
                type="text"
                maxLength="1"
                className="w-12 h-12 border border-gray-300 rounded-lg text-center text-lg focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            ))}
          </div>
          <p className="text-gray-700 text-sm mb-4">{formatTime(timeLeft)}</p>
        </div>

        <div className="flex gap-4">
          <button className="bg-green-600 text-white font-bold px-4 py-2 rounded hover:bg-green-700">
            Confirmar
          </button>
          <button className="bg-red-600 text-white font-bold px-4 py-2 rounded hover:bg-red-700">
            Cancelar
          </button>
        </div>
      </div>
    </div>
  );
};

export default RestablecerContrasena;
