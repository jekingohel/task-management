import {
  DropDownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger
} from "components/__Shared/DropdownMenu"
import DropDownMenuCloser from "events/DropDownMenuCloser"

import { ReactComponent as CaretDown } from "images/icon-caret-down.svg"
const Status = () => {
  const onClickHandler = function () {
    // this will close all drop-down menus subscribed to this event emitter
    DropDownMenuCloser.next(null)
  }
  return (
    <DropDownMenu>
      <DropdownMenuTrigger onClick={onClickHandler}>
        <div className="flex items-center">
          <span>All Status</span>
          <CaretDown />
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-[150px] p-1 rounded-sm bg-white">
        <button className="w-full text-left text-sm block px-3 py-2 text-sm hover:bg-accent rounded-sm focus:bg-accent focus:text-accent-foreground">
          To Do
        </button>
        <button className="w-full text-left text-sm block px-3 py-2 text-sm hover:bg-accent rounded-sm focus:bg-accent focus:text-accent-foreground">
          In Progress
        </button>
        <button className="w-full text-left text-sm block px-3 py-2 text-sm hover:bg-accent rounded-sm focus:bg-accent focus:text-accent-foreground">
          Done
        </button>
      </DropdownMenuContent>
    </DropDownMenu>
  )
}
export default Status
