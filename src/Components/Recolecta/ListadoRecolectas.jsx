import React, { useState, useEffect, useCallback } from "react";
import Swal from "sweetalert2";
import TablaRecolectas from "./TablaRecolectas.jsx";
import axios from "../../config/axios.js";
import manejarError from "../../utils/Errores";
import { useNavigate } from "react-router-dom";
import Buscar from "../img/buscar.png";
import Agregar from "../img/agregar.png";

function ListadoRecolectas() {
  const navigate = useNavigate();
  const [buscarRecolecta, setBuscarRecolecta] = useState("");
  const [recolectas, setRecolectas] = useState([]);
  const [recolectasFiltradas, setRecolectasFiltradas] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  const consultarRecolectas = useCallback(async () => {
    try {
      Swal.fire({
        title: "Consultando...",
        text: "Por favor, espere.",
        didOpen: () => Swal.showLoading(),
        allowOutsideClick: false,
      });
      const response = await axios.get("/recolectas/");
      Swal.close();
      if (response.status === 200) {
        setRecolectas(response.data);
        setRecolectasFiltradas(response.data);
        setCurrentPage(1);
      }
    } catch (error) {
      Swal.close();
      manejarError(error, navigate);
    }
  }, [navigate]);

  useEffect(() => {
    consultarRecolectas();
  }, [consultarRecolectas]);

  const handleSearchChange = (e) => {
    const searchTerm = e.target.value.toLowerCase();
    if (searchTerm === "") {
      setRecolectasFiltradas(recolectas);
    } else {
      setRecolectasFiltradas(
        recolectas.filter((recolecta) =>
          recolecta.codigo.toLowerCase().includes(searchTerm)
        )
      );
    }
    setCurrentPage(1);
  };

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = recolectasFiltradas.slice(indexOfFirstItem, indexOfLastItem);

  const totalPages = Math.ceil(recolectasFiltradas.length / itemsPerPage);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const agregarRecolecta = () => {
    window.location.href = "/formularioRecolecta";
  };

  return (
    <div className="p-6 relative">
      <h1 className="text-3xl font-bold mb-6 text-green-800">Fichas de Colecta</h1>
      <div className="flex items-center gap-4 mb-6">
        <div className="relative flex-1">
          <input
            type="text"
            placeholder="Buscar recolecta"
            className="border border-gray-300 rounded p-2 pl-10 w-full focus:outline-none focus:ring-2 focus:ring-green-500"
            value={buscarRecolecta}
            onChange={handleSearchChange}
          />
          <img
            src={Buscar}
            alt="Buscar"
            className="absolute left-3 top-1/2 transform -translate-y-1/2 w-6 h-6 text-gray-400 pointer-events-none"
          />
        </div>
        <button
          className="flex items-center gap-2 bg-green-600 text-white font-bold px-4 py-2 rounded hover:bg-green-700"
          onClick={agregarRecolecta}
        >
          <img src={Agregar} alt="Agregar" className="w-5 h-5" />
          Agregar Recolecta
        </button>
      </div>
      <TablaRecolectas recolectas={currentItems} actualizarRecolectas={consultarRecolectas} />
      <div className="flex justify-center mt-4">
        <nav>
          <ul className="flex space-x-2">
            {[...Array(totalPages).keys()].map((number) => (
              <li key={number}>
                <button
                  onClick={() => handlePageChange(number + 1)}
                  className={`px-3 py-1 rounded ${
                    currentPage === number + 1 ? "bg-green-600 text-white" : "bg-gray-200"
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

export default ListadoRecolectas;
