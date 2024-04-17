import { Button } from "components/__Shared/Button"
import {
  DropDownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger
} from "components/__Shared/DropdownMenu"
import DropDownMenuCloser from "events/DropDownMenuCloser"

import { ReactComponent as VerticalMenu } from "images/icon-ellipsis-vertical.svg"
import Requests from "requests"
import Store from "store"
import { TasksRemoveTask } from "store/actions"

const Actions = ({ task, ngn }) => {
  const onClickHandler = function () {
    // this will close all drop-down menus subscribed to this event emitter
    DropDownMenuCloser.next(null)
  }
  const handleOnClickEdit = (ev, task) => {
    ev.preventDefault()
    ngn.modal.show()
    ngn.data.set(task)
  }
  const handleOnClickDelete = (task) => {
    Store.dispatch(TasksRemoveTask(task._id))
    Requests.DeleteTask(task._id)
  }
  return (
    <DropDownMenu>
      <DropdownMenuTrigger onClick={onClickHandler}>
        <VerticalMenu className="w-5 h-4 cursor-pointer" />
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-[130px] p-1 rounded-sm bg-white">
        <Button
          onClick={(e) => handleOnClickEdit(e, task)}
          variant="ghost"
          className="w-full h-8"
        >
          <div className="flex w-full justify-start items-center gap-2">
            Edit
          </div>
        </Button>
        <Button
          onClick={() => handleOnClickDelete(task)}
          variant="ghost"
          className="w-full h-8"
        >
          <div className="flex w-full justify-start items-center gap-2">
            Delete
          </div>
        </Button>
      </DropdownMenuContent>
    </DropDownMenu>
  )
}
export default Actions
