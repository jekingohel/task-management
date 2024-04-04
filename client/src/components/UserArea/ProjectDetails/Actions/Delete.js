import React from "react"
import { useState } from "react"
import Requests from "requests"

import Modal from "services/Modal"
import ModalOverlay from "components/__Shared/ModalOverlay"
import Store from "store"
import { ProjectsSetDeleteItem } from "store/actions"
import { useNavigate } from "react-router-dom"
import Uri from "services/Uri"

const DeleteProjectModal = function ({ ngn }) {
  const navigate = useNavigate()
  const [showModal, setShowModal] = useState(false)
  const [data, setdata] = useState(null)
  const [submitLoader, setSubmitLoader] = useState(false)

  let [className] = showModal ? Modal.showConfig : Modal.hideConfig

  ngn.modal.show = (data) => {
    setSubmitLoader(false)
    setdata(data)
    setShowModal(true)
    Modal.show()
  }
  ngn.modal.hide = () => {
    setdata(null)
    setShowModal(false)
    Modal.hide()
  }

  const hideModal = (ev) => {
    ngn.modal.hide()
  }

  const handelConfirmDelete = () => {
    setSubmitLoader(true)
    Requests.DeleteProject({ id: data?._id })
      .then((res) => {
        const message = res?.data?.msg
        message === "DELETED" && Store.dispatch(ProjectsSetDeleteItem(data))
        hideModal()
        navigate(Uri.u())
      })
      .catch((err) => {
        console.dir(err)
      })
  }

  const keepModalOpen = (ev) => {
    ev.stopPropagation()
  }

  return showModal ? (
    <>
      <div
        className={className}
        id="forgottenPasswordModal"
        tabIndex="-1"
        aria-labelledby="forgottenPasswordModalLabel"
        aria-hidden="true"
        onClick={hideModal}
      >
        <div className="relative bg-white p-8 w-full max-w-md max-h-full rounded-lg shadow dark:bg-gray-700">
          <div className="relative" onClick={keepModalOpen}>
            <div className="flex justify-center items-center mb-5">
              <h3
                className="text-3xl font-semibold tracking-tight"
                id="forgottenPasswordModalLabel"
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
                  onClick={handelConfirmDelete}
                  type="submit"
                  className="w-full inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground shadow hover:bg-primary/90 h-9 px-4 py-2"
                  disabled={submitLoader}
                >
                  Confirm
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

const Delete = ({ data }) => {
  const ngn = {
    modal: {}
  }

  const handelDelete = () => {
    ngn.modal.show(data)
  }
  return (
    <>
      <DeleteProjectModal ngn={ngn} />
      <button
        type="button"
        onClick={handelDelete}
        className="p-1 mx-2 rounded-e-md dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="22"
          height="22"
          viewBox="0 0 24 24"
          fill="none"
          stroke="red"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="lucide lucide-trash-2"
        >
          <path d="M3 6h18" />
          <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" />
          <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" />
          <line x1="10" x2="10" y1="11" y2="17" />
          <line x1="14" x2="14" y1="11" y2="17" />
        </svg>
      </button>
    </>
  )
}

export default Delete
