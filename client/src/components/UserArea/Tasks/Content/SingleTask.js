import { ReactComponent as Drag } from "images/icon-drag.svg"
import { Checkbox } from "components/UserArea/__Shared/Checkbox"
import { Badge } from "components/__Shared/Badge"
import { Draggable } from "react-beautiful-dnd"
import { statuses } from "../Statuses"
import { useState } from "react"
import UpdateTask from "requests/UpdateTask"
import { TasksUpdateTask } from "store/actions"
import Store from "store"
import Actions from "./Actions"

const SingleTask = ({ task, index, ngn }) => {
  let badgeClass = "bg-red-100 text-red-600 hover:bg-red-100"
  if (task.status === "in-progress") {
    badgeClass = "bg-yellow-100 text-yellow-600 hover:bg-yellow-100"
  } else if (task.status === "done") {
    badgeClass = "bg-green-100 text-green-900 hover:bg-green-100"
  }
  let taskStatus = statuses.find((status) => status.value === task.status)

  const [checked, setChecked] = useState(task.status === "done")
  const [status, setStatus] = useState(taskStatus.label)
  const [badgeClassState, setBadgeClassState] = useState(badgeClass)

  const handleChecked = () => {
    let isChecked = !checked
    setChecked(isChecked)
    if (isChecked) {
      setStatus("Done")
      setBadgeClassState("bg-green-100 text-green-900 hover:bg-green-100")
    } else {
      setStatus("Todo")
      setBadgeClassState("bg-red-100 text-red-600 hover:bg-red-100")
    }
    // Call API to update the status
    const updatedTasks = { ...task, status: isChecked ? "done" : "todo" }
    UpdateTask(updatedTasks).then(() => {
      Store.dispatch(TasksUpdateTask(updatedTasks))
    })
  }

  return (
    <Draggable draggableId={task._id} index={index}>
      {(provided, snapshot) => (
        <div
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          className="flex flex-row items-center gap-2"
        >
          <Drag className="text-muted-foreground" />
          <div
            className={`w-full p-2 border rounded-md ${snapshot.isDragging ? "bg-gray-100" : "bg-white"} focus-within:outline-none focus-within:bg-muted hover:bg-muted flex justify-between items-center`}
          >
            <div className="flex items-start space-x-2">
              <Checkbox
                onCheckedChange={handleChecked}
                id={`task-${index}`}
                checked={checked}
              />
              <div className="flex flex-col space-y-1">
                <label
                  htmlFor={`task-${index}`}
                  className={`text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 ${checked ? "line-through" : ""}`}
                >
                  {task.title}
                </label>
                <span className="text-muted-foreground text-xs">
                  {task.description}
                </span>
              </div>
            </div>
            <div className="flex items-center space-x-1 shrink-0">
              <Badge className={badgeClassState}>{status}</Badge>
              <Actions task={task} ngn={ngn} />
            </div>
          </div>
        </div>
      )}
    </Draggable>
  )
}

export default SingleTask
