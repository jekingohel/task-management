import { useSelector } from "react-redux"

import Store from "store"
import Modal from "services/Modal"
import { SharedModalErrorMessageHide } from "store/actions"
import ModalOverlay from "components/__Shared/ModalOverlay"

const ErrorMessageModal = function () {
  const { opened, message, callback } = useSelector(
    (state) => state.Shared.modals.error_message
  )

  const closeModalHandler = function (ev) {
    Modal.hide()
    Store.dispatch(SharedModalErrorMessageHide())
    if (typeof callback === "function") {
      callback()
    }
  }

  let containerClasses = opened
    ? "overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full flex"
    : "overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full hidden"

  return (
    <>
      <div
        className={containerClasses}
        id="errorMessageModal"
        tabIndex="-1"
        aria-labelledby="errorMessageModalLabel"
        aria-hidden="true"
      >
        <div className="relative p-4 w-full max-w-md max-h-full">
          <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
            <button
              onClick={closeModalHandler}
              type="button"
              className="absolute top-3 end-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
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
            <div className="p-4 md:p-5 text-center">
              <svg
                className="mx-auto mb-4 text-gray-400 w-12 h-12 dark:text-gray-200"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M10 11V6m0 8h.01M19 10a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                />
              </svg>
              <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
                {message}
              </h3>
              <button
                type="button"
                className="text-white bg-indigo-600 hover:bg-indigo-800 focus:ring-4 focus:outline-none focus:ring-indigo-300 dark:focus:ring-indigo-800 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center"
                data-bs-dismiss="modal"
                onClick={closeModalHandler}
              >
                OK
              </button>
            </div>
          </div>
        </div>
      </div>
      {opened && <ModalOverlay />}
    </>
  )
}

export default ErrorMessageModal
