import { useEffect, useState } from "react"

import SingleTask from "./SingleTask"
import { DragDropContext, Droppable } from "react-beautiful-dnd"
import { useSelector } from "react-redux"
import Filters from "../Filters"
import { useFilterTasks } from "../TaskFilterContext"
import Store from "store"
import UpdateTask from "requests/UpdateTask"
import { TasksUpdateTask } from "store/actions"
import EditTaskModal from "../EditTaskModal"

const Content = () => {
  const ngn = {
    modal: {},
    data: {}
  }

  const { status, search } = useFilterTasks()
  const allTasks = useSelector((state) => state.Tasks.collection)

  const [tasks, setTasks] = useState(Object.values(allTasks))
  const onDragEnd = (result) => {
    if (!result.destination) {
      return
    }
    const reorderedTasks = Array.from(tasks)
    const [removed] = reorderedTasks.splice(result.source.index, 1)
    reorderedTasks.splice(result.destination.index, 0, removed)

    setTasks(reorderedTasks)

    const updatedTaksId = result.draggableId
    const newPosition = result.destination.index
    // Call API to update the position
    const task = reorderedTasks.find((t) => t._id === updatedTaksId)
    const updatedTasks = { ...task, order: newPosition + 1 }

    UpdateTask(updatedTasks).then(() => {
      //  Store.dispatch(TasksUpdateTask(updatedTasks))
    })
  }
  useEffect(() => {
    setTasks(Object.values(allTasks))
  }, [allTasks])

  useEffect(() => {
    const _tasks = Store.getState().Tasks.collection
    let resetState = true
    if (status) {
      resetState = false
      setTasks(Object.values(_tasks).filter((t) => t.status === status.value))
    }
    if (search) {
      resetState = false
      const searchInput = search.toLowerCase()
      const searchTasks = Object.values(_tasks).filter(
        (t) =>
          t.status.toLowerCase() === searchInput ||
          t.title.toLowerCase().indexOf(searchInput) > -1 ||
          t.description.toLowerCase().indexOf(searchInput) > -1
      )
      setTasks(searchTasks)
    }
    if (resetState) {
      setTasks(Object.values(_tasks))
    }
  }, [status, search])
  return (
    <>
      <EditTaskModal ngn={ngn} />
      <Filters />
      <div className="tasks mt-5 -ml-5">
        <DragDropContext onDragEnd={onDragEnd}>
          <Droppable droppableId="tasks">
            {(provided) => (
              <div
                className="space-y-2"
                {...provided.droppableProps}
                ref={provided.innerRef}
              >
                {tasks.map((task, index) => (
                  <SingleTask
                    key={task._id}
                    task={task}
                    index={index}
                    ngn={ngn}
                  />
                ))}
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        </DragDropContext>
        {tasks.length === 0 && (
          <p className="text-muted-foreground text-sm">
            No tasks are found matching your criteria
          </p>
        )}
      </div>
    </>
  )
}
export default Content
