import React from "react";
import Generos from "../img/generos.png";
import Direccion from "../img/direccion.png";
import NúmeroTelefonico from "../img/numerotelefonico.png";
import Observaciones from "../img/observaciones.png";
import Area from "../img/area.png";
import Colaboracion from "../img/colaboracion.png";
import Tarjeta from "../img/tarjeta.png";
import Fecha from "../img/fecha.png";

const DatosRecolector = ({ formData, onChange }) => (
  <div>
    <h3 className="font-bold text-green-700">
      Datos Adicionales del Recolector
    </h3>
    {/* Dirección */}
    <div className="mb-4">
      <label className="block font-medium text-green-700">Dirección:</label>
      <div className="flex items-center gap-2">
        <img src={Direccion} alt="Dirección" className="w-6 h-6" />
        <input
          type="text"
          name="direccion"
          value={formData.direccion || ""}
          onChange={(e) => onChange("direccion", e.target.value)}
          className="w-full border border-gray-300 p-2 rounded"
        />
      </div>
    </div>
    {/* Número Telefónico */}
    <div className="mb-4">
      <label className="block font-medium text-green-700">
        Número Telefónico:
      </label>
      <div className="flex items-center gap-2">
        <img
          src={NúmeroTelefonico}
          alt="Número Telefónico"
          className="w-6 h-6"
        />
        <input
          type="tel"
          name="telefono"
          value={formData.telefono || ""}
          onChange={(e) => onChange("telefono", e.target.value)}
          className="w-full border border-gray-300 p-2 rounded"
        />
      </div>
    </div>
    {/* Género */}
    <div className="mb-4">
      <label className="block font-medium text-green-700">Género:</label>
      <div className="flex items-center gap-2">
        <img src={Generos} alt="Género" className="w-6 h-6" />
        <select
          name="genus"
          value={formData.genus}
          onChange={(e) => onChange("genus", e.target.value)}
          className="w-full border border-gray-300 p-2 rounded"
        >
          <option value="">Seleccione un género</option>
          <option value="Masculino">Masculino</option>
          <option value="Femenino">Femenino</option>
          <option value="Otro">Otro</option>
        </select>
      </div>
    </div>
    {/* Fecha de Nacimiento */}
    <div className="mb-4">
      <label className="block font-medium text-green-700">
        Fecha de Nacimiento:
      </label>
      <div className="flex items-center gap-2">
        <img src={Fecha} alt="Fecha de Nacimiento" className="w-6 h-6" />
        <input
          type="date"
          name="fechaNacimiento"
          value={formData.fechaNacimiento || ""}
          onChange={(e) => onChange("fechaNacimiento", e.target.value)}
          className="w-full border border-gray-300 p-2 rounded"
        />
      </div>
    </div>
    {/* Área de Recolección */}
    <div className="mb-4">
      <label className="block font-medium text-green-700">
        Área de Recolección:
      </label>
      <div className="flex items-center gap-2">
        <img src={Area} alt="Área de Recolección" className="w-6 h-6" />
        <input
          type="text"
          name="areaRecoleccion"
          value={formData.areaRecoleccion || ""}
          onChange={(e) => onChange("areaRecoleccion", e.target.value)}
          className="w-full border border-gray-300 p-2 rounded"
        />
      </div>
    </div>
    {/* Tipo de Colaboración */}
    <div className="mb-4">
      <label className="block font-medium text-green-700">
        Tipo de Colaboración:
      </label>
      <div className="flex items-center gap-2">
        <img src={Colaboracion} alt="Área de Recolección" className="w-6 h-6" />
        <select
          name="tipoColaboracion"
          value={formData.tipoColaboracion || ""}
          onChange={(e) => onChange("tipoColaboracion", e.target.value)}
          className="w-full border border-gray-300 p-2 rounded"
        >
          <option value="">Seleccione un tipo</option>
          <option value="Voluntario">Voluntario</option>
          <option value="Contratado">Contratado</option>
          <option value="Subcontratado">Subcontratado</option>
        </select>
      </div>
    </div>
    {/* Número de Tarjeta de Débito */}
    <div className="mb-4">
      <label className="block font-medium text-green-700">
        Número de Tarjeta de Débito:
      </label>
      <div className="flex items-center gap-2">
        <img src={Tarjeta} alt="Área de Recolección" className="w-6 h-6" />
        <input
          type="text"
          name="numeroTarjeta"
          value={formData.numeroTarjeta || ""}
          onChange={(e) => onChange("numeroTarjeta", e.target.value)}
          className="w-full border border-gray-300 p-2 rounded"
        />
      </div>
    </div>
    {/* Observaciones */}
    <div className="mb-4">
      <label className="block font-medium text-green-700">Observaciones:</label>
      <div className="flex items-center gap-2">
        <img src={Observaciones} alt="Observaciones" className="w-6 h-6" />
        <textarea
          name="observaciones"
          value={formData.observaciones || ""}
          onChange={(e) => onChange("observaciones", e.target.value)}
          className="w-full border border-gray-300 p-2 rounded"
        ></textarea>
      </div>
    </div>
  </div>
);

export default DatosRecolector;
