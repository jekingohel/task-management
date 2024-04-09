import { useSelector } from "react-redux"

import { Button } from "components/__Shared/Button"

import { ReactComponent as Plus } from "images/icon-plus.svg"
import FormatDate from "utils/FormatDate"

import Statistics from "./Statistics"
import Content from "./Content"
import TasksHeading from "./TasksHeading"
import { TaskFilterProvider } from "./TaskFilterContext"

const Tasks = () => {
  const name = useSelector((state) => state.User.name)
  return (
    <div className="py-6 w-full">
      <div className="mb-5">
        <h1 className="scroll-m-20 text-3xl font-bold">Welcome, {name}!</h1>
        <p className="text-muted-foreground">
          It's {FormatDate(new Date())}. Let's check how your day goes.
        </p>
      </div>
      <Statistics />
      <div className="grid gap-4 md:grid-cols-1 lg:grid-cols-2 justify-between items-center">
        <TasksHeading />
        <div className="flex justify-start md:justify-end gap-2">
          <Button className="h-9">
            <Plus className="mr-2 h-4 w-4" /> Add Task
          </Button>
        </div>
      </div>
      <TaskFilterProvider>
        <Content />
      </TaskFilterProvider>
    </div>
  )
}
export default Tasks
