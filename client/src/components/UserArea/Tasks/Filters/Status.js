import { Button } from "components/__Shared/Button"
import {
  DropDownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger
} from "components/__Shared/DropdownMenu"
import DropDownMenuCloser from "events/DropDownMenuCloser"
import { statuses } from "../Statuses"
import { ReactComponent as CaretDown } from "images/icon-caret-down.svg"
import { useFilterTasks } from "../TaskFilterContext"

const Status = () => {
  const { status, setStatus } = useFilterTasks()

  const onClickHandler = function () {
    // this will close all drop-down menus subscribed to this event emitter
    DropDownMenuCloser.next(null)
  }

  const handleOnClick = (status) => {
    DropDownMenuCloser.next(null)
    setStatus(status)
  }
  return (
    <DropDownMenu>
      <DropdownMenuTrigger onClick={onClickHandler}>
        <div className="flex items-center h-6 min-w-[100px] justify-between">
          {status ? status.label : <span>All Status</span>}
          <CaretDown />
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-[150px] p-1 rounded-sm bg-white">
        <Button
          onClick={() => handleOnClick(null)}
          variant="ghost"
          className="w-full"
        >
          <div
            className={`text-left w-full ${status === null ? "font-semibold" : "font-normal"}`}
          >
            All Status
          </div>
        </Button>
        {statuses.map((s) => (
          <Button
            onClick={() => handleOnClick(s)}
            key={s.value}
            variant="ghost"
            className="w-full"
          >
            <div
              className={`flex w-full justify-start items-center gap-2 ${status !== null && status.value === s.value ? "font-semibold" : "font-normal"}`}
            >
              {s.label}
            </div>
          </Button>
        ))}
      </DropdownMenuContent>
    </DropDownMenu>
  )
}
export default Status
