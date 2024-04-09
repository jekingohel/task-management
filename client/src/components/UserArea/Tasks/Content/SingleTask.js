import { statuses } from "../data"
import { ReactComponent as VerticalMenu } from "images/icon-ellipsis-vertical.svg"
import { ReactComponent as Drag } from "images/icon-drag.svg"
import { Checkbox } from "components/UserArea/__Shared/Checkbox"
import { Badge } from "components/__Shared/Badge"
import { Button } from "components/__Shared/Button"
import { Draggable } from "react-beautiful-dnd"

const SingleTask = ({ task, index }) => {
  let badgeClass = "bg-red-100 text-red-600 hover:bg-red-100"
  if (task.status === "in-progress") {
    badgeClass = "bg-yellow-100 text-yellow-600 hover:bg-yellow-100"
  } else if (task.status === "done") {
    badgeClass = "bg-green-200 text-green-700 hover:bg-green-200"
  }
  let taskStatus = statuses.find((status) => status.value === task.status)
  return (
    <Draggable draggableId={task.id} index={index}>
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
              <Checkbox id={`task-${index}`} />
              <div className="flex flex-col space-y-1">
                <label
                  htmlFor={`task-${index}`}
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  {task.title}
                </label>
                <span className="text-muted-foreground text-xs">
                  {task.description}
                </span>
              </div>
            </div>
            <div className="flex items-center space-x-1">
              <Badge className={badgeClass}>{taskStatus.label}</Badge>
              <Button variant="ghost" className="py-0 px-1 h-4">
                <VerticalMenu className="w-5 h-4" />
              </Button>
            </div>
          </div>
        </div>
      )}
    </Draggable>
  )
}

export default SingleTask
