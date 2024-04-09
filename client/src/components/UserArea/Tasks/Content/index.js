import { useState } from "react"
import { dummyData } from "../data"

import SingleTask from "./SingleTask"
import { DragDropContext, Droppable } from "react-beautiful-dnd"
const Content = () => {
  const [tasks, setTasks] = useState(dummyData)
  const onDragEnd = (result) => {
    if (!result.destination) {
      return
    }

    const reorderedTasks = Array.from(tasks)
    const [removed] = reorderedTasks.splice(result.source.index, 1)
    reorderedTasks.splice(result.destination.index, 0, removed)

    setTasks(reorderedTasks)
  }
  return (
    <div className="tasks mt-5">
      <DragDropContext onDragEnd={onDragEnd}>
        <Droppable droppableId="tasks">
          {(provided) => (
            <div
              className="space-y-2"
              {...provided.droppableProps}
              ref={provided.innerRef}
            >
              {tasks.map((task, index) => (
                <SingleTask key={task.id} task={task} index={index} />
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
    </div>
  )
}
export default Content
