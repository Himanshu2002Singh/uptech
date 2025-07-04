import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';
import { RootState } from './components/redux/store';

interface ProtectedRouteProps {
  adminOnly?: boolean;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ adminOnly = false }) => {
  const { userInfo } = useSelector((state: RootState) => state.auth);

  if (!userInfo) {
    return <Navigate to="/login" replace />;
  }

  if (adminOnly && !userInfo.is_admin) {
    return <Navigate to="/" replace />;
  }

  return <Outlet />;
};

export default ProtectedRoute;