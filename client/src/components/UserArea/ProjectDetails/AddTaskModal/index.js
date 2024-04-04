import { useRef, useState } from "react"

import Modal from "services/Modal"
import ModalBody from "./ModalBody"
import ModalFooter from "./ModalFooter"
import ModalOverlay from "components/__Shared/ModalOverlay"

const AddTaskModal = function ({ ngn }) {
  const [showModal, setShowModal] = useState(false)

  const state = useRef({
    form: {
      id: "createProject",
      body: {},
      footer: {}
    }
  })

  let [className] = showModal ? Modal.showConfig : Modal.hideConfig

  ngn.modal.show = (data) => {
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
        <div className="relative bg-white p-8 w-full max-w-md  rounded-lg shadow dark:bg-gray-700">
          <div className="relative bg-white " onClick={keepModalOpen}>
            <div className="flex justify-between items-center mb-5">
              <h3
                className="text-2xl font-semibold tracking-tight"
                id="addTaskModalLabel"
              >
                Add a Task
              </h3>
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
            <div className="modal-footer mt-5">
              <ModalFooter state={state.current} hideModal={hideModal} />
            </div>
          </div>
        </div>
      </div>
      <ModalOverlay />
    </>
  ) : null
}

export default AddTaskModal
