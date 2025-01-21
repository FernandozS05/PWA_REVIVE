import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

function TablaDistribucion({ distribuciones }) {
  const navigate = useNavigate();
  const [datosDistribucion, setDatosDistribucion] = useState(distribuciones);

  useEffect(() => {
    setDatosDistribucion(distribuciones);
  }, [distribuciones]);

  const irAEditar = (id) => {
    navigate(`/distribuciones/formulario/${id}`);
  };

  const eliminarDistribucion = (id) => {
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
        setDatosDistribucion(
          datosDistribucion.filter((item) => item.id !== id)
        );
        Swal.fire(
          "Eliminado!",
          "El registro de distribución ha sido eliminado correctamente.",
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
            <th className="py-3 px-6 text-left">Fecha de salida</th>
            <th className="py-3 px-6 text-left">Código de Colecta</th>
            <th className="py-3 px-6 text-left">Encargados</th>
            <th className="py-3 px-6 text-left">Peso del lote en GR</th>
            <th className="py-3 px-6 text-left">Destino</th>
            <th className="py-3 px-6 text-left">Acciones</th>
          </tr>
        </thead>
        <tbody>
          {datosDistribucion.map((distribucion, index) => (
            <tr
              key={index}
              className="border-b border-gray-200 hover:bg-gray-100"
            >
              <td className="py-3 px-6">{distribucion.fechaSalida}</td>
              <td className="py-3 px-6">{distribucion.codigoColecta}</td>
              <td className="py-3 px-6">{distribucion.encargados}</td>
              <td className="py-3 px-6">{distribucion.pesoLote}</td>
              <td className="py-3 px-6">{distribucion.destino}</td>
              <td className="py-3 px-6 flex gap-2">
                <button
                  onClick={() => irAEditar(distribucion.id)}
                  className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
                >
                  Editar
                </button>
                <button
                  onClick={() => eliminarDistribucion(distribucion.id)}
                  className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                >
                  Eliminar
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {datosDistribucion.length === 0 && (
        <p className="text-center text-gray-500 py-4">
          No hay registros de distribución disponibles.
        </p>
      )}
    </div>
  );
}

export default TablaDistribucion;
