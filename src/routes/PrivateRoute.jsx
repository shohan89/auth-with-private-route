import { useContext } from 'react';
import { Navigate } from 'react-router';
import { AuthContext } from '../providers/AuthProvider';

const PrivateRoute = ({ children }) => {
    const {user, loading} = useContext(AuthContext);

    // checking loading state
    if(loading){
        return <span className="loading loading-spinner text-primary"></span>;
    }
    // checking if user is logged in then allow to visit the route
    if(user){
        return children;
    }
    // else redirect to login page
    return <Navigate to='/login'></Navigate>
};

export default PrivateRoute;