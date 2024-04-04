import React from "react"

const TaskUpdate = ({ handelUpdate }) => {
  return (
    <button
      onClick={handelUpdate}
      className="relative flex select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground w-full"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="18"
        height="18"
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
      <p className="ml-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground">
        Edit
      </p>
    </button>
  )
}

export default TaskUpdate
