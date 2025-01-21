import React, { useState, useEffect } from "react";
import Recolector from "../img/recolector.png";
import Asistentes from "../img/asistentes.png";
import Estado from "../img/estado.png";
import Municipio from "../img/municipio.png";
import Localidad from "../img/localidad.png";
import Coordenadas from "../img/coordenadas.png";
import Altitud from "../img/altitud.png";
import Ecosistema from "../img/ecosistema.png";
import Suelo from "../img/suelo.png";
import CaracteristicasArbol from "../img/caracteristicasArbol.png";
import InfoAdicional from "../img/infoAdicional.png";
import Propietario from "../img/propietario.png";
import Peso from "../img/peso.png";
import Observaciones from "../img/observaciones.png";
import Fecha from "../img/fecha.png";
import CodigoColecta from "../img/codigoRecolecta.png";
import Guardar from "../img/guardar.png";
import Cancelar from "../img/cancelar.png";

const FormularioRecolecta = ({ onAgregarRecolecta, recolectaEditable }) => {
  const [formData, setFormData] = useState(
    recolectaEditable || {
      recolector: "",
      asistentes: "",
      estado: "",
      municipio: "",
      localidad: "",
      latitud: "",
      longitud: "",
      altitud: "",
      ecosistema: "",
      suelo: "",
      caracteristicasArbol: "",
      infoAdicional: "",
      tipoPropietario: "",
      pesoSemillas: "",
      observaciones: "",
      fechaRegistro: "",
    }
  );

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleAgregar = () => {
    onAgregarRecolecta({
      ...formData,
      id: recolectaEditable?.id || Date.now(),
    });
    setFormData({
      recolector: "",
      asistentes: "",
      estado: "",
      municipio: "",
      localidad: "",
      latitud: "",
      longitud: "",
      altitud: "",
      ecosistema: "",
      suelo: "",
      caracteristicasArbol: "",
      infoAdicional: "",
      tipoPropietario: "",
      pesoSemillas: "",
      observaciones: "",
      fechaRegistro: "",
    });
  };

  const handleCancelar = () => {
    setFormData({
      recolector: "",
      asistentes: "",
      estado: "",
      municipio: "",
      localidad: "",
      latitud: "",
      longitud: "",
      altitud: "",
      ecosistema: "",
      suelo: "",
      caracteristicasArbol: "",
      infoAdicional: "",
      tipoPropietario: "",
      pesoSemillas: "",
      observaciones: "",
      fechaRegistro: "",
      codigoRecoleccion: "",
    });
    window.location.href = "/listadoRecolectas";
  };

  const obtenerAltitud = async (lat, lon) => {
    try {
      const response = await fetch(
        `https://api.open-elevation.com/api/v1/lookup?locations=${lat},${lon}`
      );
      const data = await response.json();
      if (data.results && data.results.length > 0) {
        setFormData((prev) => ({
          ...prev,
          altitud: data.results[0].elevation,
        }));
      } else {
        alert("No se pudo obtener la altitud.");
      }
    } catch (error) {
      console.error("Error obteniendo la altitud:", error);
    }
  };

  const handleGeolocalizacion = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        setFormData({
          ...formData,
          latitud: position.coords.latitude,
          longitud: position.coords.longitude,
        });
        obtenerAltitud(position.coords.latitude, position.coords.longitude);
      });
    }
  };

  return (
    <div className="p-6 border border-green-400 rounded">
      <h2 className="text-2xl font-bold text-green-800 mb-4">
        {recolectaEditable ? "Editar Recolecta" : "Agregar Nueva Recolecta"}
      </h2>
      <form onSubmit={(e) => e.preventDefault()} className="space-y-6">
        {/* Recolector */}
        <div className="mb-4">
          <label className="block font-medium text-green-700">
            Recolector:
          </label>
          <div className="flex items-center gap-2">
            <img src={Recolector} alt="Recolector" className="w-6 h-6" />
            <select
              name="recolector"
              value={formData.recolector}
              onChange={handleChange}
              className="w-full border border-gray-300 p-2 rounded"
            >
              <option value="">Seleccione un recolector</option>
            </select>
          </div>
        </div>

        {/* Asistentes */}
        <div className="mb-4">
          <label className="block font-medium text-green-700">
            Asistentes:
          </label>
          <div className="flex items-center gap-2">
            <img src={Asistentes} alt="Asistentes" className="w-6 h-6" />
            <input
              type="text"
              name="asistentes"
              value={formData.asistentes}
              onChange={handleChange}
              className="w-full border border-gray-300 p-2 rounded"
              placeholder="Ingresa los nombres de los asistentes"
            />
          </div>
        </div>

        {/* Estado */}
        <div className="mb-4">
          <label className="block font-medium text-green-700">Estado:</label>
          <div className="flex items-center gap-2">
            <img src={Estado} alt="Estado" className="w-6 h-6" />
            <select
              name="estado"
              value={formData.estado}
              onChange={handleChange}
              className="w-full border border-gray-300 p-2 rounded"
            >
              <option value="">Seleccione un estado</option>
            </select>
          </div>
        </div>

        {/* Municipio */}
        <div className="mb-4">
          <label className="block font-medium text-green-700">Municipio:</label>
          <div className="flex items-center gap-2">
            <img src={Municipio} alt="Municipio" className="w-6 h-6" />
            <select
              name="municipio"
              value={formData.municipio}
              onChange={handleChange}
              className="w-full border border-gray-300 p-2 rounded"
            >
              <option value="">Seleccione un municipio</option>
            </select>
          </div>
        </div>

        {/* Localidad */}
        <div className="mb-4">
          <label className="block font-medium text-green-700">Localidad:</label>
          <div className="flex items-center gap-2">
            <img src={Localidad} alt="Localidad" className="w-6 h-6" />
            <input
              type="text"
              name="localidad"
              value={formData.localidad}
              onChange={handleChange}
              className="w-full border border-gray-300 p-2 rounded"
              placeholder="Ingresa la localidad"
            />
          </div>
        </div>

        {/* Coordenadas */}
        <div className="mb-4">
          <label className="block font-medium text-green-700">
            Coordenadas Geográficas:
          </label>
          <div className="flex items-center gap-2">
            <img src={Coordenadas} alt="Coordenadas" className="w-6 h-6" />
            <div className="flex flex-col gap-2">
              <input
                type="text"
                name="latitud"
                value={formData.latitud}
                readOnly
                className="w-full border border-gray-300 p-2 rounded"
                placeholder="Latitud"
              />
              <input
                type="text"
                name="longitud"
                value={formData.longitud}
                readOnly
                className="w-full border border-gray-300 p-2 rounded"
                placeholder="Longitud"
              />
              <button
                type="button"
                onClick={handleGeolocalizacion}
                className="bg-green-600 text-white font-bold px-4 py-2 rounded hover:bg-green-700"
              >
                Calcular
              </button>
            </div>
          </div>
        </div>

        {/* Altitud */}
        <div className="mb-4">
          <label className="block font-medium text-green-700">
            Altitud sobre el nivel del mar (AMSL):
          </label>
          <div className="flex items-center gap-2">
            <img src={Altitud} alt="Altitud" className="w-6 h-6" />
            <input
              type="text"
              name="altitud"
              value={formData.altitud}
              readOnly
              className="w-full border border-gray-300 p-2 rounded"
              placeholder="Altitud"
            />
            <button
              type="button"
              onClick={handleGeolocalizacion}
              className="bg-green-600 text-white font-bold px-4 py-2 rounded hover:bg-green-700"
            >
              Calcular
            </button>
          </div>
        </div>

        {/* Ecosistema */}
        <div className="mb-4">
          <label className="block font-medium text-green-700">
            Tipo de Ecosistema:
          </label>
          <div className="flex items-center gap-2">
            <img src={Ecosistema} alt="Ecosistema" className="w-6 h-6" />
            <select
              name="ecosistema"
              value={formData.ecosistema}
              onChange={handleChange}
              className="w-full border border-gray-300 p-2 rounded"
            >
              <option value="">Seleccione un ecosistema</option>
            </select>
          </div>
        </div>

        {/* Suelo */}
        <div className="mb-4">
          <label className="block font-medium text-green-700">
            Tipo de Suelo:
          </label>
          <div className="flex items-center gap-2">
            <img src={Suelo} alt="Suelo" className="w-6 h-6" />
            <select
              name="suelo"
              value={formData.suelo}
              onChange={handleChange}
              className="w-full border border-gray-300 p-2 rounded"
            >
              <option value="">Seleccione un tipo de suelo</option>
            </select>
          </div>
        </div>

        {/* Características del Árbol */}
        <div className="mb-4">
          <label className="block font-medium text-green-700">
            Características del Árbol:
          </label>
          <div className="flex items-center gap-2">
            <img
              src={CaracteristicasArbol}
              alt="Características del Árbol"
              className="w-6 h-6"
            />
            <textarea
              name="caracteristicasArbol"
              value={formData.caracteristicasArbol}
              onChange={handleChange}
              className="w-full border border-gray-300 p-2 rounded"
              placeholder="Ingrese características del árbol"
            />
          </div>
        </div>

        {/* Información Adicional */}
        <div className="mb-4">
          <label className="block font-medium text-green-700">
            Información Adicional:
          </label>
          <div className="flex items-center gap-2">
            <img
              src={InfoAdicional}
              alt="Información Adicional"
              className="w-6 h-6"
            />
            <textarea
              name="infoAdicional"
              value={formData.infoAdicional}
              onChange={handleChange}
              className="w-full border border-gray-300 p-2 rounded"
              placeholder="Ingrese información adicional"
            />
          </div>
        </div>

        {/* Tipo de Propietario */}
        <div className="mb-4">
          <label className="block font-medium text-green-700">
            Tipo de Propietario:
          </label>
          <div className="flex items-center gap-2">
            <img src={Propietario} alt="Propietario" className="w-6 h-6" />
            <select
              name="tipoPropietario"
              value={formData.tipoPropietario}
              onChange={handleChange}
              className="w-full border border-gray-300 p-2 rounded"
            >
              <option value="">Seleccione un tipo de propietario</option>
            </select>
          </div>
        </div>

        {/* Peso de las semillas */}
        <div className="mb-4">
          <label className="block font-medium text-green-700">
            Peso de las semillas recolectadas (gr):
          </label>
          <div className="flex items-center gap-2">
            <img src={Peso} alt="Peso" className="w-6 h-6" />
            <input
              type="number"
              name="pesoSemillas"
              value={formData.pesoSemillas}
              onChange={handleChange}
              className="w-full border border-gray-300 p-2 rounded"
              placeholder="Peso de las semillas en gramos"
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
              placeholder="Observaciones"
            />
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
              name="fechaRegistro"
              value={formData.fechaRegistro}
              onChange={handleChange}
              className="w-full border border-gray-300 p-2 rounded"
            />
          </div>
        </div>

        {/* Código de Colecta */}
        <div className="mb-4">
          <label className="block font-medium text-green-700">
            Código de Colecta:
          </label>
          <div className="flex items-center gap-2">
            <img
              src={CodigoColecta}
              alt="Código de Colecta"
              className="w-6 h-6"
            />
            <input
              type="text"
              name="codigoColecta"
              value={formData.codigoColecta}
              readOnly
              className="w-full border border-gray-300 p-2 rounded"
              placeholder="Código de Colecta"
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
            {recolectaEditable ? "Guardar Cambios" : "Agregar"}
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

export default FormularioRecolecta;
