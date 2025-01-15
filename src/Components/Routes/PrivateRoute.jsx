import React, { useContext, useEffect } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";

const PrivateRoute = ({ element, roles }) => {
  const { user, loading, setPreviousPath } = useContext(AuthContext);
  const location = useLocation();

  useEffect(() => {
    if (roles && roles.includes(user?.permisos)) {
      setPreviousPath(location.pathname);
    }
  }, [user, roles, location, setPreviousPath]);

  if (loading) {
    return <div>Loading...</div>;
  }

  /*if (!user) {
    return <Navigate to="/login" state={{ from: location }} />;
  }*/
  if (!user) {
    return element; // Esto permitirá el acceso sin estar logueado
  }

  if (roles && !roles.includes(user.permisos)) {
    return <Navigate to="/unauthorized" />;
  }

  return element;
};

export default PrivateRoute;
