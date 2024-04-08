import { ReactComponent as Logo } from "images/site-logo.svg"
import Uri from "services/Uri"
import { useNavigate } from "react-router-dom"

const SiteLogo = function () {
  const navigate = useNavigate()

  const logoOnClickHandler = function () {
    navigate(Uri.uDefault(), { replace: true })
  }

  return (
    <div
      className="flex flex-row gap-2 items-center cursor-pointer justify-center"
      onClick={logoOnClickHandler}
    >
      <Logo data-testid="have-class-logo" className="logo h-6 w-6" />
      <span className="text-lg font-bold">Listify</span>
    </div>
  )
}

export default SiteLogo
