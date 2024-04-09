import { ReactComponent as CheckCircledIcon } from "images/icon-check-circle.svg"
import { ReactComponent as CircleIcon } from "images/icon-circle.svg"
import { ReactComponent as StopwatchIcon } from "images/icon-stop-watch.svg"

export const statuses = [
  {
    value: "todo",
    label: "Todo",
    icon: <CircleIcon />
  },
  {
    value: "in-progress",
    label: "In Progress",
    icon: <StopwatchIcon />
  },
  {
    value: "done",
    label: "Done",
    icon: <CheckCircledIcon />
  }
]
