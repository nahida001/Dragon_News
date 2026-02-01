import React, { use } from 'react';
import { AuthContext } from '../provider/AuthProvider';
import { Navigate, useLocation } from 'react-router';
import Loading from '../page/Loading';
const PrivateRoute = ({children}) => {
    const {user,loading}=use(AuthContext)
    const location=useLocation()
    console.log(location);
    console.log(user);
    if(loading){
       <Loading></Loading>
    }
    if(user && user?.email){
      return children
    }
    return <Navigate state={location.pathname} to="/auth/login"></Navigate>
   
};

export default PrivateRoute;