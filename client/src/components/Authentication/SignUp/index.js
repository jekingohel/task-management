import { useSelector } from "react-redux"
import { Link, Navigate } from "react-router-dom"

import Form from "components/Authentication/SignUp/Form"
import SiteLogo from "components/__Shared/SiteLogo"
import Uri from "services/Uri"

const SignUp = function () {
  const Signed = useSelector((state) => state.Auth.signed)

  return Signed ? (
    <Navigate to={Uri.u()} replace={true} />
  ) : (
    <div className="flex min-h-screen flex-col justify-center items-center px-6 py-12 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <SiteLogo />
        <h2 className="mt-5 text-center text-3xl font-bold leading-9 tracking-tight text-gray-900">
          Create a account
        </h2>
      </div>
      <div className="mt-5 sm:mx-auto sm:w-full sm:max-w-sm">
        <Form />
        <div className="mt-5 text-center text-sm text-gray-500">
          Already have an account?{" "}
          <Link
            className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
            to={Uri.signIn()}
          >
            Sign In
          </Link>
        </div>
      </div>
    </div>
  )
}

export default SignUp
