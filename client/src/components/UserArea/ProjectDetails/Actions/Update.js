import React from "react"
import UpdateProjectModal from "../UpdateProjectModal"

const Update = ({ data }) => {
  const ngn = {
    modal: {}
  }

  const handelUpdate = () => {
    ngn.modal.show(data)
  }
  return (
    <>
      <UpdateProjectModal ngn={ngn} />
      <button
        type="button"
        onClick={handelUpdate}
        className="p-1 mx-2 rounded-e-md dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="22"
          height="22"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="lucide lucide-pencil"
        >
          <path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z" />
          <path d="m15 5 4 4" />
        </svg>
      </button>
    </>
  )
}

export default Update
