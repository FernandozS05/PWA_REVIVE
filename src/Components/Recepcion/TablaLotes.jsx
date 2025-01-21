import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

function TablaLotes(props) {
  const navigate = useNavigate();
  const [lotes, setLotes] = useState(props.lotes);

  useEffect(() => {
    setLotes(props.lotes);
  }, [props.lotes]);

  const irAEditar = (id) => {
    navigate(`/lotes/formulario/${id}`);
  };

  const eliminarLote = (id) => {
    Swal.fire({
      title: "¿Estás seguro?",
      text: "¡No podrás revertir esta acción!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Sí, eliminar",
      cancelButtonText: "Cancelar",
    }).then((result) => {
      if (result.isConfirmed) {
        setLotes(lotes.filter((lote) => lote.id !== id));
        Swal.fire(
          "Eliminado!",
          "El lote ha sido eliminado correctamente.",
          "success"
        );
      }
    });
  };

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white border border-gray-200 shadow-md rounded-lg">
        <thead className="bg-green-600 text-white">
          <tr>
            <th className="py-3 px-6 text-left">Fecha</th>
            <th className="py-3 px-6 text-left">Código de Colecta</th>
            <th className="py-3 px-6 text-left">Nombre de la especie</th>
            <th className="py-3 px-6 text-left">Estado</th>
            <th className="py-3 px-6 text-left">Peso del Lote en GR</th>
            <th className="py-3 px-6 text-left">Acciones</th>
          </tr>
        </thead>
        <tbody>
          {lotes.map((lote, index) => (
            <tr
              key={index}
              className="border-b border-gray-200 hover:bg-gray-100"
            >
              <td className="py-3 px-6">{lote.fecha}</td>
              <td className="py-3 px-6">{lote.codigoColecta}</td>
              <td className="py-3 px-6">{lote.nombreEspecie}</td>
              <td className="py-3 px-6">Recepción</td>
              <td className="py-3 px-6">{lote.pesoLote}</td>
              <td className="py-3 px-6 flex gap-2">
                <button
                  onClick={() => irAEditar(lote.id)}
                  className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
                >
                  Editar
                </button>
                <button
                  onClick={() => eliminarLote(lote.id)}
                  className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                >
                  Eliminar
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {lotes.length === 0 && (
        <p className="text-center text-gray-500 py-4">
          No hay lotes disponibles.
        </p>
      )}
    </div>
  );
}

export default TablaLotes;
