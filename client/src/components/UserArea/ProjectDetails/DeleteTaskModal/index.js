import React, { useState } from "react"
import Requests from "requests"
import Modal from "services/Modal"
import ModalOverlay from "components/__Shared/ModalOverlay"
import Store from "store"
import { TasksSetDeleteItem } from "store/actions"

const DeleteTaskModal = ({ ngn }) => {
  const [showModal, setShowModal] = useState(false)
  const [data, setData] = useState(null)
  const [submitLoader, setSubmitLoader] = useState(false)

  let [className] = showModal ? Modal.showConfig : Modal.hideConfig

  ngn.modal.show = (data) => {
    setSubmitLoader(false)
    setData(data)
    setShowModal(true)
    Modal.show()
  }

  ngn.modal.hide = () => {
    setData(null)
    setShowModal(false)
    Modal.hide()
  }

  const hideModal = (ev) => {
    ngn.modal.hide()
  }

  const handleConfirmDelete = () => {
    setSubmitLoader(true)
    Requests.DeleteTask({ id: data?._id })
      .then((res) => {
        const message = res?.data?.msg
        message === "DELETED" && Store.dispatch(TasksSetDeleteItem(data))
        hideModal()
      })
      .catch((err) => {
        console.dir(err)
        // Handle error: Show message to the user
      })
  }

  const keepModalOpen = (ev) => {
    ev.stopPropagation()
  }

  return showModal ? (
    <>
      <div
        className={className}
        id="deleteProjectModal"
        tabIndex="-1"
        aria-labelledby="deleteProjectModalLabel"
        aria-hidden="true"
        onClick={hideModal}
      >
        <div className="relative bg-white p-8 w-full max-w-md max-h-full rounded-lg shadow dark:bg-gray-700">
          <div className="relative" onClick={keepModalOpen}>
            <div className="flex justify-center items-center mb-5">
              <h3
                className="text-3xl font-semibold tracking-tight"
                id="deleteProjectModalLabel"
              >
                Confirm Action
              </h3>
            </div>
            <div className="modal-body p-2">
              <p className="text-md text-muted-foreground mb-3">
                {data?.title} will be removed. Are you sure?
              </p>
            </div>
            <div className="modal-footer mt-5">
              <div className="flex flex-row items-center gap-5">
                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 border border-primary text-primary shadow hover:opacity-70 h-9 px-4 py-2"
                  onClick={hideModal}
                >
                  Discard
                </button>
                <button
                  onClick={handleConfirmDelete}
                  type="submit"
                  className="w-full inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground shadow hover:bg-primary/90 h-9 px-4 py-2"
                  disabled={submitLoader}
                >
                  {submitLoader ? "Deleting..." : "Confirm"}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ModalOverlay />
    </>
  ) : null
}

export default DeleteTaskModal
