import React from "react";
import { Outlet, Navigate } from "react-router-dom";

type RouteType = {
    children?: JSX.Element,
    [x: string]: any;
}

const PrivateRoute = ({ children, ...rest }: RouteType) => {
  const token = JSON.parse(localStorage.getItem("user") as any);

  return (
    token ? <Outlet /> : <Navigate to="/login" />
  );
};

export default PrivateRoute;