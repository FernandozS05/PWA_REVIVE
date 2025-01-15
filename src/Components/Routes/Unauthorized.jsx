import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";

const Unauthorized = () => {
  const navigate = useNavigate();
  const { previousPath } = useContext(AuthContext);

  const handleGoBack = () => {
    navigate(previousPath || "/");
  };

  return (
    <div>
      <h1>Sin autorización</h1>
      <p>No tiene los permisos necesarios para visualizar esta página.</p>
      <button onClick={handleGoBack}>Volver</button>
    </div>
  );
};

export default Unauthorized;
