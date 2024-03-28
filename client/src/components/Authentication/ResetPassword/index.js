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
      <div className="container-fluid forgot-password-page">
        <div className="container">
          <div className="page-outline">
            <SiteLogo />

            <div className="form-box">
              <div className="box-content">
                <h1>Create new password</h1>

                <p className="text-muted">
                  Securely access your account by creating a new log in password
                </p>

                <Form requestToken={token} />

                <div className="mb-3 text-bf">
                  Already have an account?{" "}
                  <Link to={Uri.signIn()}>Sign In</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ResetPassword
