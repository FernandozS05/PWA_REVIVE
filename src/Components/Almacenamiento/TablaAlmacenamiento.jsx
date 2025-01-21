import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

function TablaAlmacenamiento(props) {
  const navigate = useNavigate();
  const [almacenamientos, setAlmacenamientos] = useState(props.almacenamientos);

  useEffect(() => {
    setAlmacenamientos(props.almacenamientos);
  }, [props.almacenamientos]);

  const irAEditar = (id) => {
    navigate(`/almacenamientos/formulario/${id}`);
  };

  const eliminarAlmacenamiento = (id) => {
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
        setAlmacenamientos(
          almacenamientos.filter((almacenamiento) => almacenamiento.id !== id)
        );
        Swal.fire(
          "Eliminado!",
          "El almacenamiento ha sido eliminado correctamente.",
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
            <th className="py-3 px-6 text-left">Peso del lote en GR</th>
            <th className="py-3 px-6 text-left">Tipo de almacenamiento</th>
            <th className="py-3 px-6 text-left">Acciones</th>
          </tr>
        </thead>
        <tbody>
          {almacenamientos.map((almacenamiento, index) => (
            <tr
              key={index}
              className="border-b border-gray-200 hover:bg-gray-100"
            >
              <td className="py-3 px-6">{almacenamiento.fecha}</td>
              <td className="py-3 px-6">{almacenamiento.codigo}</td>
              <td className="py-3 px-6">{almacenamiento.pesoGr}</td>
              <td className="py-3 px-6">{almacenamiento.tipoAlmacenamiento}</td>
              <td className="py-3 px-6 flex gap-2">
                <button
                  onClick={() => irAEditar(almacenamiento.id)}
                  className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
                >
                  Editar
                </button>
                <button
                  onClick={() => eliminarAlmacenamiento(almacenamiento.id)}
                  className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                >
                  Eliminar
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {almacenamientos.length === 0 && (
        <p className="text-center text-gray-500 py-4">
          No hay lotes almacenados disponibles.
        </p>
      )}
    </div>
  );
}

export default TablaAlmacenamiento;
