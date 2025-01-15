import React from "react";
import Logo from "../img/Imagen1.png";

const NuevaContrasena = () => {
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
          Por favor ingrese la nueva contraseña.
        </p>

        <input
          type="password"
          placeholder="Nueva contraseña"
          className="w-1/2 border border-gray-300 rounded-lg px-3 py-2 mb-4 focus:outline-none focus:ring-2 focus:ring-green-500"
        />
        <input
          type="password"
          placeholder="Confirmar nueva contraseña"
          className="w-1/2 border border-gray-300 rounded-lg px-3 py-2 mb-6 focus:outline-none focus:ring-2 focus:ring-green-500"
        />

        <div className="flex gap-4">
          <button className="bg-green-600 text-white font-bold px-4 py-2 rounded hover:bg-green-700">
            Guardar
          </button>
          <button className="bg-red-600 text-white font-bold px-4 py-2 rounded hover:bg-red-700">
            Cancelar
          </button>
        </div>
      </div>
    </div>
  );
};

export default NuevaContrasena;
