import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

function TablaTratamientos(props) {
  const navigate = useNavigate();
  const [tratamientos, setTratamientos] = useState(props.tratamientos);

  useEffect(() => {
    setTratamientos(props.tratamientos);
  }, [props.tratamientos]);

  const irAEditar = (id) => {
    navigate(`/tratamientos/formulario/${id}`);
  };

  const eliminarTratamiento = (id) => {
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
        setTratamientos(
          tratamientos.filter((tratamiento) => tratamiento.id !== id)
        );
        Swal.fire(
          "Eliminado!",
          "El tratamiento ha sido eliminado correctamente.",
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
            <th className="py-3 px-6 text-left">Tipo de Tratamiento</th>
            <th className="py-3 px-6 text-left">Acciones</th>
          </tr>
        </thead>
        <tbody>
          {tratamientos.map((tratamiento, index) => (
            <tr
              key={index}
              className="border-b border-gray-200 hover:bg-gray-100"
            >
              <td className="py-3 px-6">{tratamiento.fechaInicio}</td>
              <td className="py-3 px-6">{tratamiento.codigoColecta}</td>
              <td className="py-3 px-6">{tratamiento.encargados}</td>
              <td className="py-3 px-6">{tratamiento.pesoLote}</td>
              <td className="py-3 px-6">{tratamiento.tipoTratamiento}</td>
              <td className="py-3 px-6 flex gap-2">
                <button
                  onClick={() => irAEditar(tratamiento.id)}
                  className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
                >
                  Editar
                </button>
                <button
                  onClick={() => eliminarTratamiento(tratamiento.id)}
                  className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                >
                  Eliminar
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {tratamientos.length === 0 && (
        <p className="text-center text-gray-500 py-4">
          No hay procesos de tratamiento disponibles.
        </p>
      )}
    </div>
  );
}

export default TablaTratamientos;
