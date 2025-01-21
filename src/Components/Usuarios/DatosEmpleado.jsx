import React from "react";
import Generos from "../img/generos.png";
import CURP from "../img/curp.png";
import Direccion from "../img/direccion.png";
import NúmeroTelefonico from "../img/numerotelefonico.png";
import Cargo from "../img/cargo.png";
import Observaciones from "../img/observaciones.png";
import Fecha from "../img/fecha.png";

const DatosEmpleado = ({
  formData,
  onChange,
  isEditing,
  handleFileChange,
  visualizarArchivo,
  eliminarArchivo,
  urlINE,
  urlDomicilio,
  urlNacimiento,
  urlCURP,
  urlFotografia,
  urlCapacitaciones,
}) => (
  <div>
    <h3 className="font-bold text-green-700">Datos Adicionales del Empleado</h3>
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
          <option value="Hombre">Hombre</option>
          <option value="Mujer">Mujer</option>
          <option value="Otro">Otro</option>
        </select>
      </div>
    </div>
    {/* CURP */}
    <div className="mb-4">
      <label className="block font-medium text-green-700">CURP:</label>
      <div className="flex items-center gap-2">
        <img src={CURP} alt="CURP" className="w-6 h-6" />
        <input
          type="text"
          name="curp"
          value={formData.curp || ""}
          onChange={(e) => onChange("curp", e.target.value)}
          className="w-full border border-gray-300 p-2 rounded"
        />
      </div>
    </div>
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
    {/* RFC */}
    <div className="mb-4">
      <label className="block font-medium text-green-700">RFC:</label>
      <div className="flex items-center gap-2">
        <img src={CURP} alt="RFC" className="w-6 h-6" />
        <input
          type="text"
          name="rfc"
          value={formData.rfc || ""}
          onChange={(e) => onChange("rfc", e.target.value)}
          className="w-full border border-gray-300 p-2 rounded"
        />
      </div>
    </div>
    {/* Cargo/Puesto */}
    <div className="mb-4">
      <label className="block font-medium text-green-700">Cargo/Puesto:</label>
      <div className="flex items-center gap-2">
        <img src={Cargo} alt="Cargo/Puesto" className="w-6 h-6" />
        <input
          type="text"
          name="puesto"
          value={formData.puesto || ""}
          onChange={(e) => onChange("puesto", e.target.value)}
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

    {/* Campos visibles solo al editar */}
    {isEditing && (
      <>
        {/* Identificación oficial INE */}
        <div className="mb-3">
          <label htmlFor="identificacion_ine" className="form-label">
            Identificación oficial INE
          </label>
          <div className="input-group">
            <span className="input-group-text">
              <i className="fa fa-id-card" aria-hidden="true"></i>
            </span>
            <input
              type="file"
              className="form-control"
              id="identificacion_ine"
              name="identificacion_ine"
              accept="image/*"
              onChange={(e) => handleFileChange(e, "identificacion_ine")}
              required={!urlINE}
            />
            <button
              className="btn btn-success"
              type="button"
              disabled={!urlINE}
              onClick={() => visualizarArchivo(urlINE)}
            >
              Ver
            </button>
            <button
              className="btn btn-danger"
              type="button"
              disabled={!urlINE}
              onClick={() => eliminarArchivo("identificacion_ine")}
            >
              Eliminar
            </button>
          </div>
        </div>

        {/* Comprobante de Domicilio */}
        <div className="mb-3">
          <label htmlFor="comprobante_domicilio" className="form-label">
            Comprobante de Domicilio
          </label>
          <div className="input-group">
            <span className="input-group-text">
              <i className="fa fa-home" aria-hidden="true"></i>
            </span>
            <input
              type="file"
              className="form-control"
              id="comprobante_domicilio"
              name="comprobante_domicilio"
              accept="application/pdf"
              onChange={(e) => handleFileChange(e, "comprobante_domicilio")}
              required={!urlDomicilio}
            />
            <button
              className="btn btn-success"
              type="button"
              disabled={!urlDomicilio}
              onClick={() => visualizarArchivo(urlDomicilio)}
            >
              Ver
            </button>
            <button
              className="btn btn-danger"
              type="button"
              disabled={!urlDomicilio}
              onClick={() => eliminarArchivo("comprobante_domicilio")}
            >
              Eliminar
            </button>
          </div>
        </div>

        {/* Acta de Nacimiento */}
        <div className="mb-3">
          <label htmlFor="acta_nacimiento" className="form-label">
            Acta de Nacimiento
          </label>
          <div className="input-group">
            <span className="input-group-text">
              <i className="fa fa-file-text" aria-hidden="true"></i>
            </span>
            <input
              type="file"
              className="form-control"
              id="acta_nacimiento"
              name="acta_nacimiento"
              accept="application/pdf"
              onChange={(e) => handleFileChange(e, "acta_nacimiento")}
              required={!urlNacimiento}
            />
            <button
              className="btn btn-success"
              type="button"
              disabled={!urlNacimiento}
              onClick={() => visualizarArchivo(urlNacimiento)}
            >
              Ver
            </button>
            <button
              className="btn btn-danger"
              type="button"
              disabled={!urlNacimiento}
              onClick={() => eliminarArchivo("acta_nacimiento")}
            >
              Eliminar
            </button>
          </div>
        </div>

        {/* CURP */}
        <div className="mb-3">
          <label htmlFor="curp" className="form-label">
            CURP
          </label>
          <div className="input-group">
            <span className="input-group-text">
              <i className="fa fa-id-badge" aria-hidden="true"></i>
            </span>
            <input
              type="file"
              className="form-control"
              id="curp"
              name="curp"
              accept="application/pdf"
              onChange={(e) => handleFileChange(e, "curp")}
              required={!urlCURP}
            />
            <button
              className="btn btn-success"
              type="button"
              disabled={!urlCURP}
              onClick={() => visualizarArchivo(urlCURP)}
            >
              Ver
            </button>
            <button
              className="btn btn-danger"
              type="button"
              disabled={!urlCURP}
              onClick={() => eliminarArchivo("curp")}
            >
              Eliminar
            </button>
          </div>
        </div>

        {/* Fotografía */}
        <div className="mb-3">
          <label htmlFor="fotografia" className="form-label">
            Fotografía
          </label>
          <div className="input-group">
            <span className="input-group-text">
              <i className="fa fa-camera" aria-hidden="true"></i>
            </span>
            <input
              type="file"
              className="form-control"
              id="fotografia"
              name="fotografia"
              accept="image/*"
              onChange={(e) => handleFileChange(e, "fotografia")}
              required={!urlFotografia}
            />
            <button
              className="btn btn-success"
              type="button"
              disabled={!urlFotografia}
              onClick={() => visualizarArchivo(urlFotografia)}
            >
              Ver
            </button>
            <button
              className="btn btn-danger"
              type="button"
              disabled={!urlFotografia}
              onClick={() => eliminarArchivo("fotografia")}
            >
              Eliminar
            </button>
          </div>
        </div>

        {/* Capacitaciones o adiestramientos */}
        <div className="mb-3">
          <label htmlFor="capacitaciones" className="form-label">
            Capacitaciones o adiestramientos
          </label>
          <div className="input-group">
            <span className="input-group-text">
              <i className="fa fa-graduation-cap" aria-hidden="true"></i>
            </span>
            <input
              type="file"
              className="form-control"
              id="capacitaciones"
              name="capacitaciones"
              accept="application/pdf"
              multiple
              onChange={(e) => handleFileChange(e, "capacitaciones")}
            />
            <button
              className="btn btn-success"
              type="button"
              disabled={!urlCapacitaciones}
              onClick={() => visualizarArchivo(urlCapacitaciones)}
            >
              Ver
            </button>
            <button
              className="btn btn-danger"
              type="button"
              disabled={!urlCapacitaciones}
              onClick={() => eliminarArchivo("capacitaciones")}
            >
              Eliminar
            </button>
          </div>
        </div>
      </>
    )}
  </div>
);

export default DatosEmpleado;
