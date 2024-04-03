import DropDownMenuCloser from "events/DropDownMenuCloser"
import UserMenu from "./__Shared/UserMenu"

const CreateWorkspace = function ({ logo }) {
  const onClickHandler = function () {
    // this will close all drop-down menus subscribed to this event emitter
    DropDownMenuCloser.next(null)
  }
  return (
    <div
      className="relative flex min-h-screen flex-col bg-background"
      onClick={onClickHandler}
    >
      <UserMenu />
    </div>
  )
}
export default CreateWorkspace
