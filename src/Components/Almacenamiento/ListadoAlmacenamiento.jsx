import React, { useState, useEffect, useCallback } from "react";
import Swal from "sweetalert2";
import TablaAlmacenamiento from "./TablaAlmacenamiento.jsx";
import axios from "../../config/axios.js";
import manejarError from "../../utils/Errores";
import Buscar from "../img/buscar.png";

function ListadoAlmacenamiento() {
  const [buscarAlmacenamiento, setBuscarAlmacenamiento] = useState("");
  const [almacenamientos, setAlmacenamientos] = useState([]);
  const [almacenamientosFiltrados, setAlmacenamientosFiltrados] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  const consultarAlmacenamientos = useCallback(async () => {
    try {
      Swal.fire({
        title: "Consultando...",
        text: "Por favor, espere.",
        didOpen: () => Swal.showLoading(),
        allowOutsideClick: false,
      });
      const response = await axios.get("/almacenamientos/");
      Swal.close();
      if (response.status === 200) {
        setAlmacenamientos(response.data);
        setAlmacenamientosFiltrados(response.data);
        setCurrentPage(1);
      }
    } catch (error) {
      Swal.close();
      manejarError(error);
    }
  }, []);

  useEffect(() => {
    consultarAlmacenamientos();
  }, [consultarAlmacenamientos]);

  const handleSearchChange = (e) => {
    const searchTerm = e.target.value.toLowerCase();
    if (searchTerm === "") {
      setAlmacenamientosFiltrados(almacenamientos);
    } else {
      setAlmacenamientosFiltrados(
        almacenamientos.filter((almacenamiento) =>
          almacenamiento.codigo.toLowerCase().includes(searchTerm)
        )
      );
    }
    setCurrentPage(1);
  };

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = almacenamientosFiltrados.slice(
    indexOfFirstItem,
    indexOfLastItem
  );

  const totalPages = Math.ceil(almacenamientosFiltrados.length / itemsPerPage);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className="p-6 relative">
      <h1 className="text-3xl font-bold mb-6 text-green-800">
        Almacenamiento de Lotes
      </h1>
      <div className="flex items-center gap-4 mb-6">
        <div className="relative flex-1">
          <input
            type="text"
            placeholder="Buscar almacenamiento"
            className="border border-gray-300 rounded p-2 pl-10 w-full focus:outline-none focus:ring-2 focus:ring-green-500"
            value={buscarAlmacenamiento}
            onChange={handleSearchChange}
          />
          <img
            src={Buscar}
            alt="Buscar"
            className="absolute left-3 top-1/2 transform -translate-y-1/2 w-6 h-6 text-gray-400 pointer-events-none"
          />
        </div>
      </div>
      <TablaAlmacenamiento
        almacenamientos={currentItems}
        actualizarAlmacenamientos={consultarAlmacenamientos}
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

export default ListadoAlmacenamiento;
