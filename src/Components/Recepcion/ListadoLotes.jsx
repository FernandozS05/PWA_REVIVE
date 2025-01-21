import React, { useState, useEffect, useCallback } from "react";
import Swal from "sweetalert2";
import TablaLotes from "./TablaLotes.jsx";
import axios from "../../config/axios.js";
import manejarError from "../../utils/Errores";
import { useNavigate } from "react-router-dom";
import Buscar from "../img/buscar.png";
import Agregar from "../img/agregar.png";

function ListadoLotes() {
  const navigate = useNavigate();
  const [buscarLote, setBuscarLote] = useState("");
  const [lotes, setLotes] = useState([]);
  const [lotesFiltrados, setLotesFiltrados] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  const consultarLotes = useCallback(async () => {
    try {
      Swal.fire({
        title: "Consultando...",
        text: "Por favor, espere.",
        didOpen: () => Swal.showLoading(),
        allowOutsideClick: false,
      });
      const response = await axios.get("/lotes/");
      Swal.close();
      if (response.status === 200) {
        setLotes(response.data);
        setLotesFiltrados(response.data);
        setCurrentPage(1);
      }
    } catch (error) {
      Swal.close();
      manejarError(error, navigate);
    }
  }, [navigate]);

  useEffect(() => {
    consultarLotes();
  }, [consultarLotes]);

  const handleSearchChange = (e) => {
    const searchTerm = e.target.value.toLowerCase();
    if (searchTerm === "") {
      setLotesFiltrados(lotes);
    } else {
      setLotesFiltrados(
        lotes.filter((lote) =>
          lote.codigoColecta.toLowerCase().includes(searchTerm)
        )
      );
    }
    setCurrentPage(1);
  };

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = lotesFiltrados.slice(indexOfFirstItem, indexOfLastItem);

  const totalPages = Math.ceil(lotesFiltrados.length / itemsPerPage);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const agregarLote = () => {
    window.location.href = "/formularioLotes";
  };

  return (
    <div className="p-6 relative">
      <h1 className="text-3xl font-bold mb-6 text-green-800">
        Lotes de Semillas
      </h1>
      <div className="flex items-center gap-4 mb-6">
        <div className="relative flex-1">
          <input
            type="text"
            placeholder="Buscar lote"
            className="border border-gray-300 rounded p-2 pl-10 w-full focus:outline-none focus:ring-2 focus:ring-green-500"
            value={buscarLote}
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
          onClick={agregarLote}
        >
          <img src={Agregar} alt="Agregar" className="w-5 h-5" />
          Agregar Lote
        </button>
      </div>
      <TablaLotes lotes={currentItems} actualizarLotes={consultarLotes} />
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

export default ListadoLotes;
