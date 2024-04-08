import DropDownMenuCloser from "events/DropDownMenuCloser"
import {
  DropDownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger
} from "components/__Shared/DropdownMenu"
import { Link } from "react-router-dom"
import Uri from "services/Uri"
import Avatar from "./Avatar"
import Hello from "./Hello"

const UserNav = function () {
  const onClickHandler = function () {
    // this will close all drop-down menus subscribed to this event emitter
    DropDownMenuCloser.next(null)
  }
  return (
    <DropDownMenu>
      <DropdownMenuTrigger onClick={onClickHandler}>
        <Avatar />
      </DropdownMenuTrigger>
      <DropdownMenuContent className="p-1 rounded-sm bg-white">
        <Link
          to=""
          className="text-sm text-gray-700 block px-4 py-2 text-sm hover:bg-accent rounded-sm focus:bg-accent focus:text-accent-foreground"
        >
          Settings
        </Link>
        <Link
          to={Uri.signOut()}
          className="text-sm text-gray-700 block px-4 py-2 text-sm hover:bg-accent rounded-sm focus:bg-accent focus:text-accent-foreground"
        >
          Sign Out
        </Link>
      </DropdownMenuContent>
    </DropDownMenu>
  )
}

export default UserNav
