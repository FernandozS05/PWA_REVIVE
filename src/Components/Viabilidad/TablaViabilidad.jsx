import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

function TablaViabilidad(props) {
  const navigate = useNavigate();
  const [viabilidades, setViabilidades] = useState(props.viabilidades);

  useEffect(() => {
    setViabilidades(props.viabilidades);
  }, [props.viabilidades]);

  const irAEditar = (id) => {
    navigate(`/viabilidad/formulario/${id}`);
  };

  const eliminarViabilidad = (id) => {
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
        setViabilidades(
          viabilidades.filter((viabilidad) => viabilidad.id !== id)
        );
        Swal.fire(
          "Eliminado!",
          "El registro de viabilidad ha sido eliminado correctamente.",
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
            <th className="py-3 px-6 text-left">Fecha de inicio</th>
            <th className="py-3 px-6 text-left">Código de Colecta</th>
            <th className="py-3 px-6 text-left">Encargados</th>
            <th className="py-3 px-6 text-left">Peso del lote en GR</th>
            <th className="py-3 px-6 text-left">Porcentaje de viabilidad</th>
            <th className="py-3 px-6 text-left">Acciones</th>
          </tr>
        </thead>
        <tbody>
          {viabilidades.map((viabilidad, index) => (
            <tr
              key={index}
              className="border-b border-gray-200 hover:bg-gray-100"
            >
              <td className="py-3 px-6">{viabilidad.fechaInicio}</td>
              <td className="py-3 px-6">{viabilidad.codigoColecta}</td>
              <td className="py-3 px-6">{viabilidad.encargados}</td>
              <td className="py-3 px-6">{viabilidad.pesoLote}</td>
              <td className="py-3 px-6">{viabilidad.porcentajeViabilidad}%</td>
              <td className="py-3 px-6 flex gap-2">
                <button
                  onClick={() => irAEditar(viabilidad.id)}
                  className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
                >
                  Editar
                </button>
                <button
                  onClick={() => eliminarViabilidad(viabilidad.id)}
                  className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                >
                  Eliminar
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {viabilidades.length === 0 && (
        <p className="text-center text-gray-500 py-4">
          No hay procesos de viabilidad disponibles.
        </p>
      )}
    </div>
  );
}

export default TablaViabilidad;
