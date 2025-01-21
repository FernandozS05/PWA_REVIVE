import React, { useState } from "react";
import CodigoColecta from "../img/codigoRecolecta.png";
import Fecha from "../img/fecha.png";
import Tiempo from "../img/estadoLote.png";
import Encargados from "../img/colaboracion.png";
import PesoFinal from "../img/pesoTotal.png";
import Observaciones from "../img/observaciones.png";
import Guardar from "../img/guardar.png";
import Cancelar from "../img/cancelar.png";

const FormularioProceso = ({ onAgregarProceso, procesoEditable }) => {
  const [formData, setFormData] = useState(
    procesoEditable || {
      codigo_recoleccion: "",
      fecha_inicio: "",
      tiempo_requerido: "",
      encargados: "",
      peso_final: "",
      porcentaje_viabilidad: "",
      observaciones: "",
    }
  );

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleAgregar = () => {
    onAgregarProceso({ ...formData, id: procesoEditable?.id || Date.now() });
    setFormData({
      codigo_recoleccion: "",
      fecha_inicio: "",
      tiempo_requerido: "",
      encargados: "",
      peso_final: "",
      porcentaje_viabilidad: "",
      observaciones: "",
    });
  };

  const handleCancelar = () => {
    setFormData({
      codigo_recoleccion: "",
      fecha_inicio: "",
      tiempo_requerido: "",
      encargados: "",
      peso_inicial: "",
      peso_final: "",
      observaciones: "",
    });
    window.location.href = "/listadoViabilidad";
  };

  return (
    <div className="p-6 border border-green-400 rounded">
      <h2 className="text-2xl font-bold text-green-800 mb-4">
        Agregar Proceso
      </h2>
      <form>
        {/* Código de Recolección */}
        <div className="mb-4">
          <label className="block font-medium text-green-700">
            Código de Recolección:
          </label>
          <div className="flex items-center gap-2">
            <img
              src={CodigoColecta}
              alt="Código de Recolección"
              className="w-6 h-6"
            />
            <input
              type="text"
              name="codigo_recoleccion"
              value={formData.codigo_recoleccion}
              onChange={handleChange}
              className="w-full border border-gray-300 p-2 rounded"
            />
          </div>
        </div>

        {/* Fecha de Inicio */}
        <div className="mb-4">
          <label className="block font-medium text-green-700">
            Fecha de Inicio:
          </label>
          <div className="flex items-center gap-2">
            <img src={Fecha} alt="Fecha de Inicio" className="w-6 h-6" />
            <input
              type="date"
              name="fecha_inicio"
              value={formData.fecha_inicio}
              onChange={handleChange}
              className="w-full border border-gray-300 p-2 rounded"
            />
          </div>
        </div>

        {/* Tiempo Requerido */}
        <div className="mb-4">
          <label className="block font-medium text-green-700">
            Tiempo Requerido:
          </label>
          <div className="flex items-center gap-2">
            <img src={Tiempo} alt="Tiempo Requerido" className="w-6 h-6" />
            <input
              type="text"
              name="tiempo_requerido"
              value={formData.tiempo_requerido}
              onChange={handleChange}
              className="w-full border border-gray-300 p-2 rounded"
            />
          </div>
        </div>

        {/* Encargados */}
        <div className="mb-4">
          <label className="block font-medium text-green-700">
            Encargados:
          </label>
          <div className="flex items-center gap-2">
            <img src={Encargados} alt="Encargados" className="w-6 h-6" />
            <input
              type="text"
              name="encargados"
              value={formData.encargados}
              onChange={handleChange}
              className="w-full border border-gray-300 p-2 rounded"
            />
          </div>
        </div>

        {/* Peso Final */}
        <div className="mb-4">
          <label className="block font-medium text-green-700">
            Peso Final (GR):
          </label>
          <div className="flex items-center gap-2">
            <img src={PesoFinal} alt="Peso Final" className="w-6 h-6" />
            <input
              type="number"
              name="peso_final"
              value={formData.peso_final}
              onChange={handleChange}
              className="w-full border border-gray-300 p-2 rounded"
            />
          </div>
        </div>

        {/* Porcentaje de Viabilidad */}
        <div className="mb-4">
          <label className="block font-medium text-green-700">
            Porcentaje de Viabilidad (%):
          </label>
          <div className="flex items-center gap-2">
            <img
              src={PesoFinal}
              alt="Porcentaje de Viabilidad"
              className="w-6 h-6"
            />
            <input
              type="number"
              name="porcentaje_viabilidad"
              value={formData.porcentaje_viabilidad}
              onChange={handleChange}
              className="w-full border border-gray-300 p-2 rounded"
            />
          </div>
        </div>

        {/* Observaciones */}
        <div className="mb-4">
          <label className="block font-medium text-green-700">
            Observaciones:
          </label>
          <div className="flex items-center gap-2">
            <img src={Observaciones} alt="Observaciones" className="w-6 h-6" />
            <textarea
              name="observaciones"
              value={formData.observaciones}
              onChange={handleChange}
              className="w-full border border-gray-300 p-2 rounded"
            />
          </div>
        </div>

        {/* Botones */}
        <div className="flex gap-4">
          <button
            type="button"
            className="flex items-center gap-2 bg-green-600 text-white font-bold px-4 py-2 rounded hover:bg-green-700"
            onClick={handleAgregar}
          >
            <img src={Guardar} alt="Guardar" className="w-5 h-5" />
            {procesoEditable ? "Guardar Cambios" : "Agregar"}
          </button>
          <button
            type="button"
            className="flex items-center gap-2 bg-red-600 text-white font-bold px-4 py-2 rounded hover:bg-red-700"
            onClick={handleCancelar}
          >
            <img src={Cancelar} alt="Cancelar" className="w-5 h-5" />
            Cancelar
          </button>
        </div>
      </form>
    </div>
  );
};

export default FormularioProceso;
