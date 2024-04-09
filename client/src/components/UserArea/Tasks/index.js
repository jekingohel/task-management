import { useSelector } from "react-redux"

import { Button } from "components/__Shared/Button"

import { ReactComponent as Plus } from "images/icon-plus.svg"
import FormatDate from "utils/FormatDate"

import Statistics from "./Statistics"
import Status from "./Filters/Status"
import Search from "./Filters/Search"
import Content from "./Content"

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
        <div className="space-y-0.5">
          <h2 className="scroll-m-20 text-xl font-bold mb-0">Tasks</h2>
          <p className="text-muted-foreground text-sm">
            You had 2 in-progress and 23 to-do tasks
          </p>
        </div>
        <div className="flex justify-start md:justify-end gap-2">
          <Status />
          <Button className="h-9">
            <Plus className="mr-2 h-4 w-4" /> Add Task
          </Button>
        </div>
      </div>
      <Search />
      <Content />
    </div>
  )
}
export default Tasks
