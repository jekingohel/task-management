import { useRef, useState } from "react"

import Modal from "services/Modal"
import ModalOverlay from "components/__Shared/ModalOverlay"
import ModalBody from "./ModalBody"

const AddTaskModal = function ({ ngn }) {
  const [showModal, setShowModal] = useState(false)

  const state = useRef({
    form: {
      id: "addTaskForm",
      body: {},
      footer: {}
    }
  })

  let [className] = showModal ? Modal.showConfig : Modal.hideConfig

  ngn.modal.show = () => {
    setShowModal(true)
    Modal.show()
  }
  ngn.modal.hide = () => {
    setShowModal(false)
    Modal.hide()
  }

  const hideModal = (ev) => {
    ngn.modal.hide()
  }

  const keepModalOpen = (ev) => {
    ev.stopPropagation()
  }

  return showModal ? (
    <>
      <div
        className={className}
        id="addTaskModal"
        tabIndex="-1"
        aria-labelledby="addTaskModalLabel"
        aria-hidden="true"
        onClick={hideModal}
      >
        <div className="relative bg-white p-8 w-full max-w-md max-h-full rounded-lg shadow dark:bg-gray-700">
          <div className="relative" onClick={keepModalOpen}>
            <div className="flex justify-between items-center mb-5">
              <div className="flex flex-col gap-2">
                <h3
                  className="text-2xl font-semibold tracking-tight"
                  id="addTaskModalLabel"
                >
                  Add Task
                </h3>
                <p className="text-sm text-muted-foreground">
                  Streamline your workload effortlessly with a simplified task
                  management system. Organize tasks efficiently and boost
                  productivity.
                </p>
              </div>
              <button
                onClick={hideModal}
                type="button"
                className="absolute top-1 -end-2 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                data-modal-hide="popup-modal"
              >
                <svg
                  className="w-3 h-3"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 14"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                  />
                </svg>
                <span className="sr-only">Close modal</span>
              </button>
            </div>
            <div className="modal-body">
              <ModalBody state={state.current} hideModal={hideModal} />
            </div>
          </div>
        </div>
      </div>
      <ModalOverlay />
    </>
  ) : null
}

export default AddTaskModal
