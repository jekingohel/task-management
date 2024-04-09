import { useSelector } from "react-redux"

const TasksHeading = () => {
  const tasks = useSelector((state) => state.Tasks.collection)
  const todo = Object.values(tasks).filter((task) => task.status === "todo")
  const inProgress = Object.values(tasks).filter(
    (task) => task.status === "in-progress"
  )
  return (
    <div className="space-y-0.5">
      <h2 className="scroll-m-20 text-xl font-bold mb-0">Tasks</h2>
      <p className="text-muted-foreground text-sm">
        {`You had ${inProgress.length} in-progress and ${todo.length} to-do tasks`}
      </p>
    </div>
  )
}

export default TasksHeading
