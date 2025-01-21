import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

function TablaBeneficiado(props) {
  const navigate = useNavigate();
  const [beneficiados, setBeneficiados] = useState(props.beneficiados);

  useEffect(() => {
    setBeneficiados(props.beneficiados);
  }, [props.beneficiados]);

  const irAEditar = (id) => {
    navigate(`/beneficiado/formulario/${id}`);
  };

  const eliminarBeneficiado = (id) => {
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
        setBeneficiados(
          beneficiados.filter((beneficiado) => beneficiado.id !== id)
        );
        Swal.fire(
          "Eliminado!",
          "El beneficiado ha sido eliminado correctamente.",
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
            <th className="py-3 px-6 text-left">Tiempo requerido</th>
            <th className="py-3 px-6 text-left">Encargados</th>
            <th className="py-3 px-6 text-left">Peso final del lote en GR</th>
            <th className="py-3 px-6 text-left">Acciones</th>
          </tr>
        </thead>
        <tbody>
          {beneficiados.map((beneficiado, index) => (
            <tr
              key={index}
              className="border-b border-gray-200 hover:bg-gray-100"
            >
              <td className="py-3 px-6">{beneficiado.fechaInicio}</td>
              <td className="py-3 px-6">{beneficiado.codigoColecta}</td>
              <td className="py-3 px-6">{beneficiado.tiempoRequerido}</td>
              <td className="py-3 px-6">{beneficiado.encargados}</td>
              <td className="py-3 px-6">{beneficiado.pesoFinalGr}</td>
              <td className="py-3 px-6 flex gap-2">
                <button
                  onClick={() => irAEditar(beneficiado.id)}
                  className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
                >
                  Editar
                </button>
                <button
                  onClick={() => eliminarBeneficiado(beneficiado.id)}
                  className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                >
                  Eliminar
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {beneficiados.length === 0 && (
        <p className="text-center text-gray-500 py-4">
          No hay procesos de beneficiado disponibles.
        </p>
      )}
    </div>
  );
}

export default TablaBeneficiado;
