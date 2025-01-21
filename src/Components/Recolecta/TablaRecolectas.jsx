import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

function TablaRecolectas(props) {
  const navigate = useNavigate();
  const [recolectas, setRecolectas] = useState(props.recolectas);

  useEffect(() => {
    setRecolectas(props.recolectas);
  }, [props.recolectas]);

  const irAEditar = (id) => {
    navigate(`/recolectas/formulario/${id}`);
  };

  const eliminarRecolecta = (id) => {
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
        setRecolectas(recolectas.filter((recolecta) => recolecta.id !== id));
        Swal.fire(
          "Eliminado!",
          "La recolecta ha sido eliminada correctamente.",
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
            <th className="py-3 px-6 text-left">Fecha de la colecta</th>
            <th className="py-3 px-6 text-left">Código de Colecta</th>
            <th className="py-3 px-6 text-left">Nombre de la especie</th>
            <th className="py-3 px-6 text-left">Tipo de semilla</th>
            <th className="py-3 px-6 text-left">GR colectados</th>
            <th className="py-3 px-6 text-left">Acciones</th>
          </tr>
        </thead>
        <tbody>
          {recolectas.map((recolecta, index) => (
            <tr
              key={index}
              className="border-b border-gray-200 hover:bg-gray-100"
            >
              <td className="py-3 px-6">{recolecta.fecha}</td>
              <td className="py-3 px-6">{recolecta.codigo}</td>
              <td className="py-3 px-6">{recolecta.nombreEspecie}</td>
              <td className="py-3 px-6">{recolecta.tipoSemilla}</td>
              <td className="py-3 px-6">{recolecta.grColectados}</td>
              <td className="py-3 px-6 flex gap-2">
                <button
                  onClick={() => irAEditar(recolecta.id)}
                  className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
                >
                  Editar
                </button>
                <button
                  onClick={() => eliminarRecolecta(recolecta.id)}
                  className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                >
                  Eliminar
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {recolectas.length === 0 && (
        <p className="text-center text-gray-500 py-4">
          No hay recolectas disponibles.
        </p>
      )}
    </div>
  );
}

export default TablaRecolectas;
