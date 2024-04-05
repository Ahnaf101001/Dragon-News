import { useContext } from "react";
import { AuthContext } from "../providers/AuthProviders";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute = ({ children }) => {

    const { user, loading } = useContext(AuthContext);

    const location = useLocation();
    console.log(location)

    if (loading) {
        return <span className="loading text-5xl loading-bars loading-lg"></span>;
    }

    if (user) {
        return children;
    }

    return <Navigate to='/login'></Navigate>;
};

export default PrivateRoute;