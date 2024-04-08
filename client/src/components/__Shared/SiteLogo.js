import { ReactComponent as Logo } from "images/site-logo.svg"
import Uri from "services/Uri"
import { useNavigate } from "react-router-dom"

const SiteLogo = function ({ className = "logo mx-auto h-10 w-auto" }) {
  const navigate = useNavigate()

  const logoOnClickHandler = function () {
    navigate(Uri.uPersonal(), { replace: true })
  }

  return (
    <Logo
      data-testid="have-class-logo"
      className={className}
      onClick={logoOnClickHandler}
      style={{ cursor: "pointer" }}
    />
  )
}

export default SiteLogo
