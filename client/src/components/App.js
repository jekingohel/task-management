import { Navigate, Route, Routes, useNavigate } from "react-router-dom"
import { useSelector } from "react-redux"

import Uri from "services/Uri"
import History from "services/History"
import Offline from "components/Errors/Offline"

import ResetPassword from "components/Authentication/ResetPassword"
import ResetPasswordSuccess from "components/Authentication/ResetPasswordSuccess"
import SignIn from "components/Authentication/SignIn"
import SignUp from "components/Authentication/SignUp"
import SignOut from "components/Authentication/SignOut"

import UserArea from "components/UserArea"
import AuthProtectedRoute from "components/__Shared/AuthProtectedRoute"
import ErrorMessageModal from "components/__Shared/Modals/ErrorMessageModal"

import "init"

const App = function () {
  const InitDone = useSelector((state) => state.Init.done)

  const navigate = useNavigate()

  // redefinition native replace method
  History.replace = (url, state) => {
    navigate(url, { replace: true, state })
  }
  return InitDone ? (
    <>
      <ErrorMessageModal />
      <Routes>
        {/* -------------------------------------------------------------------------------- */}
        {/* Offline Area */}
        <Route path={Uri.offline()} element={<Offline />} />

        {/* -------------------------------------------------------------------------------- */}
        {/* User Restricted Area */}
        <Route
          path={`${Uri.u()}/*`}
          element={<AuthProtectedRoute component={UserArea} />}
        />

        {/* -------------------------------------------------------------------------------- */}
        {/* User Authentication (incl. external Services) */}
        <Route path={Uri.signIn()} element={<SignIn />} />
        <Route path={Uri.signUp()} element={<SignUp />} />
        <Route path={Uri.signOut()} element={<SignOut />} />
        <Route path={Uri.resetPassword()} element={<ResetPassword />} />
        <Route
          path={Uri.resetPasswordSuccess()}
          element={<ResetPasswordSuccess />}
        />

        {/* -------------------------------------------------------------------------------- */}
        {/* Go to default on no match found */}
        <Route path="*" element={<Navigate to={Uri.u()} replace={true} />} />
      </Routes>
    </>
  ) : null
}

export default App
