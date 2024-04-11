import { useSelector } from "react-redux"
import Box from "./Box"

const Statistics = () => {
  const tasks = useSelector((state) => state.Tasks.collection)
  const todo = Object.values(tasks).filter((task) => task.status === "todo")
  const inProgress = Object.values(tasks).filter(
    (task) => task.status === "in-progress"
  )
  const done = Object.values(tasks).filter((task) => task.status === "done")
  return (
    <div className="grid gap-4 grid-cols-3 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-3 justify-stretch mb-5">
      <Box title="To Do" count={todo.length} color="red" />
      <Box title="In Progress" count={inProgress.length} color="yellow" />
      <Box title="Done" count={done.length} color="green" />
    </div>
  )
}

export default Statistics
