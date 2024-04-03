import { ReactComponent as Logo } from "images/site-logo.svg"
import { Link, useNavigate } from "react-router-dom"
import CreateWorkspace from "components/UserArea/CreateWorkspace"
import { RequestsSetAction } from "store/actions"
import Uri from "services/Uri"
import Store from "store"
import Togglers from "store/togglers"

const CreateWorkspaceWrapper = function () {
  const navigate = useNavigate()
  const createWorkspaceRequired = Store.getState().CreateWorkspace.required

  const onClickHandlerLogo = function (ev) {
    ev.stopPropagation()
    const currentWorkspace = Togglers.WorkspaceGetCurrent()
    let wsID = Togglers.WorkspaceGetActive()
    if (!currentWorkspace.has_subscription && wsID !== null) {
      Store.dispatch(
        RequestsSetAction("SwitchWorkspace", { id: wsID, navigate: navigate })
      )
    }
    //Togglers.SwitchWorkspaceReset()
    //Store.dispatch(CreateWorkspaceSetNotRequired())
    //Store.dispatch(CreateWorkspaceSetNoInactive())
    //Store.dispatch(CreateWorkspaceSetStep(1))
    //Store.dispatch(RequestsSetAction("SwitchWorkspace", { id: wsId, navigate: navigate }))
    //navigate.replace(Uri.uPersonal({ id: wsId }))
  }
  let logo
  if (createWorkspaceRequired) {
    logo = (
      <div className="logo mx-auto">
        <Logo />
      </div>
    )
  } else {
    logo = (
      <Link to={Uri.u()} onClick={onClickHandlerLogo} className="logo mx-auto">
        <Logo />
      </Link>
    )
  }

  return <CreateWorkspace logo={logo} />
}

export default CreateWorkspaceWrapper
