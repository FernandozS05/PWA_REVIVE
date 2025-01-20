import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

function TablaUsuarios(props) {
  const navigate = useNavigate();
  const [usuarios, setUsuarios] = useState(props.usuarios);

  useEffect(() => {
    setUsuarios(props.usuarios);
  }, [props.usuarios]);

  const getRolClass = (usuario) => {
    switch (usuario.permisos) {
      case "administrador":
        return "bg-blue-500 text-white px-2 py-1 rounded";
      case "moderador":
        return "bg-green-500 text-white px-2 py-1 rounded";
      case "colaborador":
        return "bg-gray-500 text-white px-2 py-1 rounded";
      default:
        return "bg-gray-300 text-black px-2 py-1 rounded";
    }
  };

  const irAEditar = (id) => {
    navigate(`/usuarios/formulario/${id}`);
  };

  const eliminarUsuario = (id) => {
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
        setUsuarios(usuarios.filter((usuario) => usuario.id !== id));
        Swal.fire(
          "Eliminado!",
          "El usuario ha sido eliminado correctamente.",
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
            <th className="py-3 px-6 text-left">Nombre</th>
            <th className="py-3 px-6 text-left">Correo</th>
            <th className="py-3 px-6 text-left">Rol</th>
            <th className="py-3 px-6 text-left">Tipo</th>
            <th className="py-3 px-6 text-left">Acciones</th>
          </tr>
        </thead>
        <tbody>
          {usuarios.map((usuario, index) => (
            <tr
              key={index}
              className="border-b border-gray-200 hover:bg-gray-100"
            >
              <td className="py-3 px-6">{usuario.nombre}</td>
              <td className="py-3 px-6">{usuario.correo}</td>
              <td className="py-3 px-6">
                <span className={getRolClass(usuario)}>{usuario.permisos}</span>
              </td>
              <td className="py-3 px-6">{usuario.tipo}</td>
              <td className="py-3 px-6 flex gap-2">
                <button
                  onClick={() => irAEditar(usuario.id)}
                  className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
                >
                  Editar
                </button>
                <button
                  onClick={() => eliminarUsuario(usuario.id)}
                  className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                >
                  Eliminar
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {usuarios.length === 0 && (
        <p className="text-center text-gray-500 py-4">
          No hay usuarios disponibles.
        </p>
      )}
    </div>
  );
}

export default TablaUsuarios;
