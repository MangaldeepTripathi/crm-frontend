import React from 'react'
import { Route, Navigate  } from 'react-router-dom'
import { DefaultLayout } from '../../layout/DefaultLayout';
const isAuth=true;
export const PrivateRoute = ({children, ...rest}) => {
 // return (
    {/* <Route render={()=> (isAuth?<DefaultLayout>{children}</DefaultLayout>: <Navigate to="/"/>)} /> */}
    return isAuth ? <DefaultLayout>{children}</DefaultLayout> : <Navigate to="/" />;

 // );
}
