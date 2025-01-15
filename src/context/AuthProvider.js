import React from 'react';
import { AuthProvider } from './AuthContext';
import { useNavigate } from 'react-router-dom';

const AuthProviderWithNavigation = ({ children }) => {
  const navigate = useNavigate();

  return (
    <AuthProvider navigate={navigate}>
      {children}
    </AuthProvider>
  );
};

export default AuthProviderWithNavigation;
