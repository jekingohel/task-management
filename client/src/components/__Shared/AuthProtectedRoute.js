import React from "react"
import { Navigate } from "react-router-dom"

import Uri from "services/Uri"
import { useSelector } from "react-redux"

const AuthProtectedRoute = ({ component: Component, ...rest }) => {
  const Signed = useSelector((state) => state.Auth.signed)

  if (Signed) {
    return <Component />
  }

  const redirectTo = {
    pathname: Uri.signIn(),
    state: {
      from: rest.location
    }
  }

  return <Navigate to={redirectTo} replace={true} />
}

export default AuthProtectedRoute
