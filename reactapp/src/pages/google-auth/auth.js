import React from "react";
import { Navigate, Route } from "react-router-dom";

function ProtectedRoute({ Component: Component, ...restOfProps }) {
  const isAuthenticated = false;
  console.log("this", isAuthenticated);

  return (
    <Route
      {...restOfProps}
      render={(props) =>
        isAuthenticated ? <Component {...props} /> : <Navigate to="/" />
      }
    />
  );
}

export default ProtectedRoute;