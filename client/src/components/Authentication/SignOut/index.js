import { useEffect } from "react"
import { Navigate } from "react-router-dom"
import { useDispatch } from "react-redux"

import Auth from "services/Auth"
import Store from "store"
import Uri from "services/Uri"

const SignOut = function () {
  const dispatch = useDispatch()

  useEffect(
    function () {
      const Signed = Store.getState().Auth.signed
      if (Signed) {
        Auth.signOut()
      }
    },
    [dispatch]
  )

  return <Navigate to={`${Uri.signIn()}`} replace={true} />
}

export default SignOut
