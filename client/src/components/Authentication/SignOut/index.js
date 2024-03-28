import { useEffect } from "react"
import { Navigate } from "react-router-dom"
import { useDispatch } from "react-redux"

import Comm from "services/Comm"
import Auth from "services/Auth"
import Store from "store"
import Uri from "services/Uri"
import Catch401 from "middlewares/Catch401"

const SignOut = function () {
  const dispatch = useDispatch()

  useEffect(
    function () {
      const Signed = Store.getState().Auth.signed

      if (Signed) {
        Comm.request({
          url: Uri.sessionAuth(),
          method: "delete"
        })
          .then((response) => {
            //console.dir(response)

            Comm.request({
              url: Uri.session(),
              method: "get"
            })
              .then(function (res) {
                // console.log(res)
              })
              .catch(
                Catch401((error) => {
                  // console.log(error)
                })
              )
          })
          .catch((error) => {
            //console.dir(error)
          })

        Auth.signOut()
      }
    },
    [dispatch]
  )

  return <Navigate to={`${Uri.signIn()}`} replace={true} />
}

export default SignOut
