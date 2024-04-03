import { useNavigate } from "react-router-dom"
import MainMenu from "services/MainMenu"
import Uri from "services/Uri"
import Store from "store"
import { MainMenuActiveSection, RequestsSetAction } from "store/actions"
import Togglers from "store/togglers"
const UserMenuAdditionalItems = function ({ menuState, setMenuState }) {
  const navigate = useNavigate()

  const onClickHandlerSettings = function (ev) {
    ev.stopPropagation()
    setMenuState(!menuState)
    const currentWorkspace = Togglers.WorkspaceGetCurrent()
    let wsID = Togglers.WorkspaceGetActive()
    if (!currentWorkspace.has_subscription && wsID !== null) {
      Togglers.SwitchWorkspaceReset()
      Store.dispatch(
        RequestsSetAction("SwitchWorkspace", { id: wsID, navigate: navigate })
      )
      Store.dispatch(MainMenuActiveSection(MainMenu.settings()))
    } else {
      navigate(
        Uri.uSettings({ id: Store.getState().Workspace.currentWorkspaceID }),
        { replace: true }
      )
    }
  }

  return (
    <>
      <li>
        <button className="dropdown-item" onClick={onClickHandlerSettings}>
          Settings
        </button>
      </li>
      <li>
        <hr className="dropdown-divider" />
      </li>
    </>
  )
}

export default UserMenuAdditionalItems
