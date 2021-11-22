import { Navigate } from 'react-router';

const PrivateRoute = ({ children, isLoading }) => {
  return isLoading ? children : <Navigate to="/" />;
};

export default PrivateRoute;
