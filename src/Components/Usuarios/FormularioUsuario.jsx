import React, { useState } from "react";
import Nombre from "../img/nombre.png";
import Correo from "../img/correo.png";
import Rol from "../img/rol.png";
import Contraseña from "../img/contraseña.png";
import Tipo from "../img/tipo.png";
import Fecha from "../img/fecha.png";
import Guardar from "../img/guardar.png";
import Cancelar from "../img/cancelar.png";
import DatosEmpleado from "./DatosEmpleado";
import DatosRecolector from "./DatosRecolector";

const FormularioUsuario = ({ onAgregarUsuario, usuarioEditable }) => {
  const [formData, setFormData] = useState(
    usuarioEditable || {
      nombre: "",
      email: "",
      rol: "",
      password: "",
      confirmPassword: "",
      tipoUsuario: "empleado",
      habilitado: true,
      fechaRegistro: "",
      datosAdicionales: {},
    }
  );

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleToggle = () => {
    setFormData((prevState) => ({
      ...prevState,
      habilitado: !prevState.habilitado,
    }));
  };

  const handleAgregar = () => {
    onAgregarUsuario({ ...formData, id: usuarioEditable?.id || Date.now() });
    setFormData({
      nombre: "",
      email: "",
      rol: "",
      password: "",
      confirmPassword: "",
      tipoUsuario: "empleado",
      habilitado: true,
      fechaRegistro: "",
      datosAdicionales: {},
    });
  };

  const handleDatosAdicionalesChange = (field, value) => {
    setFormData((prevState) => ({
      ...prevState,
      datosAdicionales: {
        ...prevState.datosAdicionales,
        [field]: value,
      },
    }));
  };

  return (
    <div className="p-6 border border-green-400 rounded">
      <h2 className="text-2xl font-bold text-green-800 mb-4">
        {usuarioEditable ? "Editar Usuario" : "Agregar Nuevo Usuario"}
      </h2>
      <form onSubmit={(e) => e.preventDefault()} className="space-y-6">
        {/* Nombre */}
        <div className="mb-4">
          <label className="block font-medium text-green-700">Nombre:</label>
          <div className="flex items-center gap-2">
            <img src={Nombre} alt="Nombre" className="w-6 h-6" />
            <input
              type="text"
              name="name"
              value={formData.common_name}
              onChange={handleChange}
              className="w-full border border-gray-300 p-2 rounded"
            />
          </div>
        </div>

        {/* Correo Electrónico */}
        <div className="mb-4">
          <label className="block font-medium text-green-700">
            Correo Electrónico:
          </label>
          <div className="flex items-center gap-2">
            <img src={Correo} alt="Correo Electrónico" className="w-6 h-6" />
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200 px-4 py-2"
              placeholder="Ingresa el correo electrónico"
              required
            />
          </div>
        </div>

        {/* Rol */}
        <div className="mb-4">
          <label className="block font-medium text-green-700">Rol:</label>
          <div className="flex items-center gap-2">
            <img src={Rol} alt="Rol" className="w-6 h-6" />
            <select
              name="rol"
              value={formData.rol}
              onChange={(e) =>
                setFormData({ ...formData, rol: [e.target.value] })
              }
              className="w-full border border-gray-300 p-2 rounded"
            >
              <option value="">Seleccione un rol</option>
              <option value="Administrador">Administrador</option>
              <option value="Colaborador">Colaborador</option>
              <option value="Moderador">Moderador</option>
            </select>
          </div>
        </div>

        {/* Contraseña */}
        <div className="mb-4">
          <label className="block font-medium text-green-700">
            Contraseña:
          </label>
          <div className="flex items-center gap-2">
            <img src={Contraseña} alt="Contraseña" className="w-6 h-6" />
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200 px-4 py-2"
              placeholder="Ingresa una contraseña"
              required
            />
          </div>
        </div>

        {/* Confirmar Contraseña */}
        <div className="mb-4">
          <label className="block font-medium text-green-700">
            Confirmar Contraseña:
          </label>
          <div className="flex items-center gap-2">
            <img src={Contraseña} alt="Contraseña" className="w-6 h-6" />
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200 px-4 py-2"
              placeholder="Confirma la contraseña"
              required
            />
          </div>
        </div>

        {/* Tipo de Usuario */}
        <div className="mb-4">
          <label className="block font-medium text-green-700">
            Tipo de Usuario:
          </label>
          <div className="flex items-center gap-2">
            <img src={Tipo} alt="Tipo" className="w-6 h-6" />
            <div className="flex items-center space-x-4">
              <label className="flex items-center">
                <input
                  type="radio"
                  name="tipoUsuario"
                  value="empleado"
                  checked={formData.tipoUsuario === "empleado"}
                  onChange={handleChange}
                  className="form-radio text-blue-500 focus:ring focus:ring-blue-200"
                />
                <span className="ml-2 text-gray-700">Empleado</span>
              </label>
              <label className="flex items-center">
                <input
                  type="radio"
                  name="tipoUsuario"
                  value="recolector"
                  checked={formData.tipoUsuario === "recolector"}
                  onChange={handleChange}
                  className="form-radio text-blue-500 focus:ring focus:ring-blue-200"
                />
                <span className="ml-2 text-gray-700">Recolector</span>
              </label>
            </div>
          </div>
        </div>

        {/* Toggle Habilitado/No habilitado */}
        <div className="mb-4">
          <span className="block font-medium text-green-700">Habilitado</span>
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={handleToggle}
              className={`w-12 h-6 flex items-center rounded-full p-1 transition-colors duration-300 ${
                formData.habilitado ? "bg-green-500" : "bg-red-500"
              }`}
            >
              <div
                className={`w-4 h-4 bg-white rounded-full shadow-md transform transition-transform duration-300 ${
                  formData.habilitado ? "translate-x-6" : "translate-x-0"
                }`}
              ></div>
            </button>
          </div>
        </div>

        {/* Fecha de Registro */}
        <div className="mb-4">
          <label className="block font-medium text-green-700">
            Fecha de Registro:
          </label>
          <div className="flex items-center gap-2">
            <img src={Fecha} alt="Fecha de Registro" className="w-6 h-6" />
            <input
              type="date"
              name="registration_date"
              value={formData.registration_date}
              onChange={handleChange}
              className="w-full border border-gray-300 p-2 rounded"
            />
          </div>
        </div>

        {formData.tipoUsuario === "empleado" ? (
          <DatosEmpleado
            formData={formData.datosAdicionales}
            onChange={handleDatosAdicionalesChange}
          />
        ) : (
          <DatosRecolector
            formData={formData.datosAdicionales}
            onChange={handleDatosAdicionalesChange}
          />
        )}

        {/* Botones */}
        <div className="flex gap-4">
          <button
            type="button"
            className="flex items-center gap-2 bg-green-600 text-white font-bold px-4 py-2 rounded hover:bg-green-700"
            onClick={handleAgregar}
          >
            {" "}
            <img src={Guardar} alt="Guardar" className="w-5 h-5" />
            {usuarioEditable ? "Guardar Cambios" : "Agregar"}
          </button>
          <button
            type="button"
            className="flex items-center gap-2 bg-red-600 text-white font-bold px-4 py-2 rounded hover:bg-red-700"
            onClick={() => {
              setFormData({
                nombre: "",
                email: "",
                rol: "",
                password: "",
                confirmPassword: "",
                tipoUsuario: "empleado",
                habilitado: true,
                fechaRegistro: "",
                datosAdicionales: {},
              });
              window.location.href = "/listadoUsuarios";
            }}
          >
            <img src={Cancelar} alt="Cancelar" className="w-5 h-5" />
            Cancelar
          </button>
        </div>
      </form>
    </div>
  );
};

export default FormularioUsuario;
