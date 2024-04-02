import { Link, Navigate } from "react-router-dom"

import useQuery from "hooks/useQuery"
import Form from "components/Authentication/ResetPassword/Form"
import SiteLogo from "components/__Shared/SiteLogo"
import ResetPasswordToken from "utils/ResetPasswordToken"
import Uri from "services/Uri"

const ResetPassword = function () {
  const query = useQuery()

  const token = query.get("token")

  if (
    typeof token !== "string" ||
    token.length === 0 ||
    !ResetPasswordToken.isValid(token)
  ) {
    return <Navigate to={Uri.home()} replace={true} />
  }

  return (
    <>
      <div className="flex min-h-screen flex-col justify-center items-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm text-center">
          <SiteLogo />
          <h2 className="mt-5 text-2xl font-semibold tracking-tight">
            Create new password
          </h2>
          <p className="text-sm text-muted-foreground">
            Securely access your account by creating a new log in password
          </p>
        </div>
        <div className="mt-5 sm:mx-auto sm:w-full sm:max-w-sm">
          <Form requestToken={token} />

          <div className="mt-5 text-center text-sm text-muted-foreground">
            Already have an account?{" "}
            <Link
              className="font-semibold leading-6 text-primary hover:opacity-85"
              to={Uri.signIn()}
            >
              Sign In
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default ResetPassword
