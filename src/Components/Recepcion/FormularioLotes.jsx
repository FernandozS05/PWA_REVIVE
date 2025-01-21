import React, { useState } from "react";
import TipoEspecie from "../img/tipoEspecie.png";
import CantidadSemillas from "../img/cantidadSemillas.png";
import CodigoColecta from "../img/codigoRecolecta.png";
import PesoTotal from "../img/pesoTotal.png";
import EstadoLote from "../img/estadoLote.png";
import ZonaAlmacenamiento from "../img/zonaAlmacenamiento.png";
import TipoSemilla from "../img/tiposemilla.png";
import Fecha from "../img/fecha.png";
import Guardar from "../img/guardar.png";
import Cancelar from "../img/cancelar.png";

const FormularioLote = ({ onAgregarLote, loteEditable }) => {
  const [formData, setFormData] = useState(
    loteEditable || {
      especie: "",
      cantidadSemillas: "",
      codigoRecoleccion: "",
      pesoTotal: "",
      estadoLote: "",
      zonaAlmacenamiento: "",
      tipoSemilla: "",
      fechaRegistro: "",
    }
  );

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleAgregar = () => {
    onAgregarLote({ ...formData, id: loteEditable?.id || Date.now() });
    setFormData({
      especie: "",
      cantidadSemillas: "",
      codigoRecoleccion: "",
      pesoTotal: "",
      estadoLote: "",
      zonaAlmacenamiento: "",
      tipoSemilla: "",
      fechaRegistro: "",
    });
  };

  const handleCancelar = () => {
    setFormData({
        especie: "",
        cantidadSemillas: "",
        codigoRecoleccion: "",
        pesoTotal: "",
        estadoLote: "",
        zonaAlmacenamiento: "",
        tipoSemilla: "",
        fechaRegistro: "",
    });
    window.location.href = "/listadoLotes";
  };

  return (
    <div className="p-6 border border-green-400 rounded">
      <h2 className="text-2xl font-bold text-green-800 mb-4">
        {loteEditable ? "Editar Lote" : "Agregar Lote"}
      </h2>
      <form>
        <div className="mb-4">
          <label className="block font-medium text-green-700">
            Tipo de Especie:
          </label>
          <div className="flex items-center gap-2">
            <img src={TipoEspecie} alt="Tipo de Especie" className="w-6 h-6" />
            <select
              name="especie"
              value={formData.especie}
              onChange={handleChange}
              className="w-full border border-gray-300 p-2 rounded"
            >
              <option value="">Seleccione una especie</option>
              <option value="Pino">Pino</option>
              <option value="Encino">Encino</option>
              <option value="Cedro">Cedro</option>
            </select>
          </div>
        </div>

        <div className="mb-4">
          <label className="block font-medium text-green-700">
            Cantidad de Semillas (GR):
          </label>
          <div className="flex items-center gap-2">
            <img src={CantidadSemillas} alt="Cantidad" className="w-6 h-6" />
            <input
              type="number"
              name="cantidadSemillas"
              value={formData.cantidadSemillas}
              onChange={handleChange}
              className="w-full border border-gray-300 p-2 rounded"
            />
          </div>
        </div>

        <div className="mb-4">
          <label className="block font-medium text-green-700">
            Código de Recolección:
          </label>
          <div className="flex items-center gap-2">
            <img src={CodigoColecta} alt="Código" className="w-6 h-6" />
            <input
              type="text"
              name="codigoRecoleccion"
              value={formData.codigoRecoleccion}
              onChange={handleChange}
              className="w-full border border-gray-300 p-2 rounded"
            />
          </div>
        </div>

        <div className="mb-4">
          <label className="block font-medium text-green-700">
            Peso Total (GR):
          </label>
          <div className="flex items-center gap-2">
            <img src={PesoTotal} alt="Peso" className="w-6 h-6" />
            <input
              type="number"
              name="pesoTotal"
              value={formData.pesoTotal}
              onChange={handleChange}
              className="w-full border border-gray-300 p-2 rounded"
            />
          </div>
        </div>

        <div className="mb-4">
          <label className="block font-medium text-green-700">
            Estado Actual del Lote:
          </label>
          <div className="flex items-center gap-2">
            <img src={EstadoLote} alt="Estado" className="w-6 h-6" />
            <select
              name="estadoLote"
              value={formData.estadoLote}
              onChange={handleChange}
              className="w-full border border-gray-300 p-2 rounded"
            >
              <option value="">Seleccione un estado</option>
              <option value="Secado">Secado</option>
              <option value="Almacenado">Almacenado</option>
            </select>
          </div>
        </div>

        <div className="mb-4">
          <label className="block font-medium text-green-700">
            Zona de Almacenamiento:
          </label>
          <div className="flex items-center gap-2">
            <img src={ZonaAlmacenamiento} alt="Zona" className="w-6 h-6" />
            <select
              name="zonaAlmacenamiento"
              value={formData.zonaAlmacenamiento}
              onChange={handleChange}
              className="w-full border border-gray-300 p-2 rounded"
            >
              <option value="">Seleccione una zona</option>
              <option value="Zona A">Zona A</option>
              <option value="Zona B">Zona B</option>
            </select>
          </div>
        </div>

        {/* Tipo de Semilla */}
        <div className="mb-4">
          <label className="block font-medium text-green-700">
            Tipo de Semilla:
          </label>
          <div className="flex items-center gap-2">
            <img src={TipoSemilla} alt="Tipo de Semilla" className="w-6 h-6" />
            <select
              name="seed_type"
              value={formData.seed_type}
              onChange={handleChange}
              className="w-full border border-gray-300 p-2 rounded"
            >
              <option value="">Seleccione un tipo</option>
              <option value="Ortodoxa">Ortodoxa</option>
              <option value="Recalcitrante">Recalcitrante</option>
              <option value="Intermedia">Intermedia</option>
            </select>
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

        {/* Botones */}
        <div className="flex gap-4">
          <button
            type="button"
            className="flex items-center gap-2 bg-green-600 text-white font-bold px-4 py-2 rounded hover:bg-green-700"
            onClick={handleAgregar}
          >
            <img src={Guardar} alt="Guardar" className="w-5 h-5" />
            {loteEditable ? "Guardar Cambios" : "Agregar"}
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

export default FormularioLote;
