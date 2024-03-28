import { Link, Navigate } from "react-router-dom"
import { useSelector } from "react-redux"

import Uri from "services/Uri"
import Form from "components/Authentication/SignIn/Form"
import ForgottenPasswordModal from "components/Authentication/ForgottenPasswordModal"

import SiteLogo from "components/__Shared/SiteLogo"

const SignIn = function () {
  const ngn = {
    modal: {}
  }

  const Signed = useSelector((state) => state.Auth.signed)

  return Signed ? (
    <Navigate to={Uri.u()} replace={true} />
  ) : (
    <>
      <ForgottenPasswordModal ngn={ngn} />

      <div className="flex min-h-screen flex-col justify-center items-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <SiteLogo />
          <h2 className="mt-5 text-center text-3xl font-bold leading-9 tracking-tight text-gray-900">
            Sign in to your account
          </h2>
        </div>
        <div className="mt-5 sm:mx-auto sm:w-full sm:max-w-sm">
          <Form ngn={ngn} />
          <div className="mt-5 text-center text-sm text-gray-500">
            Don't have an account?{" "}
            <Link
              className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
              to={Uri.signUp()}
            >
              Create an account
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default SignIn
