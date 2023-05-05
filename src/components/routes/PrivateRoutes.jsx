import React, { useContext } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';
import ProgressBar from 'react-bootstrap/ProgressBar';

const PrivateRoutes = ({ children }) => {
    const { user, loading } = useContext(AuthContext)
    const location = useLocation()
    if (loading) {
        return   <ProgressBar variant="info" now={20} />;
      }
    if (user) {
        return children;
    }
    return <Navigate state={{from: location}} to='/login' replace></Navigate>;
};

export default PrivateRoutes;