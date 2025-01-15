import React, { useState } from "react";
import Agregar from "../img/agregar.png";
import Buscar from "../img/buscar.png";
import Visualizar from "../img/visualizar.png";

const Catalogo = () => {
  const [buscarEspecie, setBuscarEspecie] = useState("");
  const [especies, setEspecies] = useState([]);
  const [especieSeleccionada, setEspecieSeleccionada] = useState(null);

  const filtrarEspecies = () =>
    buscarEspecie
      ? especies.filter((especie) =>
          especie.common_name
            .toLowerCase()
            .includes(buscarEspecie.toLowerCase())
        )
      : especies;

  const agregarEspecie = () => {
    window.location.href = "/formularioEspecie";
  };

  const abrirDetalles = (especie) => {
    setEspecieSeleccionada(especie);
  };

  const cerrarSidebar = () => {
    setEspecieSeleccionada(null);
  };

  return (
    <div className="p-6 relative">
      <h1 className="text-3xl font-bold mb-6 text-green-800">
        Catálogo de Especies
      </h1>

      <div className="flex items-center gap-4 mb-6">
        <div className="relative flex-1">
          <input
            type="text"
            placeholder="Buscar especie"
            className="border border-gray-300 rounded p-2 pl-10 w-full focus:outline-none focus:ring-2 focus:ring-green-500"
            value={buscarEspecie}
            onChange={(e) => setBuscarEspecie(e.target.value)}
          />
          <img
            src={Buscar}
            alt="Buscar"
            className="absolute left-3 top-1/2 transform -translate-y-1/2 w-6 h-6 text-gray-400 pointer-events-none"
          />
        </div>
        <button
          className="flex items-center gap-2 bg-green-600 text-white font-bold px-4 py-2 rounded hover:bg-green-700"
          onClick={agregarEspecie}
        >
          <img src={Agregar} alt="Agregar" className="w-5 h-5" />
          Agregar Especie
        </button>
      </div>

      <div className="grid grid-cols-3 gap-6">
        {filtrarEspecies().map((especie) => (
          <div
            key={especie.id}
            className="bg-white shadow rounded overflow-hidden border border-green-200"
          >
            <img
              src={especie.image || "https://via.placeholder.com/150"}
              alt={especie.common_name}
              className="w-full h-40 object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-bold text-green-700">
                {especie.common_name}
              </h3>
              <p className="text-gray-600 text-sm mb-2 italic">
                {especie.scientific_name}
              </p>
              <button
                className="mt-2 flex items-center gap-2 bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
                onClick={() => abrirDetalles(especie)}
              >
                <img src={Visualizar} alt="Ver detalles" className="w-5 h-5" />
                Ver Detalles
              </button>
            </div>
          </div>
        ))}
      </div>

      {especieSeleccionada && (
        <div className="fixed top-0 left-0 h-full w-1/3 bg-white shadow-lg p-6 overflow-y-auto">
          <button
            className="text-red-600 font-bold mb-4 hover:underline"
            onClick={cerrarSidebar}
          >
            Cerrar
          </button>
          <h2 className="text-2xl font-bold text-green-800 mb-4">
            Detalles de la Especie
          </h2>
          <img
            src={especieSeleccionada.image || "https://via.placeholder.com/150"}
            alt={especieSeleccionada.common_name}
            className="w-full h-40 object-cover mb-4"
          />
          <p className="text-lg font-semibold">Nombre Común:</p>
          <p className="mb-4">
            {especieSeleccionada.common_name || "No especificado"}
          </p>

          <p className="text-lg font-semibold">Nombre Científico:</p>
          <p className="mb-4">
            {especieSeleccionada.scientific_name || "No especificado"}
          </p>

          <p className="text-lg font-semibold">Familia:</p>
          <p className="mb-4">
            {especieSeleccionada.family || "No especificado"}
          </p>

          <p className="text-lg font-semibold">Categorías:</p>
          <p className="mb-4">
            {especieSeleccionada.categories.length > 0
              ? especieSeleccionada.categories.join(", ")
              : "No especificado"}
          </p>

          <p className="text-lg font-semibold">Climas:</p>
          <p className="mb-4">
            {especieSeleccionada.climates.length > 0
              ? especieSeleccionada.climates.join(", ")
              : "No especificado"}
          </p>

          <p className="text-lg font-semibold">Género:</p>
          <p className="mb-4">
            {especieSeleccionada.genus || "No especificado"}
          </p>

          <p className="text-lg font-semibold">Descripción:</p>
          <p className="mb-4">
            {especieSeleccionada.description || "No especificado"}
          </p>

          <p className="text-lg font-semibold">Precio por kg:</p>
          <p className="mb-4">
            {especieSeleccionada.price_per_kg
              ? `$${especieSeleccionada.price_per_kg}`
              : "No especificado"}
          </p>

          <p className="text-lg font-semibold">Tipo de Semilla:</p>
          <p className="mb-4">
            {especieSeleccionada.seed_type || "No especificado"}
          </p>

          <p className="text-lg font-semibold">Características:</p>
          <ul className="mb-4 list-disc list-inside">
            <li>
              Color de Corteza:{" "}
              {especieSeleccionada.characteristics.barkColor ||
                "No especificado"}
            </li>
            <li>
              Altura Promedio:{" "}
              {especieSeleccionada.characteristics.averageHeight ||
                "No especificado"}
            </li>
          </ul>

          <p className="text-lg font-semibold">Fecha de Registro:</p>
          <p className="mb-4">
            {especieSeleccionada.registration_date || "No especificado"}
          </p>
        </div>
      )}

      {especieSeleccionada && (
        <div
          className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50"
          onClick={cerrarSidebar}
        ></div>
      )}
    </div>
  );
};

export default Catalogo;
