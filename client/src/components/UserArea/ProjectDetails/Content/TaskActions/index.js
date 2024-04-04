import React, { useState } from "react"
import TaskUpdate from "./TaskUpdate"
import TaskDelete from "./TaskDelete"
import Modal from "services/Modal"
import EditTaskModal from "../../EditTaskModal"
import DeleteTaskModal from "../../DeleteTaskModal"

const TaskActions = ({ ngn }) => {
  const [showModal, setShowModal] = useState(false)
  const [data, setData] = useState(null)

  const editNGN = { modal: {} }
  const delteNGN = { modal: {} }

  ngn.modal.show = (data) => {
    setData(data)
    setShowModal(true)
    Modal.show()
  }
  ngn.modal.hide = () => {
    setShowModal(false)
    setData(null)
    Modal.hide()
  }

  const hideModal = (ev) => {
    ngn.modal.hide()
  }

  const keepModalOpen = (ev) => {
    ev.stopPropagation()
  }

  const handelUpdate = () => {
    editNGN.modal.show(data)
    hideModal()
  }

  const handleDelete = () => {
    delteNGN.modal.show(data)
    hideModal()
  }

  return (
    <>
      <EditTaskModal ngn={editNGN} />
      <DeleteTaskModal ngn={delteNGN} />
      {showModal ? (
        <>
          <div className="absolute h-50 z-50 top-12 end-0 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2">
            <TaskUpdate handelUpdate={handelUpdate} />
            <TaskDelete handleDelete={handleDelete} />
          </div>
          <div
            className="fixed inset-0 z-40 cursor-default"
            aria-hidden="true"
            onClick={(e) => {
              keepModalOpen(e)
              hideModal()
            }}
          />
        </>
      ) : null}
    </>
  )
}

export default TaskActions
