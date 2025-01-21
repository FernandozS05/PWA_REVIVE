import React, { useState, useEffect, useCallback } from "react";
import Swal from "sweetalert2";
import TablaDistribucion from "./TablaDistribucion.jsx";
import axios from "../../config/axios.js";
import manejarError from "../../utils/Errores";
import Buscar from "../img/buscar.png";

function ListadoDistribucion() {
  const [buscarDistribucion, setBuscarDistribucion] = useState("");
  const [distribuciones, setDistribuciones] = useState([]);
  const [distribucionesFiltradas, setDistribucionesFiltradas] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  const consultarDistribuciones = useCallback(async () => {
    try {
      Swal.fire({
        title: "Consultando...",
        text: "Por favor, espere.",
        didOpen: () => Swal.showLoading(),
        allowOutsideClick: false,
      });
      const response = await axios.get("/distribuciones/");
      Swal.close();
      if (response.status === 200) {
        setDistribuciones(response.data);
        setDistribucionesFiltradas(response.data);
        setCurrentPage(1);
      }
    } catch (error) {
      Swal.close();
      manejarError(error);
    }
  }, []);

  useEffect(() => {
    consultarDistribuciones();
  }, [consultarDistribuciones]);

  const handleSearchChange = (e) => {
    const searchTerm = e.target.value.toLowerCase();
    setBuscarDistribucion(searchTerm);
    if (searchTerm === "") {
      setDistribucionesFiltradas(distribuciones);
    } else {
      setDistribucionesFiltradas(
        distribuciones.filter((distribucion) =>
          distribucion.codigoColecta.toLowerCase().includes(searchTerm)
        )
      );
    }
    setCurrentPage(1);
  };

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = distribucionesFiltradas.slice(
    indexOfFirstItem,
    indexOfLastItem
  );

  const totalPages = Math.ceil(distribucionesFiltradas.length / itemsPerPage);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className="p-6 relative">
      <h1 className="text-3xl font-bold mb-6 text-green-800">
        Distribuciones para Lotes
      </h1>
      <div className="relative flex-1 mb-6">
        <input
          type="text"
          placeholder="Buscar distribución"
          className="border border-gray-300 rounded p-2 pl-10 w-full focus:outline-none focus:ring-2 focus:ring-green-500"
          value={buscarDistribucion}
          onChange={handleSearchChange}
        />
        <img
          src={Buscar}
          alt="Buscar"
          className="absolute left-3 top-1/2 transform -translate-y-1/2 w-6 h-6 text-gray-400 pointer-events-none"
        />
      </div>
      <TablaDistribucion
        distribuciones={currentItems}
        actualizarDistribuciones={consultarDistribuciones}
      />
      <div className="flex justify-center mt-4">
        <nav>
          <ul className="flex space-x-2">
            {[...Array(totalPages).keys()].map((number) => (
              <li key={number}>
                <button
                  onClick={() => handlePageChange(number + 1)}
                  className={`px-3 py-1 rounded ${
                    currentPage === number + 1
                      ? "bg-green-600 text-white"
                      : "bg-gray-200"
                  }`}
                >
                  {number + 1}
                </button>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default ListadoDistribucion;
